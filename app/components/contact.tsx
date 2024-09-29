"use client";

import { motion } from "framer-motion";
import React, { FormEvent } from "react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 mt-20 w-[min(100%,38rem)] scroll-mt-28 sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-8">ارتباط با من </h1>

      <p className="text-center text-gray-700">
        برای تماس با من از فرم زیر استفاده کنید.
      </p>

      <form className="mt-10 flex flex-col gap-3 ">
        <input
          name="sender-email"
          id="email"
          className="rounded-sm border border-black/10 px-4 py-2  
          bg-opacity-80 "
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          required
          maxLength={500}
        />
        <textarea
          name="sender-message"
          id="message"
          cols={30}
          rows={10}
          placeholder="پیغام..."
          className="mb-4 h-52 rounded-sm border border-black/5 p-4  
          bg-opacity-80 "
          required
          maxLength={5000}
        />

        <button
          type="submit"
          className="mt-4 rounded-md bg-purple-100  py-1 px-2 text-gray-600 font-semibold hover:from-purple-200 hover:to-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:bg-gradient-to-r size-25 "
          style={{ alignSelf: "flex-end" }}
        >
          ارسال پیام
        </button>
      </form>
    </motion.section>
  );
}
