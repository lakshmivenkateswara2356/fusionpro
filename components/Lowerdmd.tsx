"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaRocket, FaUser, FaChartLine, FaLightbulb } from "react-icons/fa";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

// Optional: You can replace this with your actual LinkedIn image
import linkedInImg from "@/public/b631fdad-b652-48df-9536-ac2db970fd2c.png";

const DemandCreation = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white dark:bg-[#0b0b15] rounded-2xl shadow-lg gap-10">
      {/* Left Animated Icon Cube */}
      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center"
      >
        {/* Rotating background shape */}
        <motion.div
          className="absolute inset-0 border border-[#7042f8]/40 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 border border-[#7042f8]/30 rounded-lg"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        {/* Center LinkedIn Logo Card */}
        <motion.div
          className="p-8 bg-[#5020d1] rounded-xl shadow-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <FaLinkedinIn className="text-white text-6xl" />
        </motion.div>

        {/* Orbiting Icons */}
        <OrbitingIcon icon={<FaRocket />} top="0%" left="50%" />
        <OrbitingIcon icon={<FaUser />} top="50%" right="0%" />
        <OrbitingIcon icon={<FaChartLine />} bottom="0%" left="50%" />
        <OrbitingIcon icon={<FaLightbulb />} top="50%" left="0%" />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl space-y-5"
      >
        <div className="border-l-4 border-[#7042f8] pl-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
            Demand Creation:{" "}
            <span className="text-[#7042f8]">
              Generate Interest Where It Didn’t Exist
            </span>
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-[16px] leading-relaxed">
          Use LinkedIn Ads to reach decision-makers who may not yet know they
          need your product.
        </p>

        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 border-b-2 border-[#7042f8] inline-block pb-1">
          LinkedIn Ads
        </h3>

        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Targeted Audience Segmentation</li>
          <li>Compelling Ad Creative</li>
          <li>Campaign Management</li>
          <li>Lead Generation Forms</li>
          <li>Ongoing Optimization</li>
          <li>From Awareness to Action</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default DemandCreation;

// Orbiting Icon Component
interface OrbitingIconProps {
  icon: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const OrbitingIcon: React.FC<OrbitingIconProps> = ({
  icon,
  top,
  bottom,
  left,
  right,
}) => (
  <motion.div
    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-[#1c1c28] shadow-lg"
    style={{ top, bottom, left, right }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
  >
    <div className="text-[#7042f8] text-xl">{icon}</div>
  </motion.div>
);
