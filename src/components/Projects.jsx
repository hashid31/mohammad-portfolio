import { ArrowRight, ExternalLink, Github } from "lucide-react";

const my_projects = [
    {
        id:1,
        title:"PCAP Analyzer",
        description: "A network attack detection app that identifies security threats, implements packet inspection and filtering for anomaly detection, with a GUI for visual analysis and logging.",
        image: "src/assets/network.jpeg",
        tags: ["Python"," Scapy"],
        githubUrl: "",
    },
    {
        id:2,
        title:"Task Manager",
        description: "Built using Java AWT with a focus on intuitive UI and event handling. Features include task creation, modification, prioritization, and completion.",
        image: "src/assets/taskmgr.jpeg",
        tags: ["Java"," AWT"],
        githubUrl: "",
    },
    {
        id:3,
        title:"Space Shooter",
        description: "Created a 2-player space shooter game using Pygame. Implemented real-time controls for movement, shooting, and evasion for competitive play. ",
        image: "src/assets/space.png",
        tags: ["Python"," Pygame"],
        githubUrl: "",
    },
]

export const Projects = () =>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span> </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I’ve worked on a variety of projects that showcase my skills in data science, cybersecurity, and software development. You can check out some of my featured projects below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {my_projects.map((project,key) => (
                <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    
                    <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-3">
                            <a target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300" href={project.githubUrl}>
                             <Github size={20} /> </a>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="text-center mt-12">
            <a target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com">Check Out my Github <ArrowRight size={16} /> </a>
        </div>
        </div>
    </section>;
}