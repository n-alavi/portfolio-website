"use client";

import { motion } from "framer-motion";

import { skills } from "../constant/data";

export default function SkillsCard() {
  return (
    <motion.section
      className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
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
  );
}
