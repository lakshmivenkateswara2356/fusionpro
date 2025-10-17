"use client";


import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Feather Icons

const faqs = [
  { question: "What is demand generation?", answer: "Demand generation is..." },
  { question: "What are the benefits of demand generation?", answer: "Benefits include..." },
  { question: "What is the difference between demand generation and lead generation?", answer: "The difference is..." },
  { question: "What is a demand generation strategy?", answer: "It includes..." },
  { question: "How can our services improve your demand processes?", answer: "Our services help..." },
  { question: "What are the best practices for demand generation in B2B SaaS?", answer: "Best practices include..." },
  { question: "Why should you collaborate with our agency for B2B SaaS?", answer: "Because we offer..." },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-bold text-center text-[#4e1bb6] mb-8">Demand Generation FAQs</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg my-2 shadow-sm text-[#4e1bb6]">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
            >
              <span>{index + 1}. {faq.question}</span>
              <span className="flex items-center justify-center w-8 h-8  bg-white  text-[#4e1bb6]">
                {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 text-gray-600 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-10 text-center">
       
       
      </div>

      {/* Footer */}
      <footer className="bg- border-t mt-10 p-6 text-sm text-[#4e1bb6]">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
    {/* Left section - footer links */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
      <div>
        <div className="font-bold text-lg mb-2">Revv Growth</div>
      </div>

      <div>
        <h4 className="font-semibold text-2xl mb-2">Company</h4>
        <ul className="space-y-1">
          <li>Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Resources</li>
          <li>RevvAI Nextt</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-2xl mb-2">Support</h4>
        <ul className="space-y-1">
          <li>Book a Meeting</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold  text-2xl mb-2">Policies</h4>
        <ul className="space-y-1">
          <li>Refund Policy</li>
          <li>Privacy Policy</li>
          <li>Address</li>
          <li>CIN: U74999TN2021PTC146493</li>
        </ul>
      </div>
    </div>


    {/* Right section - Email input */}
   <div className="flex flex-col items-center md:items-start text-center w-40 md:text-left ">
      <h3 className="text-sm md:text-sm font-bold text-gray-800">
        Join our newsletter and get your hands on our marketing frameworks & strategies{" "}
        <span className="text-purple-700">[for FREE!]</span>
      </h3>

     
    </div>
  </div>
</footer>

    </div>
  );
};

export default Faq;
