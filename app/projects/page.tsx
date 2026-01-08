import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Chess King",
    tech: "React • WebSocket • TypeScript",
    image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
    github: "https://github.com/tanish1120/chess",
  },
  {
    title: "Medium Clone",
    tech: "Next.js • Prisma • PostgreSQL",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    github: "https://github.com/tanish1120/medium",
  },
  {
  title: "Digital Schooling Platform (Digi-School)",
    tech: "React • Node.js • Express • MongoDB • Tailwind CSS",
    image: "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/tanish1120/digi-school",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="relative text-3xl md:text-4xl font-bold mb-20 text-center">
        <span className="relative group">
          Projects
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[3px] w-12 group-hover:w-full duration-150 ease-in bg-indigo-500 rounded-full" />
        </span>
      </h1>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            image={project.image}
            github={project.github}
          />
        ))}
      </div>
    </main>
  );
}
