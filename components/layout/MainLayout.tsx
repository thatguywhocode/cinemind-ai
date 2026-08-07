import { ReactNode } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#090B13] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}