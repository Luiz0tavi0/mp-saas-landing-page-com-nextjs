'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from "@/app/Hero/hero";
import HowHorks from "./HowWorks/how-to-works";
import PriceSection from "./Prices/prices";
import CtaFinal from "./CtaFinal/cta-final";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <HeroSection />
      </div>
      <div data-aos="fade-up">
        <HowHorks />
      </div>
      <div data-aos="fade-up">
        <PriceSection />
      </div>
      <div data-aos="fade-up">
        <CtaFinal />
      </div>
    </>
  );
}