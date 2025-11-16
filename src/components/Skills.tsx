import { useState } from "react";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "SQL", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: "Spring Boot", level: 90 },
        { name: "Spring Framework", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Django", level: 75 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Microservices", level: 80 }
      ]
    }
  ];

  const achievements = [
    {
      title: "National Rank 10",
      description: "North Region - National Financial Literacy Quiz, Mumbai",
      icon: "🏆"
    },
    {
      title: "Blockchain Certified",
      description: "Hands-on knowledge of decentralized systems and smart contracts",
      icon: "⛓️"
    },
    {
      title: "Microsoft AI Quiz",
      description: "Ranked 9th - Strong grasp of AI fundamentals",
      icon: "🤖"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="card-glass p-6 rounded-xl animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {hoveredSkill === skill.name ? `${skill.level}%` : ''}
                      </span>
                    </div>
                    <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            Achievements & <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="card-glass p-6 rounded-xl hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
