import Link from "next/link";
import Accordion from "./Accordion";
import { ArrowLeft, Plus } from "lucide-react";
import Image from "next/image";
const faqItems = [
  {
    q: "نحوه تماس با ما",
    a: {
      title: "می‌توانید از طریق روش‌های زیر با ما در ارتباط باشید:",
      lis: ["ایمیل: support@yourbrand.com", "تلفن / واتساپ: +98 912 345 6789"],
    },
  },
  {
    q: "راهنمای خرید",
    a: {
      title: "خرید از فروشگاه ما ساده و لذت‌بخش است. مراحل زیر را دنبال کنید: ",
      lis: [
        "انتخاب محصول: کالکشن ما را مرور کرده و لباس مورد علاقه خود را انتخاب کنید.",
        "اضافه کردن به سبد خرید: سایز و رنگ مناسب را انتخاب و روی «افزودن به سبد» کلیک کنید.",
        "مشاهده سبد خرید: محتوای سبد خود را بررسی و تعداد آیتم‌ها را تأیید کنید.",
        "پرداخت امن: اطلاعات خود را وارد کرده و پرداخت را به صورت امن انجام دهید.",
        "پیگیری سفارش: پس از ثبت سفارش، کد پیگیری برای شما ارسال می‌شود تا روند ارسال را مشاهده کنید.",
      ],
    },
  },
];

const Footer = () => {
  return (
    <div className="px-2 lg:px-4 my-20 text-center py-20 bg-black">
      <div className="w-full h-fit grid grid-cols-1 lg:grid-cols-4 gap-20 gap-y-20 lg:gap-y-20">
        <div className="w-full flex flex-col items-center justify-center gap-2 ">
          <Link href={"/#home"} className="rounded-xl overflow-hidden">
            <Image src={"/logo.png"} width={150} height={150} alt="logo" />
          </Link>
          <span className="text-center w-full tracking-widest font-bold">MAHROKH MEZON</span>
        </div>
        <Accordion acc={faqItems} />
        <div className="flex flex-col items-start justify-start gap-4 w-full h-fit">
          <div className="border-b-[0.5px] border-gray-700  overflow-hidden shadow-sm w-full  p-2">
            <span className="flex items-center justify-between gap-4 cursor-pointer">
              درباره ما
              <Plus size={12} />
            </span>
          </div>
          <div className="border-b-[0.5px] border-gray-700  overflow-hidden shadow-sm w-full  p-2">
            <span className="flex items-center justify-between gap-4 cursor-pointer">
              شرایط و قوانین
              <Plus size={12} />
            </span>
          </div>
          <div className="border-b-[0.5px] border-gray-700  overflow-hidden shadow-sm w-full p-2">
            <span className="flex items-center justify-between gap-4 cursor-pointer">
              ساعات پاسخگویی
              <Plus size={12} />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 w-full h-fit">
          <Link
            className="flex w-full items-center justify-between "
            href={"/#home"}
          >
            صفحه اصلی <ArrowLeft size={16} />
          </Link>
          <Link className="flex w-full items-center justify-between" href={"/"}>
            صفحه محصولات <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
