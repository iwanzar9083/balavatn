import { useEffect, useState } from "react";
import { Code, Cloud, Bot, Globe, Cpu } from "lucide-react";

export default function AboutSection() {
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    // Counter animation
    const animateCounter = (target: number, setter: (value: number) => void) => {
      const increment = target / 100;
      let current = 0;
      
      const updateCounter = () => {
        if (current < target) {
          current += increment;
          setter(Math.ceil(current));
          requestAnimationFrame(updateCounter);
        } else {
          setter(target);
        }
      };
      
      updateCounter();
    };

    // Intersection Observer for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(5, setProjectsCount);
          animateCounter(2, setYearsCount);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // Intersection Observer for skills animation
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          skillsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const aboutSection = document.getElementById('about');
    const skillsSection = document.querySelector('[data-testid="skills-title"]');
    
    if (aboutSection) {
      counterObserver.observe(aboutSection);
    }
    
    if (skillsSection) {
      skillsObserver.observe(skillsSection);
    }

    return () => {
      if (aboutSection) {
        counterObserver.unobserve(aboutSection);
      }
      if (skillsSection) {
        skillsObserver.unobserve(skillsSection);
      }
    };
  }, []);

  const skills = [
    { name: "HTML", icon: Code, color: "text-orange-500" },
    { name: "CSS", icon: Globe, color: "text-blue-500" },
    { name: "JavaScript", icon: Code, color: "text-yellow-500" },
    { name: "Cloud Computing", icon: Cloud, color: "text-primary" },
    { name: "AI Tools", icon: Bot, color: "text-accent" },
    { name: "Programming", icon: Cpu, color: "text-green-500" }
  ];

  return (
    <section id="about" className="relative py-20 bg-card" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-gradient mb-6" data-testid="about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Education & Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground" data-testid="about-description">
                A digital engineer based in Gujarat, India, passionate about creating innovative solutions.
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-bio">
                From crafting efficient algorithms to developing AI-powered applications, I'm dedicated to bridging the gap between technology and real-world problems. My journey in computer engineering has equipped me with a strong foundation in programming and a keen interest in artificial intelligence.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-foreground" data-testid="education-title">Education Journey</h4>
              
              {/* Current Education */}
              <div className="border-l-2 border-primary pl-6 relative" data-testid="education-current">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                <div className="bg-muted p-6 rounded-lg">
                  <h5 className="font-semibold text-foreground">Diploma in Computer Engineering</h5>
                  <p className="text-sm text-primary">Current • Shri K.J. Polytechnic, Bharuch</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pursuing advanced studies in computer engineering with focus on software development, 
                    data structures, and modern computing technologies.
                  </p>
                </div>
              </div>

              {/* ITI Education */}
              <div className="border-l-2 border-muted pl-6 relative" data-testid="education-iti">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-muted rounded-full"></div>
                <div className="bg-background p-6 rounded-lg border border-border">
                  <h5 className="font-semibold text-foreground">ITI - Computer Programming</h5>
                  <p className="text-sm text-accent">2021 • Ankleshwar ITI • 73%</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Completed Industrial Training Institute certification in Computer Programming trade, 
                    building strong fundamentals in programming logic and software development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Stats */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-6" data-testid="skills-title">Technical Skills</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className={`skill-badge bg-muted p-4 rounded-lg text-center cursor-pointer transition-all duration-500 ${
                        skillsVisible 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      data-testid={`skill-${skill.name.toLowerCase()}`}
                    >
                      <IconComponent className={`h-8 w-8 ${skill.color} mx-auto mb-2`} />
                      <p className="text-sm font-medium">{skill.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-6 rounded-lg border border-border text-center" data-testid="stat-projects">
                <div className="text-3xl font-bold text-primary mb-2">{projectsCount}</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background p-6 rounded-lg border border-border text-center" data-testid="stat-years">
                <div className="text-3xl font-bold text-accent mb-2">{yearsCount}</div>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
