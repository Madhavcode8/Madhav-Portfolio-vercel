import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Experience leading teams and collaborating effectively on complex projects"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">Software Developer</span> currently 
              pursuing my B.Tech at Maharaja Agrasen Institute of Technology, GGSIPU with an impressive 8.1 CGPA.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working as an <span className="text-primary font-semibold">SDE Intern at Reliance Jio</span>, 
              I specialize in backend development with Java and Spring Boot, focusing on building robust APIs 
              and scalable microservices architectures.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I'm the <span className="text-primary font-semibold">President and Founder of DHAN SOCIETY</span> at 
              MAIT, where I lead initiatives promoting financial literacy and leadership development on campus.
            </p>
          </div>

          <div className="card-glass rounded-2xl p-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">Location</span>
                <span className="font-semibold text-primary">New Delhi, India</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">Education</span>
                <span className="font-semibold">B.Tech (2022-2026)</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">CGPA</span>
                <span className="font-semibold text-primary">8.1 / 10</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                <span className="text-muted-foreground">Focus</span>
                <span className="font-semibold">Backend Development</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="card-glass p-6 rounded-xl hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
