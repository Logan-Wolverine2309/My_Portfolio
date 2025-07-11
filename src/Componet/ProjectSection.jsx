
const projects =[
  {
    id: 1,
    title: "FoodSphere",
    description: "This is for Online Ordering food.",
    image: "/Projects/{7598F07F-CF7C-47D7-9D6C-50A70C7057DF}.png",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/Frontend_Main.git",
  },

   {
    id: 2,
    title: "Task Management System",
    description: "This is a Task Management System.",
    image: "/Projects/{6E970949-0EC6-4BB3-8C74-563996AC15BF}.png",
    tags: ["React", "Node.js",  "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/task-management-system.git",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description: "This is my personal portfolio website.",
    image: "/Projects/{D15A96B1-D4F4-4889-9951-8CBB734F0F5F}.png",
    tags: ["React", "Tailwind CSS"],
    link: "",
  },

  {
    id: 4,
    title: "Food Ordering App",
    description: "This is a food ordering application.",
    image: "/Projects/{3EE5EAFC-2772-4910-A2D4-904243098B5B}.png",
    tags: ["React", "Node.js", "Tailwind CSS"],
    link: "https://github.com/Logan-Wolverine2309/food_application.git",
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
        {projects.map((project,key) => (
         <div
         key={key}
         className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
         >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

         </div>
        ))}
      </div>

      </div>
    </section>
  );
}