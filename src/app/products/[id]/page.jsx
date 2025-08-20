"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { productDetail } from "@/assets/assets";
import { ArrowDown, Phone, Plus } from "lucide-react";
import Link from "next/link";
const page = () => {
  const [mainImage, setMainImage] = useState(productDetail.iamges[0]); // عکس اصلی اولی باشه
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="w-full h-fit relative overflow-hidden mb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full min-h-screen relative max-h-[700px] aspect-[9/16]"
      >
        <Image
          className=" z-0 object-cover lg:object-contain  object-center "
          src={mainImage}
          alt="hero"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="flex gap-2 absolute bottom-10 z-10 right-[64px] py-1 px-2">
          {productDetail.iamges.map((item, index) => (
            <Image
              className={`${
                mainImage === item ? "border-2 border-white" : ""
              } cursor-pointer`}
              onClick={() => setMainImage(item)}
              key={index}
              src={item}
              alt="product"
              width={50}
              height={50}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-full px-4 relative flex flex-col lg:flex-row items-start justify-between my-20 text-white gap-8 "
      >
        <div className="w-full h-fit">
          <h1 className="text-2xl font-light">{productDetail.name}</h1>
          <p className="text-base font-medium mt-6">{productDetail.price}</p>
          <button className="flex gap-2 items-center justify-between max-w-screen-sm w-full mt-10 border-b py-6">
            سایز <Plus size={16} />
          </button>
          <h3 className="mt-[48px] text-2xl">توضیحات محصول</h3>
          <p className="mt-4 text-sm max-w-screen-sm leading-loose font-light">
            {productDetail.description}
          </p>
          <button className="flex gap-2 items-center justify-between max-w-screen-sm w-full mt-[48px] border-b py-6">
            جزییات محصول <ArrowDown size={16} />
          </button>
          <button className="flex gap-2 items-center justify-between max-w-screen-sm w-full border-b py-6">
            جزییات محصول <ArrowDown size={16} />
          </button>
        </div>
        <div className="w-full max-w-screen-sm h-full flex flex-col items-center lg:items-start  justify-center">
          <p className="font-light">
            برای مشاهده تاریخ تحویل مورد انتظار، سایز مورد نظر را انتخاب کنید.
          </p>
          <button className="lg:w-3/4  w-[90%] mt-4 bg-white text-black py-4 hover:scale-105 transition-all ease-out duration-500">
            سایز
          </button>
          <div className="mt-10">
            <Link className="flex gap-1 items-center border-b" href={""}>
              <Phone className="-rotate-90" size={16} />
              تلفنی سفارش دهید
            </Link>
            <p className="mt-2 text-xs font-light">
              با کمک مشاوران ما، سفارش خود را به راحتی تکمیل کنید.
            </p>
            <span className="flex gap-1 items-center border-b mt-6" href={""}>
              <Plus size={16} />
              خدمات برند ما
            </span>
            <p className="mt-2 text-xs font-light">
              ارسال رایگان، تعویض و بازگشت رایگان، پرداخت امن و بسته‌بندی
              اختصاصی
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
