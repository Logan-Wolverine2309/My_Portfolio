import { Briefcase, Code, User } from "lucide-react"



export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div className="space-y-6">
                        <h3 className="text-4xl  font-semibold ">
                            A passionate developer
                        </h3>
                        <p className="text-muted-foreground">
                            With a strong foundation in HTML, CSS, and JavaScript, React,
                            I enjoy turning ideas into reality through code.
                            My goal is to create user-friendly interfaces
                            that not only look great but also provide seamless functionality.
                        </p>

                        <p className="text-muted-foreground">
                            I am constantly learning and exploring new technologies to stay up-to-date with the ever-evolving
                            web development landscape.
                            Whether it's building a personal project or collaborating with a team,
                            I am dedicated to delivering high-quality code and exceptional user experiences.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a
                                href="/Jit_CV.pdf"
                                download
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                                >
                                Download CV
                                </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold mb-2">  Web Development </h4>
                                    <p className="text-muted-foreground">
                                        I specialize in creating responsive and interactive web applications using modern technologies.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold mb-2"> UI/UX Design </h4>
                                    <p className="text-muted-foreground">
                                        I focus on creating intuitive and visually appealing user interfaces that enhance the overall user experience.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="text-lg font-semibold mb-2"> Project Management</h4>
                                    <p className="text-muted-foreground">
                                        I have experience in managing projects from conception to completion, ensuring timely delivery and quality results.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}