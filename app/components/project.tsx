"use client";

import { motion } from "framer-motion";
import useInViewAnimation from "../custom hook/useInViewAnimation"; // Import the hook

export default function Projects() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  }); // Use the hook

  return (
    <div id="projects">
      <motion.div
        className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust timing and easing
        ref={ref} // Attach the ref to the section to observe
        id="projects"
      >
        <>
          <h1 className="text-3xl font-bold text-center mb-8">پروژه های من</h1>

          <h1 className="text-2xl font-bold my-24">به زودی... </h1>
        </>
      </motion.div>
    </div>
  );
}
