"use client";
import { ArrowLeft, Menu, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, scale, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -80]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.4]);

  // تغییر رنگ متن
  const color = useTransform(scrollY, [0, 200], ["#d9d9d9", "#000000"]);

  const pathName = usePathname();

 const router = useRouter();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`py-4 px-4 w-full fixed backdrop-blur-md  ${pathName === '/' ? 'bg-white/80 text-black' : 'text-white bg-black/80 '} z-50`}
    >
      <div className="flex items-center justify-between w-full ">
        {/* icons */}
        <div className="flex items-center justify-center gap-8 z-10">
          <Link
            href={""}
            className="flex items-center justify-center gap-2 z-10"
          >
            <p className="lg:block hidden text-sm">حساب کاربری</p>
            <User size={16} />
          </Link>
          <Link
            href={""}
            className="flex items-center justify-center gap-2 z-10"
          >
            <p className="lg:block hidden text-sm">سبد خرید</p>
            <ShoppingBag size={16} />
          </Link>
        </div>

        <button
          className="flex items-center justify-center gap-2 z-10"
          onClick={() => setShowMenu(!showMenu)}
        >
          <p className="lg:block hidden text-sm">منو</p>
          <Menu size={24} />
        </button>
      </div>
      {/* menu */}
      <div
        className={` ${
          showMenu
            ? "max-lg:translate-y-0 lg:translate-x-0 opacity-100"
            : "max-lg:translate-y-full lg:translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out w-full lg:w-1/3 h-screen bg-black text-white absolute top-0 right-0 z-20 px-10`}
      >
        <div className="w-full h-full z-50">
          <ul className="w-full h-fit mt-20 flex flex-col gap-6  text-lg">
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={"/products"}>جدید ترین</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>کیف دستی</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>اکسسوری</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>مسافرتی</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>کفش | کتونی</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>پاییزه</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center">
              <Link href={""}>مانتو</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex justify-between items-center text-xs mr-2">
              <Link href={"/products"}>دیدن همه</Link>
              <ArrowLeft size={14} />
            </li>
          </ul>
          {/* ----------------conditions----------------- */}
          <ul className="w-full h-fit mt-20 flex flex-col gap-6 px-4 font-light">
            <li onClick={()=>setShowMenu(false)} className="flex items-center justify-between">
              <Link href={" "}>شرایط مرجوعی</Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex items-center justify-between">
              <Link href={""}>آدرس فروشگاه</Link>
              <ArrowLeft size={14} />
            </li>
          </ul>
          {/* ----------------contactus--------------- */}
          <ul className="w-full h-fit mt-20 flex flex-col gap-6 px-4 font-light pr-4 cursor-pointer">
            <li onClick={()=>setShowMenu(false)} className="flex items-center justify-between relative text-sm">
              <Link
                className="before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-2 before:right-0 before:transition-all before:duration-300 hover:before:w-[60px] "
                href={""}
              >
                ثبت نام
              </Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex items-center justify-between relative text-sm">
              <Link
                className="before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-2 before:right-0 before:transition-all before:duration-300 hover:before:w-[60px] "
                href={""}
              >
                سفارسات من
              </Link>
              <ArrowLeft size={14} />
            </li>
            <li onClick={()=>setShowMenu(false)} className="flex items-center justify-between relative text-sm">
              <Link
                className="before:content-[''] before:w-0 before:h-[2px] before:bg-white before:absolute before:-bottom-2 before:right-0 before:transition-all before:duration-300 hover:before:w-[60px] "
                href={""}
              >
                تماس با ما
              </Link>
              <ArrowLeft size={14} />
            </li>
          </ul>
        </div>
        <X
          className="absolute lg:right-8  top-4 left-8 bg-white text-black rounded-full cursor-pointer"
          size={32}
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      {pathName === "/" ? (
        <motion.h1
          style={{
            y,
            scale,
            color,
          }}
          onClick={() => router.push("/")}

          className="absolute cursor-pointer w-full top-20 right-0 left-0 text-center text-nowrap font-bold text-7xl tracking-widest text-[#d9d9d9]"
        >
          MAH ROX
        </motion.h1>
      ) : (
        <div  className="text-4xl cursor-pointer font-bold tracking-widest absolute w-full right-0 text-center left-0 top-3 ">
          <p className="w-fit mx-auto" onClick={() => router.push("/")}>MAHROX</p>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
