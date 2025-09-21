import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with HTML, CSS, and JavaScript featuring 3D animations and interactive elements.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["HTML", "CSS", "JavaScript"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by AI algorithms, capable of natural language processing and providing contextual responses for customer support scenarios.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "NLP", "AI/ML"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Automation Tools",
      description: "A collection of automation scripts and tools designed to streamline repetitive tasks, improve productivity, and enhance workflow efficiency.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Python", "Scripts", "Automation"],
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Cloud Management System",
      description: "A comprehensive cloud-based management system for handling data storage, processing, and analytics with scalable architecture and security features.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      tags: ["Cloud", "AWS", "Database"],
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="relative py-20 bg-background" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-display text-gradient mb-6" data-testid="projects-title">
            My Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-description">
            Explore a collection of projects showcasing my journey in computer engineering and AI development.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="card-hover bg-card border border-border rounded-xl p-8 group cursor-pointer"
              data-testid={`project-card-${project.id}`}
            >
              <div className="mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                  data-testid={`project-image-${project.id}`}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors duration-300" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <p className="text-muted-foreground" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground"
                      data-testid={`project-tag-${tag.toLowerCase()}-${project.id}`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-muted-foreground mb-8" data-testid="projects-cta-text">
            Interested in collaborating on innovative projects?
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 animate-glow"
            data-testid="projects-cta-button"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  );
}
