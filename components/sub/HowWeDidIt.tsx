"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Counter animation component
const Counter = ({ from = 0, to, duration = 2, suffix = "" }: any) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(from);
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setDisplay(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [count, isInView, to, duration]);

  return (
    <span ref={ref} className="text-[#7042f8] font-bold text-4xl">
      {display}
      {suffix}
    </span>
  );
};

const HowWeDidIt = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between bg-white dark:bg-[#0b0b15] text-black dark:text-white rounded-2xl p-10 md:p-14 shadow-lg gap-10 w-full border border-[#7042f8]/10">
      {/* Left Section */}
      <div className="flex-1 space-y-5">
        <div className="flex items-center gap-3">
          <button className="p-2 bg-white dark:bg-[#1c1c28] rounded-full shadow-md hover:scale-110 transition">
            <FaArrowLeft className="text-[#7042f8]" />
          </button>
          <h3 className="bg-[#b49bff] text-white text-lg font-bold py-2 px-5 rounded-lg shadow-md">
            How we did it
          </h3>
        </div>

        <ul className="list-disc list-inside text-[16px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
          <li>
            Built target account list with 50 priority prospects via LinkedIn
            Matched Audiences
          </li>
          <li>
            Created carousel ads showcasing industry case studies and metrics
          </li>
          <li>
            Set up retargeting flows with InMail and content triggers
          </li>
          <li>Deployed geo-targeted event ads based on engagement</li>
          <li>
            Added testimonial videos to boost webinar signups by{" "}
            <span className="text-[#7042f8] font-semibold">25%</span>
          </li>
        </ul>
      </div>

      {/* Right Stats Box */}
      <div className="flex-1 bg-white dark:bg-[#14141f] rounded-xl shadow-md p-8 flex flex-col justify-center gap-8 border border-[#7042f8]/10 relative">
        <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-[#1c1c28] rounded-full shadow-md hover:scale-110 transition">
          <FaArrowLeft className="text-[#7042f8]" />
        </button>
        <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-[#1c1c28] rounded-full shadow-md hover:scale-110 transition">
          <FaArrowRight className="text-[#7042f8]" />
        </button>

        <div>
          <div className="flex items-baseline gap-3">
            <motion.div
              className="border-l-4 border-[#7042f8] pl-3 flex items-baseline"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Counter to={50} />
            </motion.div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-[15px]">
            priority accounts targeted on LinkedIn
          </p>
        </div>

        <div>
          <div className="flex items-baseline gap-3">
            <motion.div
              className="border-l-4 border-[#7042f8] pl-3 flex items-baseline"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Counter to={25} suffix="%" />
            </motion.div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-[15px]">
            lift in webinar sign-ups through testimonial retargeting
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDidIt;
