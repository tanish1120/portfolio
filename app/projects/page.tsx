import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "BrieflyAI",
    tech: "Next.js 14 • TypeScript • Ollama (Phi-3) • PostgreSQL • NextAuth",
    description:
    "AI-powered note-taking web app that summarizes long notes and extracts last-minute keywords using local LLMs. Designed for fast revision with controllable summary length and secure authentication.",
    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/tanish1120/brieflyai",
  },
  {
    title: "Chess King",
    tech: "React • WebSocket • TypeScript",
    description:
    "Real-time multiplayer chess platform supporting multiple concurrent games. Built with WebSockets for live gameplay, move synchronization, and server-side rule validation using Chess.js.",
    image: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf",
    github: "https://github.com/tanish1120/chess",
  },
  {
    title: "Medium Clone",
    tech: "Next.js • Prisma • PostgreSQL",
    description:
    "Full-featured blogging platform inspired by Medium, with user authentication, rich text publishing, and optimized data handling using Prisma and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1638342863994-ae4eee256688?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/tanish1120/medium",
  },
  {
  title: "Digital Schooling Platform (Digi-School)",
    tech: "React • Node.js • Express • MongoDB • Tailwind CSS",
    description:
    "Secure MERN-based e-learning platform featuring role-based access, OTP authentication, and scalable REST APIs to manage courses, students, and learning content.",
    image: "https://images.unsplash.com/photo-1597933471507-1ca5765185d8?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://github.com/tanish1120/digi-school",
  },
  {
    title: "Tic Tac Toe",
    tech: "HTML • CSS • JavaScript",
    image: "https://plus.unsplash.com/premium_photo-1673735396428-d51dc2a7a62d?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    github: "https://tictactoe.tanish.space",
    description:
      "Classic Tic Tac Toe game built using vanilla HTML, CSS, and JavaScript with clean UI, turn-based logic, win detection, and game reset functionality."
  }

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
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
