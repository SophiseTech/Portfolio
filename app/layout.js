import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar/Main";
import Progressbar from "@/app/Components/Progressbar";
import Fab from "@/app/Components/Fab/Main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const neo = localFont({
  src: "./fonts/neo.ttf",
  variable: "--font-neo",
  weight: "100 900",
});

export const metadata = {
  title: "Nyon Tech",
  description: "Professional web development services in Kerala. Custom websites, SEO optimization, and e-commerce solutions tailored to your business needs.",
  keywords: "Web development in Kerala Custom web development Kerala E-commerce solutions Kerala E-commerce solutions Kerala E-commerce solutions Kerala Website maintenance Kerala"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Professional web development services in Kerala. Custom websites, SEO optimization, and e-commerce solutions tailored to your business needs." />
        <meta name="keywords" content="Web development Kerala, custom websites, SEO services, e-commerce solutions, website design, Kerala web agency" />
        <meta name="author" content="Nyon Tech" />
        <title>Web Development Agency in Kerala | Nyon Tech</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neo.variable} antialiased`}
      >
        <div className="anim-container absolute h-screen overflow-hidden inset-0 items-center justify-center">
          <div id="anim1" className="anim1 h-1/2 absolute inset-0 bg-black z-[100] -translate-y-full"></div>
          <Progressbar />
          <div id="anim2" className="anim2 h-1/2 absolute inset-0 bg-black z-[100] translate-y-[200%]"></div>
        </div>
        <NavBar />
        <Fab />
        {children}

      </body>
    </html>
  );
}
