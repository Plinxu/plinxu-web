import Image from "next/image";
import HeroSection from "@/components/landing/Herosection";
import HeaderSection from "@/components/landing/HeaderSection";
import FeatureSection from "@/components/landing/FeatureSection";
import WorkSmarterSection from "@/components/landing/WorkSmarterSection";
import PaymentSection from "@/components/landing/PaymentSection";
import BillingSection from "@/components/landing/BillingSection";
import GrowthSection from "@/components/landing/GrowthSection";
import Section1 from "@/components/landing/Section1";


export default function Home() {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <FeatureSection />
    <WorkSmarterSection />
    <PaymentSection />
    <BillingSection />
    <Section1 />
   </>
  );
}
