// smsService.js
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSmsCode = async (phoneNumber, code) => {
  await client.messages.create({
    body: `Your verification code is ${code}`,
    to: phoneNumber,
    from: process.env.TWILIO_PHONE_NUMBER, // Twilio phone number
  });
};
