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

// export const metadata = {
//   title: "Nyon Tech",
//   description: "Professional web development services in Kerala. Custom websites, SEO optimization, and e-commerce solutions tailored to your business needs.",
//   keywords: "Web development in Kerala Custom web development Kerala E-commerce solutions Kerala E-commerce solutions Kerala E-commerce solutions Kerala Website maintenance Kerala"
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Nyon Tech | Website Design & Development</title>
        <meta name="description" content="Nyon Tech is a results-driven web design agency specializing in custom websites, SEO, and branding. We create fast, responsive, and user-friendly sites that help businesses grow. Get a high-performing website today" />
        <meta name="keywords" content="Nyon Tech, web design agency, website development agency, custom website design, bespoke website development, professional website builders, tailored website solutions, website design and development, responsive website design, SEO-friendly website development, creative website agency, modern website design, full-service web design agency, small business website design, ecommerce website development, custom UX/UI design, digital product development, user-friendly website design, innovative web development, custom CMS development, web application developers, affordable website development, mobile application development, custom mobile apps, custom software development, scalable web solutions, website optimization services, WordPress development, React web development, Next.js web development, Laravel web development, fast-loading websites, enterprise web solutions, website redesign services, conversion-focused design, AI-powered website solutions" />
        <meta name="author" content="Nyon Tech" />
        <meta property="og:title" content="Nyon Tech | Website Agency" />
        <meta property="og:description" content="Custom websites tailored for your business growth." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://nyon.co.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nyon Tech | Website Agency" />
        <meta name="twitter:description" content="We build custom, high-performing websites." />
        <meta name="twitter:image" content="/preview.png" />
        <link rel="canonical" href="https://nyon.co.in" />
        <link rel="icon" href="/favicon.ico" />
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
