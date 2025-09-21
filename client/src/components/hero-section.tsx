import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient" data-testid="hero-section">
      {/* Floating Shapes */}
      <div className="floating-shape animate-float" style={{ top: '20%', left: '10%' }}>
        <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
      </div>
      <div className="floating-shape animate-float" style={{ top: '60%', right: '15%', animationDelay: '-2s' }}>
        <div className="w-12 h-12 bg-accent/20 rotate-45"></div>
      </div>
      <div className="floating-shape animate-float" style={{ top: '80%', left: '20%', animationDelay: '-4s' }}>
        <div className="w-20 h-20 bg-primary/10 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Scrolling Text Background */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="flex space-x-8 text-9xl font-bold animate-pulse-slow">
            <span>INNOVATE</span>
            <span>CREATE</span>
            <span>DEVELOP</span>
            <span>INSPIRE</span>
          </div>
        </div>

        <div className="relative z-20">
          <h1 className="hero-name text-4xl md:text-6xl lg:text-8xl font-bold font-display mb-6 animate-slide-up" data-testid="hero-title">
            <span className="block text-gradient">RATHWA</span>
            <span className="block text-gradient">BALAVANT</span>
            <span className="block text-gradient">TRIKAM BHAI</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-fade-in font-light" 
             style={{ animationDelay: '0.3s' }} data-testid="hero-tagline">
            Aspiring Computer Engineer & AI Enthusiast
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" 
               style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 animate-glow"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow" data-testid="scroll-indicator">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
