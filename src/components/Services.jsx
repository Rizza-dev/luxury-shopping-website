import { services } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-20 lg:mt-40"
    >
      <h3 className="text-2xl font-light tracking-wider w-full text-center">
        خدمات ما
      </h3>
      <div className=" mt-10 scrollbar-hide flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap md:whitespace-normal px-4">
        {services.map((item) => (
          <div
            key={item.id}
            className="w-full min-w-[300px] h-full max-h-screen-sm  flex flex-col items-center justify-center relative rounded-sm "
          >
            <div className="w-full h-full relative aspect-[3/4]">
              <video
                className="rounded-sm object-cover object-center absolute inset-0 w-full h-full"
                autoPlay
                loop
                muted
                src={item.vid}
              />
            </div>

            <div className="mt-6">
              <p className="font-medium text-center tracking-wider">{item.name}</p>
              <p className="max-w-[250px] tracking-wider leading-loose font-light text-wrap text-center text-xs mt-5">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
