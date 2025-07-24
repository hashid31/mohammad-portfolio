import { Briefcase, Code, User } from "lucide-react"

export const About = () =>{
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto-max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Software Developer and Cybersecurity enthusiast</h3>
                        <p className="text-muted-foreground">I am a B.Tech student specializing in Information Technology, with a strong foundation and hands-on experience in Web Development, Artificial Intelligence & Machine Learning, Data Science, and Cybersecurity.</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch</a>
                            <a href="src/assets/HashidResume.pdf" download="HashidCV.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> Download cv</a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <Code className="h-6 w-6 text-primary"/>

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Data Science and ML</h4>
                                    <p className="text-muted-foreground">With skills in Python, Pandas, Scikit-learn, and TensorFlow, I enjoy building predictive models and solving real-world problems through data.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <User className="h-6 w-6 text-primary"/>

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Cybersecurity</h4>
                                    <p className="text-muted-foreground">I focus on ethical hacking and securing systems to protect sensitive data. I aim to stay ahead of emerging threats and best practices.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10" >
                                    <Briefcase className="h-6 w-6 text-primary"/>

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">I create dynamic, user-friendly websites using HTML, CSS, JavaScript, and React. My goal is to build responsive, fast, and accessible web experiences that engage users and solve real problems efficiently.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}