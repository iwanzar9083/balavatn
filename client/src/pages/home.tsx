import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ThreeBackground from "@/components/three-background";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    if (typeof window !== "undefined" && window.gsap) {
      const { gsap } = window;
      gsap.registerPlugin(window.ScrollTrigger);

      // Hero text animation
      gsap.from('.hero-name span', {
        duration: 1.2,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Section animations
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.from(section.querySelectorAll('h2, h3, p, .card-hover'), {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          duration: 0.8,
          y: 50,
          opacity: 0,
          stagger: 0.1,
          ease: "power2.out"
        });
      });

      // Skill badges animation
      gsap.from('.skill-badge', {
        scrollTrigger: {
          trigger: '.skill-badge',
          start: "top 90%"
        },
        duration: 0.6,
        scale: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }
  }, []);

  return (
    <div className="relative">
      <ThreeBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
