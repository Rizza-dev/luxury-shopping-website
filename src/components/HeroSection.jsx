import React, { useEffect, useState } from "react";
import { useScroll, useTransform , motion } from "framer-motion";
import Image from "next/image";
import { heroImage, messages, ctaTexts } from "@/assets/assets";
import Link from "next/link";
const HeroSection = () => {
  const [randomText, setRandomText] = useState("");
  const [randomCta, setRandomCta] = useState("");


  // Random Video
  useEffect(() => {
    // const index = Math.floor(Math.random() * videos.length);
    const messageIndex = Math.floor(Math.random() * messages.length);
    const CtaIndex = Math.floor(Math.random() * ctaTexts.length);
    // setRandomVideo(videos[index]);
    setRandomText(messages[messageIndex]);
    setRandomCta(ctaTexts[CtaIndex]);
  }, []);


  return (
    <section
      id="home"
      className="w-full h-[700px] min-h-screen relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full relative flex flex-col items-center justify-end pb-20 text-white gap-8 "
      >
        <Image
          className="absolute inset-0 z-0 object-center object-cover"
          src={heroImage.image2}
          alt="hero"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.8 }}
          className="text-3xl inset-0 z-10 font-bold text-center text-[#e6e5e5] mt-4 tracking-widest"
        >
          {randomText}
        </motion.h1>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="border z-10 bg-white text-black px-6 py-3 rounded-sm tracking-widest font-normal hover:scale-105 transition-all ease-in-out duration-700 cursor-pointer"
        >
          <Link href={""}>{randomCta}</Link>
        </motion.span>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
