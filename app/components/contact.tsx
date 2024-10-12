"use client";

import { motion } from "framer-motion";
import useInViewAnimation from "../custom hook/useInViewAnimation";

export default function Contact() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  }); // Use the hook

  return (
    <div id="contact" className="flex justify-center items-center ">
      <motion.section
        className="mb-20 mt-20  w-full max-w-[38rem] px-4 scroll-mt-28 sm:mb-28 "
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust timing and easing
        ref={ref} // Attach the ref to the section to observe
        id="contact"
      >
        <h1 className="text-3xl font-bold text-center mb-8">ارتباط با من </h1>

        <p className="text-center text-gray-700">
          برای تماس با من از فرم زیر استفاده کنید.
        </p>

        <form className="mt-10 flex flex-col gap-4 items-center ">
          <input
            name="sender-email"
            id="email"
            className="w-full max-w-full rounded-sm border border-black/10 px-4 py-2  
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
            className="w-full max-w-full h-52 rounded-sm border border-black/5 p-4
          bg-opacity-80 "
            required
            maxLength={5000}
          />

          <button
            type="submit"
            className="mt-4 rounded-md bg-purple-400  py-2 px-6 text-gray-600 font-semibold hover:from-purple-200 hover:to-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-300 dark:bg-gradient-to-r size-25 "
            style={{ alignSelf: "flex-end" }}
          >
            ارسال پیام
          </button>
        </form>
      </motion.section>
    </div>
  );
}
