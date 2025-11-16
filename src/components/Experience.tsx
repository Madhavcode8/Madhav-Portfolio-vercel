import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Reliance Jio",
      role: "Software Developer Engineer Intern",
      period: "July 2025 - Present",
      location: "Mumbai, India",
      description: [
        "Developed and maintained core modules for CloudXP's Dynamic Provisioning Framework using Java, Spring Boot",
        "Designed and Developed Order management service module for provisioning via REST APIs"
      ],
      current: true
    },
    {
      company: "Delhi Metro Rail Corporation",
      role: "Summer Trainee",
      period: "June 2024 – July 2024",
      location: "Delhi, India",
      description: [
        "Collaborated with DMRC professionals to understand industry aspects",
        "Explored communication systems and telecommunication infrastructure"
      ],
      current: false
    },
    {
      company: "StockGro",
      role: "Campus Ambassador",
      period: "Aug 2023 – Oct 2023",
      location: "Bangalore (Remote)",
      description: [
        "Acquired extensive understanding of stock trading principles, market trends, and investments",
        "Organized and conducted workshops on campus to educate students about stock trading"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-strong z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="card-glass p-6 rounded-xl hover-lift animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full mb-4">
                        Current
                      </span>
                    )}
                    
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
