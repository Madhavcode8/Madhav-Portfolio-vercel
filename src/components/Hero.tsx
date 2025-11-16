import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-flow 20s linear infinite'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <div className="mb-6">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            Available for Opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          Hi, I'm <span className="text-gradient">Madhav Singhal</span>
        </h1>
        
        <div className="h-16 mb-6">
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Aspiring Software Developer with strong foundations in Java, Spring Boot, Python, 
          and web technologies. Passionate about backend development, API design, 
          and solving real-world problems.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="glow hover:glow-strong transition-all"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="hover-lift"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
        </div>

        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com/madhavsinghal" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card transition-all hover:-translate-y-1"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/madhavsinghal" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card transition-all hover:-translate-y-1"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a 
            href="mailto:madhavsinghal880@gmail.com"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card transition-all hover:-translate-y-1"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
