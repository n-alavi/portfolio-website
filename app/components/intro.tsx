"use client";

import Image from "next/image";
import ProfilePic from "../assets/profile.svg";
import { motion } from "framer-motion";
export default function Intro() {
  return (
    <div>
      {/* profile picture */}

      <div className="flex items-center justify-center mt-6">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
            >
              <Image
                src={ProfilePic}
                alt="profile-picture"
                width={192}
                height={192}
                quality={95}
                priority={true}
                className="h-32 w-32 rounded-full border-[0.3rem] border-white
            object-cover object-[50%_0%] shadow-xl"
              />
            </motion.div>
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </div>
        </div>
      </div>

      {/* introduction  container */}
      <motion.div
        className="leading-[1.5] mb-10  px-4 text-xl font-medium sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h4 className="mt-4 text-2xl font-medium">سلام</h4>
        <h1 className="mt-4">
          <span className="font-bold">من </span> دانشجوی{" "}
          <span className="font-bold">
            فرانت اند هستم. <br /> این وبسایت جهت آشنایی بیشتر با نمونه کارهای
            من است.
          </span>
        </h1>
      </motion.div>
    </div>
  );
}
