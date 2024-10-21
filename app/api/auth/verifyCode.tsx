// pages/api/auth/verifyCode.tsx
import connectDB from "@/app/database/db";
import User from "@/app/database/models/user";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  if (req.method === "POST") {
    const { phoneNumber, code } = req.body;

    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verificationCode === code) {
      user.isVerified = true;
      user.verificationCode = null; // Clear the code after verification
      await user.save();
      return res.status(200).json({ message: "Verified successfully" });
    }

    return res.status(400).json({ message: "Invalid verification code" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
