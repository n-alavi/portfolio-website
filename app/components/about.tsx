"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../assets/about.jpg";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import useInViewAnimation from "../custom hook/useInViewAnimation";

export default function About() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  }); // Use the hook

  return (
    <div id="about" className="flex items-center">
      <motion.section
        className="mb-28 mt-20 max-w-[45rem] scroll-mt-28 px-4 leading-7"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust timing and easing
        ref={ref} // Attach the ref to the section to observe
        id="about"
      >
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
          درباره من
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          {/*  Column 1 */}

          <div className="flex-1 p-4 text-right">
            <p>
              پس از فارغ‌التحصیلی در رشته مهندسی فناوری اطلاعات، سفری به دنیای
              وب را آغاز کردم و از آن زمان تا کنون با علاقه‌ی زیادی به یادگیری و
              بهبود مهارت‌های خود در حوزه فرانت‌اند مشغول هستم. تمرکز اصلی من بر
              طراحی و پیاده‌سازی رابط‌های کاربری جذاب و کاربرپسند است. به
              یادگیری ابزارها و تکنولوژی‌های جدید مانند React، Next.js، و
              Tailwind CSS علاقه‌مندم و همواره در تلاش هستم تا با استفاده از
              بهترین روش‌ها، تجربه کاربری را بهبود بخشم.
            </p>
          </div>
          {/* <div className="flex p-4 ">
            <Image
              src={AboutImage}
              alt="about me image"
              width={400}
              height={400}
              priority={true}
              className="flex rounded border-none shadow-md items-center justify-center"
            />
          </div> */}
        </div>
      </motion.section>
    </div>
  );
}
