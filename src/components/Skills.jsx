import { useState } from "react";
import {cn} from "../lib/utils"

const my_skills = [
    {name:"HTML/CSS",level:95,category:"frontend"},
    {name:"JS",level:85,category:"frontend"},
    {name:"React",level:75,category:"frontend"},
    {name:"Python",level:90,category:"languages"},
    {name:"C",level:80,category:"languages"},
    {name:"Java",level:65,category:"languages"},
    {name:"C++",level:80,category:"languages"},
    {name:"Pandas",level:90,category:"datascience-mL"},
    {name:"Tensorflow",level:55,category:"datascience-mL"},
    {name:"Numpy",level:90,category:"datascience-mL"},
    {name:"Scikit-learn",level:75,category:"datascience-mL"},
    {name:"Git/Github",level:75,category:"tools"},
    {name:"VS Code",level:90,category:"tools"},
    {name:"Hadoop",level:65,category:"tools"},
    {name:"Canva",level:90,category:"tools"},
];

const categories = ["all","frontend","languages","tools","datascience-mL"];

export const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = my_skills.filter((skill) => activeCategory==="all" || skill.category === activeCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category,key)=>(
                <button key={key} onClick={()=> setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                )} >
                    {category}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill,key) =>(
                <div className="bg-card p-6 rounded-lg shadow-xs card-hover" key={key}>
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg">
                            {skill.name}
                        </h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-primary h-2 rounded-full origin-left animate-grow_1.5s_ease-out" 
                        style={{width: skill.level +"%"}}
                        />
                            
                    </div>
                    <div className="text-right mt-1">
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </section>;
}