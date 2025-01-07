import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import AnnouncementsCarousel from "@/components/AnnouncementsCarousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-dark-bg w-full min-h-screen">
      <div className="mainpage flex flex-col items-center justify-center w-full max-w-screen-xl mx-auto">
        <Navbar />
        <AboutUs />
        <AnnouncementsCarousel />
        <ContactUs />
      </div>
    </main>
  );
}

