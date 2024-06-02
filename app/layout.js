import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me A Chai - Fund your projects with Chai",
  description: "This website is a crowdfounding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
