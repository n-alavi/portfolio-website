"use client";

import { motion } from "framer-motion";
export default function Projects() {
  return (
    <motion.div
      className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="projects"
    >
      <>
        <h1 className="text-3xl font-bold text-center mb-8">پروژه های من</h1>

        <h1 className="text-2xl font-bold my-24">به زودی... </h1>
      </>
    </motion.div>
  );
}
