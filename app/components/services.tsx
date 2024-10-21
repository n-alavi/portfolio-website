"use client";

import { motion } from "framer-motion";
import { services } from "../constant/data";
import useInViewAnimation from "../hooks/useInViewAnimation";

export default function Services() {
  const { ref, controls } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: false,
  }); // Use the hook

  return (
    <div id="services">
      <motion.div
        className="mb-28 mt-20 w-full max-w-[45rem] scroll-mt-28 px-4 sm:mb-40"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }} // Adjust timing and easing
        ref={ref} // Attach the ref to the section to observe
      >
        <div className=" px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">خدمات من</h2>
          <p className="text-lg text-gray-600 mb-12">
            کارهایی که میتوانم انجام دهم
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
              <p className="text-gray-600 mt-2 text-center text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
