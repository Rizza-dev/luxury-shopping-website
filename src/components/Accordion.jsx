"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const Accordion = ({ acc }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="flex flex-col items-start justify-center gap-4 w-full h-fit">
      {acc.map((item, index) => (
        <div
          key={index}
          className=" overflow-hidden shadow-sm w-full border-b-[0.5px] border-gray-700 p-2 "
        >
          <span
            onClick={() => toggle(index)}
            className="flex items-center justify-between gap-4 cursor-pointer"
          >
            {item.q}
            {openIndex === index ? <Minus size={12} /> : <Plus size={12} />}
          </span>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-start justify-center gap-4 w-full h-fit py-4 "
              >
                <span className="text-start font-light text-sm">
                  {item.a.title}
                </span>
                {item.a.lis && (
                  <ul className="list-disc list-inside flex flex-col items-start gap-4">
                    {item.a.lis.map((item, index) => (
                      <li className="text-start font-light text-sm" key={index}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
