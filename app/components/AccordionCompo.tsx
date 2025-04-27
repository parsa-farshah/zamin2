"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "💬 How long does a typical project take?",
    answer:
      "Depends on the size — some magic takes a week, some takes a month. We’ll give you a timeline upfront.",
  },
  {
    question: "💰 Are your services affordable for startups?",
    answer:
      "Depends on the size — some magic takes a week, some takes a month. We’ll give you a timeline upfront.",
  },
  {
    question:
      "🛠️ Can I pick just one service, like UI Design or only development?",
    answer:
      "Depends on the size — some magic takes a week, some takes a month. We’ll give you a timeline upfront.",
  },
  {
    question: "📦 Do I get the source files when the project ends?",
    answer:
      "Depends on the size — some magic takes a week, some takes a month. We’ll give you a timeline upfront.",
  },
  {
    question: "📦 Do I get the source files when the project ends?",
    answer:
      "Depends on the size — some magic takes a week, some takes a month. We’ll give you a timeline upfront.",
  },
];

export default function AccordionCompo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        You Ask, We Spill the <br /> Beans
      </h2>
      <div className="space-y-4 pt-10">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-base font-medium">{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 text-gray-600 text-sm"
              >
                {item.answer ||
                  "Details will be provided during our consultation."}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
