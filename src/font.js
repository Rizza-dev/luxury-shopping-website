import localFont from "next/font/local";

// فونت آرتین
export const artin = localFont({
  src: [
    {
      path: "../public/fonts/Artin-Sharp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Artin-Sharp-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-artin",
});

// فونت ایران سنس
export const iranSans = localFont({
  src: [
    {
      path: "../public/fonts/IRANSansWeb_UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb_Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-iran-sans",
});
// فونت ایران یکان
export const iranYekan = localFont({
  src: [
    {
      path: "../public/fonts/IRANYekanWebThin.woff2",
      weight: "100",
      style: "normal",
    },
    
    {
      path: "../public/fonts/IRANYekanWebLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/IRANYekanWebExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-iran-yekan",
});