import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import AboutPreview from "@/components/home/AboutPreview";
import ServiceCards from "@/components/home/ServiceCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <AboutPreview />
      <ServiceCards />
      <WhyChooseUs />
      <ProjectsPreview />
      <CTA />
    </>
  );
}
