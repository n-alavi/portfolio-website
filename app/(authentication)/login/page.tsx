"use client";
import { useState } from "react";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const requestCode = async () => {
    const res = await fetch("/api/auth/requestCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  const verifyCode = async () => {
    const res = await fetch("/api/auth/verifyCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phoneNumber, code }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-left mt-5">SMS Authentication</h1>
      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={requestCode}>Get Code</button>

      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={verifyCode}>Verify Code</button>

      {message && <p>{message}</p>}
    </div>
  );
}
