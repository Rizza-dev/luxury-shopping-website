"use client";
import React, { useRef } from "react";
import { categorys, samples } from "@/assets/assets";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Categorys = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div className="w-full h-full mt-20 text-white text-center px-4">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-2xl font-light tracking-wider"
      >
        انتخاب طراحان ما
      </motion.h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 text-center mt-10 justify-items-center"
      >
        {categorys.map((item) => (
          <div
            key={item.id}
            className="w-full h-full flex items-center justify-center flex-col "
          >
            <div className="relative w-full">
              <a href={""} className="absolute inset-0 z-10" />
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <h3 className="text-xs md:text-base w-full h-full py-4 text-white ">
              {item.text}
            </h3>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-full h-full gap-2 flex items-center justify-center flex-col lg:flex-row mt-20"
      >
        {samples.map((item) => (
          <div
            key={item.id}
            className="w-full h-full flex items-center justify-center flex-col  relative"
          >
            <div className="relative w-full">
              <a href={""} className="absolute inset-0 z-20" />
              <div className="w-full aspect-[3/4] relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <p className="absolute bottom-24 lg:bottom-40 z-20 text-xl lg:text-3xl ">
              {item.text}
            </p>
            <Link
              href={""}
              className="absolute text-xs font-light tracking-wider xl:text-lg bottom-6 lg:bottom-20 z-20 py-4 px-6 bg-black/10 border-white/40 border backdrop-blur-md"
            >
              {item.cta}
            </Link>
            <div className="w-full h-full absolute inset-0 z-10 bg-black/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Categorys;
