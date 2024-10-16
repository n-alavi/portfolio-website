"use client";

import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import { auth } from "@/firebase"; // Adjust the path as necessary
import { FormEvent, useEffect, useState, useTransition } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import LoadingIndicator from "./loadingIndicator";

export default function OtpLogin() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setRecaptchaVerifier(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, []);

  useEffect(() => {
    const hasEnteredAllDigits = otp.length === 6;
    if (hasEnteredAllDigits) {
      verifyOtp();
    }
  }, [otp]);

  const verifyOtp = async () => {
    startTransition(async () => {
      setError("");

      if (!confirmationResult) {
        setError("please request OTP first");
        return;
      }

      try {
        await confirmationResult.confirm(otp);
        router.replace("/");
      } catch (error) {
        console.log(error);
        setError("Failed to verify OTP. Please check the OTP");
      }
    });
  };

  const requestOtp = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setResendCountdown(60);

    startTransition(async () => {
      setError("");

      if (!recaptchaVerifier) {
        return setError("RecaptchaVerifier is not initialized");
      }

      try {
        const result = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          recaptchaVerifier
        );
        setConfirmationResult(result); // Store the confirmation result
        setSuccess("OTP sent Successfully");
      } catch (error: any) {
        console.log(error);
        setResendCountdown(0);

        if (error.code === "auth/invalid-phone-number") {
          setError("Invalid phone number. Please check the number.");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many requests. Please try again later");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      }
    });
  };

  return (
    <div>
      {!confirmationResult && (
        <form onSubmit={requestOtp}>
          <input
            className="text-black"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p className="text-xs text-gray-400 mt-2">
            Please enter your number with the country code
          </p>
        </form>
      )}

      {confirmationResult && (
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(value: string) => setOtp(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      )}

      <Button
        disabled={!phoneNumber || isPending || resendCountdown > 0}
        onClick={() => requestOtp()}
        className="mt-5"
      >
        {resendCountdown > 0
          ? `Resend OTP in ${resendCountdown}`
          : isPending
          ? "Sending OTP"
          : "Send OTP"}
      </Button>

      <div className="p-10 text-center">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </div>

      <div id="recaptcha-container" />

      {isPending && <LoadingIndicator />}
    </div>
  );
}
