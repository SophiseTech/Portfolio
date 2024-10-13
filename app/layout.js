import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar/Main";
import Progressbar from "@/app/Components/Progressbar";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${neo.variable} antialiased`}
      >
        <div className="anim-container absolute h-screen overflow-hidden inset-0 items-center justify-center hidden">
          <div id="anim1" className="anim1 h-1/2 absolute inset-0 bg-black z-[100] -translate-y-full"></div>
          <Progressbar />
          <div id="anim2" className="anim2 h-1/2 absolute inset-0 bg-black z-[100] translate-y-[200%]"></div>
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
