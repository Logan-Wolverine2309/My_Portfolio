import { ArrowDown } from "lucide-react";




export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary text-gradient opacity-0 animate-fade-in delay-2">Jit Mondal</span>
                    </h1> <br/>
                     <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto opacity-0 animate-fade-in delay-3">
                        I am a passionate developer with a love for creating amazing web experiences.
                        explore my projects and get to know me better!
                        </p>  <br/>
                <div className="pt-4 opacity-0 animate-fade-in delay-4">
                    <a
                        href="#projects"
                        className="cosmic-button"
                    >
                        View My Work
                    </a>
                </div>
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="w-6 h-6 text-primary" />
                </div>
            </div>
            
        </section>
    )
};