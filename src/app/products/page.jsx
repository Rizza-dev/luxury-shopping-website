"use client";
import React from "react";
import { motion } from "framer-motion";
import { ListFilterPlus, SlidersHorizontal } from "lucide-react";
import { products } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
const Page = () => {
  return (
    <section className="pt-40">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-2xl  tracking-wider w-full text-start mb-10 px-4">
          پیراهن های زنانه
          <span className="text-xs mr-2 font-light">32 مورد</span>
        </h1>
        <div className=" w-full h-[0.5px] bg-gray-300/[0.2]"></div>
        <div className="flex items-center justify-between mt-8 px-4">
          <button className="flex items-center justify-center gap-2">
            <p className="font-normal text-sm relative before:content-[''] before:h-[0.5px] before:absolute before:right-0 before:top-6 before:w-0 hover:before:w-full before:transition-all ease-in-out duration-300 before:bg-white">
              فیلتر
            </p>
            <SlidersHorizontal size={16} />
          </button>
          <button className="flex items-center justify-center gap-2">
            <p className="font-normal text-sm relative before:content-[''] before:h-[0.5px] before:absolute before:right-0 before:top-6 before:w-0 hover:before:w-full before:transition-all ease-in-out duration-300 before:bg-white">
              دسته بندی بر اساس
            </p>
            <ListFilterPlus size={16} />
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 gap-y-10 mt-16 px-2"
      >
        {products.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="w-full h-full flex items-center justify-center flex-col "
          >
            <div className="relative w-full">
              <div className="w-full aspect-[3/4] group relative">
                <Image
                  fill
                  priority
                  src={item.image}
                  sizes="100%"
                  alt={'محصول'}
                  className="w-full h-full object-cover object-center transition-opacity duration-700 cursor-pointer group-hover:opacity-0"
                />
                {/* عکس دوم */}
                <Image
                  fill
                  sizes="100%"
                  src={item.imgHover}
                  alt="محصول"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 cursor-pointer group-hover:opacity-100"
                />
              </div>
            </div>
            <div className="w-full relative">
              <h3 className="font-light mt-6 text-xs">{item.name}</h3>
              <h3 className=" font-medium mt-4 text-xs">{item.price}</h3>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default Page;
