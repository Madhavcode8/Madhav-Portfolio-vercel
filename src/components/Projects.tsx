import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI Resume Scanner",
      description: "Built a Django-powered web platform that leverages lemmatization for keyword extraction, compares uploaded resumes with job descriptions, and generates relevance scores to help candidates optimize their applications for better job matching.",
      tech: ["Django", "Python", "NLP", "Machine Learning", "lemmatization"],
      image: "gradient-1",
      github: "#",
      demo: "#"
    },
    {
      title: "CloudXP Order Management",
      description: "Developed Order management service module for provisioning via REST APIs at Reliance Jio. Built using Spring Boot with focus on scalability and performance.",
      tech: ["Spring Boot", "Java", "REST APIs", "Microservices"],
      image: "gradient-2",
      github: "#"
    },
    {
      title: "Dynamic Provisioning Framework",
      description: "Core modules development for CloudXP's Dynamic Provisioning Framework. Implemented robust backend solutions for cloud resource management and automation.",
      tech: ["Java", "Spring Boot", "Cloud Services", "APIs"],
      image: "gradient-3",
      github: "#"
    }
  ];

  const gradients = {
    "gradient-1": "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    "gradient-2": "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    "gradient-3": "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background/50 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my recent work in backend development, API design, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass rounded-xl overflow-hidden hover-lift group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 ${gradients[project.image as keyof typeof gradients]} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 group-hover:border-primary/50 transition-colors"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
