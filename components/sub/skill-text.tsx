"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Lowerdmd from '../Lowerdmd';
import Image from "next/image";
import HowWeDidIt from "./HowWeDidIt";

import Faq from '../../components/sub/Faq';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import Screen from '../../public/projects/Screensh.png';
import {
  FaChartLine,
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaCogs,
  FaSearch,
} from "react-icons/fa";

export const SkillText = () => {
  const [activeTab, setActiveTab] = useState<"google" | "seo">("google");

  const googleFeatures = [
    "Keyword Targeting",
    "Ad Copy & Landing Pages",
    "Campaign Structuring",
    "Bid & Audience Management",
    "Optimization & Analytics",
  ];

  const seoFeatures = [
    "Keyword & On-Page Optimization",
    "Content & Technical SEO",
    "Backlinks & Site Structure",
    "Performance Tracking",
  ];

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center px-6 md:px-20 py-10">
      {/* Top Section */}
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box flex items-center gap-2 py-[8px] px-[10px] border border-[#7042f88b] opacity-90 rounded-lg"
      >
        <SparklesIcon className="text-[#b49bff] h-5 w-5" />
        <h1 className="Welcome-text text-[13px] text-gray-300">
          Think better with Next.js 14
        </h1>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-[23px] text-[#1b50b5] font-medium mt-[10px] text-center mb-[15px]"
      >
        How we do it
      </motion.h2>

      <motion.h1
        variants={slideInFromRight(0.5)}
        className="text-[35px] text-gray-200 font-semibold mb-10 mt-[10px] text-center max-w-4xl leading-snug"
      >
        B2B Demand Generation Services That Puts Your Brand in Front of Your
        Target Audience
      </motion.h1>

      {/* Demand Capture Section */}
      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex flex-col md:flex-row items-center justify-between w-full gap-12 bg-[#0b0b15] rounded-2xl p-10 shadow-lg border border-[#5020d1]/20"
      >
        {/* Left Text Section */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-[26px] md:text-[30px] font-bold text-white leading-snug">
            Demand Capture: <br />
            <span className="text-[#b49bff]">Convert High-Intent Prospects</span>
          </h2>
          <p className="text-gray-400 text-[16px] leading-relaxed">
            Leverage SEO and Google Ads to reach prospects actively searching
            for solutions like yours.
          </p>

          {/* Tabs */}
          <div className="flex border rounded-lg overflow-hidden w-full md:w-[380px] mt-4">
            <button
              onClick={() => setActiveTab("google")}
              className={`flex-1 py-3 font-semibold transition-all ${
                activeTab === "google"
                  ? "bg-[#5020d1] text-white"
                  : "bg-transparent text-gray-400 hover:bg-[#1c1c28]"
              }`}
            >
              Google Ads
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-3 font-semibold transition-all ${
                activeTab === "seo"
                  ? "bg-[#5020d1] text-white"
                  : "bg-transparent text-gray-400 hover:bg-[#1c1c28]"
              }`}
            >
              SEO
            </button>
          </div>

          {/* List */}
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
            {(activeTab === "google" ? googleFeatures : seoFeatures).map(
              (feature, i) => (
                <li key={i}>{feature}</li>
              )
            )}
          </ul>
        </div>

        {/* Right Animated Circle */}
        <motion.div
          className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Circle */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              activeTab === "google" ? "bg-purple-900/20" : "bg-orange-500/20"
            } border-2 ${
              activeTab === "google"
                ? "border-purple-700"
                : "border-orange-400"
            }`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          {/* Center Icon */}
          <motion.div
            className={`p-8 rounded-full shadow-lg ${
              activeTab === "google" ? "bg-purple-800" : "bg-orange-500"
            }`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {activeTab === "google" ? (
              <FaGlobe className="text-white text-4xl" />
            ) : (
              <FaSearch className="text-white text-4xl" />
            )}
          </motion.div>

          {/* Orbiting Icons */}
          {activeTab === "google" ? (
            <>
              <IconOrbit icon={<FaEnvelope />} delay={0} color="purple" />
              <IconOrbit icon={<FaCogs />} delay={2} color="purple" />
              <IconOrbit icon={<FaUser />} delay={4} color="purple" />
              <IconOrbit icon={<FaChartLine />} delay={6} color="purple" />
            </>
          ) : (
            <>
              <IconOrbit icon={<FaUser />} delay={0} color="orange" />
              <IconOrbit icon={<FaChartLine />} delay={2} color="orange" />
              <IconOrbit icon={<FaEnvelope />} delay={4} color="orange" />
              <IconOrbit icon={<FaGlobe />} delay={6} color="orange" />
            </>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="flex flex-col md:flex-row items-center justify-between w-full gap-12 bg-[#0b0b15] rounded-2xl p-10 shadow-lg border border-[#5020d1]/20"
      >
       

        {/* Right Animated Circle */}
        <motion.div
          className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Rotating Circle */}
          <motion.div
            className={`absolute inset-0 rounded-full ${
              activeTab === "google" ? "bg-purple-900/20" : "bg-orange-500/20"
            } border-2 ${
              activeTab === "google"
                ? "border-purple-700"
                : "border-orange-400"
            }`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />

          {/* Center Icon */}
          <motion.div
            className={`p-8 rounded-full shadow-lg ${
              activeTab === "google" ? "bg-purple-800" : "bg-orange-500"
            }`}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {activeTab === "google" ? (
              <FaGlobe className="text-white text-4xl" />
            ) : (
              <FaSearch className="text-white text-4xl" />
            )}
          </motion.div>

          {/* Orbiting Icons */}
          {activeTab === "google" ? (
            <>
              <IconOrbit icon={<FaEnvelope />} delay={0} color="purple" />
              <IconOrbit icon={<FaCogs />} delay={2} color="purple" />
              <IconOrbit icon={<FaUser />} delay={4} color="purple" />
              <IconOrbit icon={<FaChartLine />} delay={6} color="purple" />
            </>
          ) : (
            <>
              <IconOrbit icon={<FaUser />} delay={0} color="orange" />
              <IconOrbit icon={<FaChartLine />} delay={2} color="orange" />
              <IconOrbit icon={<FaEnvelope />} delay={4} color="orange" />
              <IconOrbit icon={<FaGlobe />} delay={6} color="orange" />
            </>
          )}
        </motion.div>
         {/* Left Text Section */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-[26px] md:text-[30px] font-bold text-white leading-snug">
            Demand Creation:  <br />
            <span className="text-[#b49bff]">Generate Interest Where It Didn’t Exist</span>
          </h2>
          <p className="text-gray-400 text-[16px] leading-relaxed">
            Use LinkedIn Ads to reach decision-makers who may not yet know they need your product.
          </p>

          {/* Tabs */}
          <div className="flex border rounded-lg overflow-hidden w-full md:w-[380px] mt-4">
            <button
              onClick={() => setActiveTab("google")}
              className={`flex-1 py-3 font-semibold transition-all ${
                activeTab === "google"
                  ? "bg-[#5020d1] text-white"
                  : "bg-transparent text-gray-400 hover:bg-[#1c1c28]"
              }`}
            >
              Google Ads
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-3 font-semibold transition-all ${
                activeTab === "seo"
                  ? "bg-[#5020d1] text-white"
                  : "bg-transparent text-gray-400 hover:bg-[#1c1c28]"
              }`}
            >
              SEO
            </button>
          </div>

          {/* List */}
          <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
            {(activeTab === "google" ? googleFeatures : seoFeatures).map(
              (feature, i) => (
                <li key={i}>{feature}</li>
              )
            )}
          </ul>
        </div>
      </motion.div>

         <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-[23px] text-[#1b50b5] font-medium mt-[10px] text-center mb-[15px]"
      >
        Why Should You Choose Us?
      </motion.h2>

      <motion.h1
        variants={slideInFromRight(0.5)}
        className="text-[35px] text-gray-200 font-semibold mb-10 mt-[10px] text-center max-w-4xl leading-snug"
      >
        We’re Your Ideal B2B SaaS Demand Generation Agency!
      </motion.h1>

     <Image src={Screen} alt="Screenshot preview" width={2500} height={2500} />

 <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-[23px] text-[#1b50b5] font-medium mt-[10px] text-center mb-[15px]"
      >
        Case study
      </motion.h2>
     
<motion.h1
        variants={slideInFromRight(0.5)}
        className="text-[35px] text-gray-200 font-semibold mb-10 mt-[10px] text-center max-w-4xl leading-snug"
      >
        Vymo wanted break into India's competitive banking and insurance market by leveraging hyper-targeted LinkedIn Ads and ABM strategies, resulting in a $21M pipeline
      </motion.h1>

      <HowWeDidIt/>


       <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
      Do you want to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            achieve your MQL 
          </span>{" "}
        numbers {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            ? 
          </span>


 <motion.h1
        variants={slideInFromRight(0.5)}
        className="text-[17px] text-gray  mb-10 mt-[10px] text-center max-w-4xl leading-snug"
      >
        Lets get on a free discovery call to see how we can help.
      </motion.h1>

         
        </motion.h1>

        <motion.div
          className="mt-8 flex justify-center gap-3 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <input
            type="email"
            placeholder="Enter Your Work Email ID"
            className="border border-purple-400 rounded-xl px-5 py-3 w-72 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="bg-[#4e1bb6] text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition">
            Book a Free Call
          </button>
        </motion.div>
        
    </div>
  );
};

// Orbiting Icon Component
interface IconOrbitProps {
  icon: React.ReactNode;
  delay: number;
  color: "purple" | "orange";
}
const IconOrbit: React.FC<IconOrbitProps> = ({ icon, delay, color }) => (
  <motion.div
    className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 12, ease: "linear", delay }}
    style={{
      transformOrigin: "150px",
    }}
  >
    <div
      className={`text-lg ${
        color === "purple" ? "text-purple-700" : "text-orange-500"
      }`}
    >
      {icon}
    </div>
    
    


  </motion.div>

  
);
