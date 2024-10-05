import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Navbar from "@/components/common/Navbar";

export default function Client({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-screen bg-white">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
