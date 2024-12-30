import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white w-full">
      <div className="mainpage flex flex-col items-center justify-center w-full">
        <Navbar />
        <AboutUs />
        <ContactUs />
      </div>
    </main>
  );
}

