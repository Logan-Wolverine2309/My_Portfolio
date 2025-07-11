import { ArrowDown } from "lucide-react";




export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center px-4"
        >
            <div className="container max-w-6xl mx-auto flex flex-row items-center z-10">
                {/* Left Side: Content */}
                <div className="flex-1 text-left space-y-8">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    </h1>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary text-gradient opacity-0 animate-fade-in delay-2">
                        Jit Mondal
                    </h2>
                    <p className="text-2xl md:text-3xl text-foreground/80 max-w-xl opacity-0 animate-fade-in delay-3">
                        I am a passionate developer with a love for creating amazing web experiences.<br />
                        Explore my projects and get to know me better!
                    </p>
                    <div className="pt-6 opacity-0 animate-fade-in delay-4">
                        <a
                            href="#projects"
                            className="cosmic-button text-xl px-8 py-4"
                        >
                            View My Work
                        </a>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="flex-1 flex justify-center items-center">
                    <div className="relative group">
                        <img
                            src="/Projects/FB_IMG_1751471150623.jpg"
                            alt="Jit Mondal"
                            className="w-full h-full max-w-lg max-h-lg rounded-full object-cover shadow-2xl border-4 border-primary transition-transform duration-500 group-hover:scale-105 group-hover:shadow-cosmic"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        {/* <span className="absolute bottom-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm shadow-lg opacity-80">Web Developer</span> */}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-md text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="w-8 h-4 text-primary" />
            </div>
        </section>
    )
};