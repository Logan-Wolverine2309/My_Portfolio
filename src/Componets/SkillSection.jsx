import { useState } from "react";
import {cn} from '@/lib/utils';

const skills = [
    // Web Frontend Skills
    { name: "HTML/CSS", level: 95, category: "frontend", system: "web" },
    { name: "JavaScript", level: 90, category: "frontend", system: "web" },
    { name: "React", level: 85, category: "frontend", system: "web" },
    { name: "Tailwind CSS", level: 70, category: "frontend", system: "web" },
    { name: "Bootstrap", level: 75, category: "frontend", system: "web" },
    { name: "Next.js", level: 75, category: "frontend", system: "web" },

    // Web Backend Skills
    { name: "Node.js", level: 70, category: "backend", system: "web" },
    

    // Database Skills
    { name: "MongoDB", level: 70, category: "database", system: "web" },
    { name: "PostgreSQL", level: 60, category: "database", system: "web" },

    // Design
    { name: "UI/UX Design", level: 70, category: "design", system: "web" },


    // Development Tools
    { name: "VS Code", level: 80, category: "development tools", system: "general" },
];

const categories = [
    "all", "frontend", "backend", "database", "design", "development tools"];

export const SkillSection = () => {
    const[activeCategory, setIsActiveCategory] = useState("all")

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all"  || skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 bg-gray-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                My<span className="text-primary">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category,key) =>(
                        <button key={key} 
                        onClick={() => setIsActiveCategory(category)}
                        className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-muted-foreground hover:bg:secondary/80"
                        )}>
                            {category}
                        </button>
                    ))}
            </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill, key) => (
                <div key={key} className="bg-card  p-6 rounded-lg shadow-xs card-hover">
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-secondary/50 rounded-full h-4 overflow-hidden mb-2">
                        <div className="bg-primary h-4 rounded-full origin-left animate-[grow_1.5s_ease-in-out] transition-all duration-500 ease-in-out"
                            style={{ width: skill.level +"%" }}/>        
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                            
                        </span>

                    </div>
                </div>
            ))}

        </div>
        </div>
    </section>
  );
}
