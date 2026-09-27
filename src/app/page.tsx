import { Header } from "@/components/layout/Header";
import { MobileDock } from "@/components/layout/MobileDock";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { BookingProvider } from "@/components/booking/BookingContext";
import { Booking } from "@/components/booking/Booking";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Pricing } from "@/components/sections/Pricing";
import { Team } from "@/components/sections/Team";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Space } from "@/components/sections/Space";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <SmoothScroll>
      <BookingProvider>
        <JsonLd />
        <Header />
        <main id="sadrzaj">
          <Hero />
          <Marquee />
          <Pricing />
          <Booking />
          <Team />
          <BeforeAfter />
          <Space />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <MobileDock />
      </BookingProvider>
    </SmoothScroll>
  );
}
