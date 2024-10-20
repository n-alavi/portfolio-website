// pages/api/auth/requestCode.js
import connectDB from "../../../../db";
import User from "../../models/user";
import { sendSmsCode } from "../../smsServices";
import type { NextApiRequest, NextApiResponse } from "next";

const generateCode = () =>
  Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit code.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  if (req.method === "POST") {
    const { phoneNumber } = req.body;

    // Check if user already exists
    const user = await User.findOne({ phoneNumber });

    const verificationCode = generateCode();

    if (user) {
      user.verificationCode = verificationCode;
      await user.save();
    } else {
      const newUser = new User({ phoneNumber, verificationCode });
      await newUser.save();
    }

    await sendSmsCode(phoneNumber, verificationCode);

    res.status(200).json({ message: "Code sent" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
