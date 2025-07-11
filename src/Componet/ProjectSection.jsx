import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "FoodSphere",
    description: `This is for Online Ordering food. It features a user-friendly interface, secure payment processing, and an admin dashboard for managing orders and menu items.`,
    image: "/Projects/{7598F07F-CF7C-47D7-9D6C-50A70C7057DF}.png",
    tags: ["React JS", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/Frontend_Main.git",
    live: "https://frontend-main-phi-sooty.vercel.app/"
  },

  // {
  //   id: 2,
  //   title: "Task Management System",
  //   description: `This is a Task Management System.
  //    It is a full-stack application that allows users to create, manage, and track tasks efficiently.
  //    It features user authentication, task categorization, and real-time updates.`,
  //   image: "/Projects/{6E970949-0EC6-4BB3-8C74-563996AC15BF}.png",
  //   tags: ["React JS", "Node.js", "Tailwind CSS"],
  //   link: "https://github.com/Logan-Wolverine2309/microservice.git",
  //   live: "https://microservice-black.vercel.app/"
  // },

  {
    id: 3,
    title: "Portfolio Website",
    description: `This is my personal portfolio website.
     It showcases my skills, projects, and experience in a visually appealing manner.
     The website is built using React and Tailwind CSS, ensuring a responsive and modern design.`,
    image: "/Projects/{D15A96B1-D4F4-4889-9951-8CBB734F0F5F}.png",
    tags: ["React JS", "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/My_Portfolio.git",
    live: "https://logan-wolverine2309.vercel.app/"
  },

  {
    id: 4,
    title: "Food Ordering App",
    description: `This is a food ordering application
     that allows users to browse menus, place orders, and make payments online.
     It features a responsive design, user authentication, and an admin panel for managing orders and menus.`,
    image: "/Projects/{3EE5EAFC-2772-4910-A2D4-904243098B5B}.png",
    tags: ["React JS", "Node.js", "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/food_application.git",
    live: "https://food-application-lac.vercel.app/"
  },
]


export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center justify-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and creativity.
          Each project is a testament to my dedication to building high-quality applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <a href={project.live}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300" >
                      <ExternalLink size={20} />
                    </a>
                    <a></a>
                    <a href={project.link}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
            <div className="text-center mt-12">
              <a className="cosmic-button w-fit items-center mx-auto gap-2 text-sm" 
              href="https://github.com/Logan-Wolverine2309" target="_blank" rel="noopener noreferrer">
                Check My Github<ArrowRight size={20} className="inline ml-2" />
              </a>

            </div>
      </div>
    </section>
  );
}