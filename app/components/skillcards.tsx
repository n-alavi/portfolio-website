"use client";

import { motion } from "framer-motion";
import useInViewAnimation from "../custom hook/useInViewAnimation";
import { skills } from "../constant/data";

export default function SkillsCard() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  }); // Use the hook

  return (
    <div id="skills">
      <motion.section
        className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust timing and easing
        ref={ref} // Attach the ref to the section to observe
        id="skills"
      >
        <div className=" px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">مهارت ها </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center">
                  {skill.name}
                </h3>
                <p className="text-gray-600 mt-2 text-center">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
