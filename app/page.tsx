"use client";

import CursorGlow from "@/components/CursorGlow";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <CursorGlow />

      

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-zinc-400">
            Full-Stack Developer
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Building{" "}
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-indigo-500/20 blur-xl rounded-lg" />
              <span className="relative text-indigo-400">scalable</span>
            </span>
            ,
            <br />
            <span className="relative inline-block">
              <span className="absolute -inset-1 bg-indigo-500/20 blur-xl rounded-lg" />
              <span className="relative text-indigo-400">
                high-performance
              </span>
            </span>{" "}
            web applications
          </h2>


          <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
            I’m Tanish Rathore — a Full-Stack Developer specializing in MERN
            Stack, Next.js, and TypeScript. I build clean UIs, robust APIs, and
            production-ready applications with a strong focus on performance,
            scalability, and code quality.
          </p>

          {/* OPEN TO WORK */}
          <p className="mt-4 text-sm text-emerald-400">
            ● Currently open to opportunities
          </p>

          <div className="mt-8 flex gap-4 flex-col sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects <ArrowRight size={18} />
            </Link>

            <a
              href="/Tanish_Resume.pdf"
              className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-white transition"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-10 flex gap-6 text-zinc-400">
            <a
              href="https://github.com/tanish1120"
              target="_blank"
              className="hover:text-white"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/tanishrathore"
              target="_blank"
              className="hover:text-white"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:rathoretanish11@gmail.com"
              className="hover:text-white"
            >
              <Mail />
            </a>
          </div>
        </motion.div>

        {/* RIGHT – TECH STACK CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-indigo-500 blur-2xl opacity-20 rounded-2xl"></div>

          <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <p className="text-sm text-zinc-400">Tech I work with</p>

            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "Node.js",
                "Express",
                "SQL/NoSQL",
                "OpenAI",
                "AWS",
                "Docker",
                "Restful APIs",
                "C++",
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-zinc-800 rounded-md px-3 py-2 text-center"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* QUICK STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Years Experience", value: "1.5+" },
            { label: "Projects Built", value: "10+" },
            { label: "Production Apps", value: "3+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl py-8"
            >
              <p className="text-3xl font-bold text-indigo-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      



      {/* EXPERIENCE */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24 relative">
        <h2 className="relative inline-block group text-3xl md:text-4xl font-bold mb-20">
          <span className="absolute -bottom-2 left-0 h-[3px] w-12 group-hover:w-full duration-150 ease-in bg-indigo-500 rounded-full" />
          Experience
        </h2>



        {/* Shift whole section slightly left */}
        <div className="relative max-w-6xl mx-auto md:-translate-x-6">

          {/* Timeline line */}
          <div className="absolute left-[40%] top-0 bottom-0 w-px bg-zinc-800 hidden md:block" />

          {/* Timeline fill (ANIMATED) */}
          <motion.div
            className="absolute left-[40%] top-0 w-px bg-indigo-500 hidden md:block"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{
              once: true,
              margin: "-100px", // starts slightly before fully visible
            }}
            transition={{
              duration: 4.6,
              ease: "easeOut",
              delay: 0.8,
            }}
          />

          <div className="space-y-20">

            {/* ===== Eqaim ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative grid md:grid-cols-[1fr_1.4fr] gap-16"
            >
              {/* Left */}
              <div className="md:text-right pr-14">
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-2">
                  Sep 2024 – Feb 2025
                </span>
                <h3 className="text-xl font-semibold">
                  Software Development Engineer – 1
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Eqaim Technology & Services · Noida
                </p>
              </div>

              {/* Dot */}
              <div className="hidden md:flex absolute left-[40%] -translate-x-1/2 top-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              {/* Right */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/40 transition">
                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                  <li>
                    Built and optimized full-stack applications using Next.js and MERN,
                    improving load times by ~30% via SSR and SSG.
                  </li>
                  <li>
                    Integrated AWS S3, SES, Cognito, Stripe, OpenAI, and cron-based
                    workflows for scalable production systems.
                  </li>
                  <li>
                    Engineered backend APIs using Node.js, Express, Liquibase, and
                    Sequelize ORM, improving database efficiency by ~20%.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ===== Yunik ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative grid md:grid-cols-[1fr_1.4fr] gap-16"
            >
              <div className="md:text-right pr-14">
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-2">
                  Mar 2024 – Sep 2024
                </span>
                <h3 className="text-xl font-semibold">
                  Full-Stack Developer
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Yunik Group of Industries · Remote
                </p>
              </div>

              <div className="hidden md:flex absolute left-[40%] -translate-x-1/2 top-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/40 transition">
                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                  <li>
                    Developed a scalable e-commerce platform using Next.js, React,
                    Node.js, and MongoDB supporting 500+ products.
                  </li>
                  <li>
                    Implemented SSR and SEO optimizations, improving organic visibility
                    by ~40%.
                  </li>
                  <li>
                    Designed responsive UI with Tailwind CSS, reducing bounce rate
                    by ~25%.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ===== Trebled ===== */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative grid md:grid-cols-[1fr_1.4fr] gap-16"
            >
              <div className="md:text-right pr-14">
                <span className="inline-block text-xs uppercase tracking-widest text-indigo-400 mb-2">
                  Sep 2023 – Feb 2024
                </span>
                <h3 className="text-xl font-semibold">
                  Front-End Developer Intern
                </h3>
                <p className="text-sm text-zinc-400 mt-1">
                  Trebled · Remote
                </p>
              </div>

              <div className="hidden md:flex absolute left-[40%] -translate-x-1/2 top-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500" />
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-indigo-500/40 transition">
                <ul className="space-y-3 text-zinc-300 list-disc list-inside">
                  <li>
                    Built Trebled’s website from scratch using React.js, delivering the
                    project end-to-end.
                  </li>
                  <li>
                    Integrated CRM with a Wix website to streamline client
                    interactions.
                  </li>
                  <li>
                    Contributed to the “Modernite” project with a mobile-optimized
                    frontend.
                  </li>
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <h2 className="relative group inline-block text-3xl md:text-4xl font-bold mb-20">
          <span className="absolute -bottom-2 left-0 h-[3px] w-12 group-hover:w-full duration-150 ease-in bg-indigo-500 rounded-full" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Project 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/40 transition">
            <h3 className="text-xl font-semibold">Chess King</h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              A real-time multiplayer chess platform with live gameplay,
              matchmaking, and WebSocket-based synchronization.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["React", "TypeScript", "WebSocket", "Docker"].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View project →
            </Link>
          </div>

          {/* Project 2 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/40 transition">
            <h3 className="text-xl font-semibold">Medium Clone</h3>
            <p className="mt-3 text-zinc-400 leading-relaxed">
              A full-featured blogging platform with authentication,
              markdown editor, and optimized backend queries.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {["Next.js", "Prisma", "PostgreSQL", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="bg-zinc-800 px-3 py-1 rounded-full text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <Link
              href="/projects"
              className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View project →
            </Link>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute -inset-1 bg-indigo-500/20 blur-2xl opacity-30" />

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let’s build something impactful
            </h2>

            <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
              I’m currently open to full-time, contract, or freelance opportunities.
              If you’re building something interesting, let’s talk.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:rathoretanish11@gmail.com"
                className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg font-medium transition"
              >
                Get in touch
              </a>

              <a
                href="https://linkedin.com/in/tanishrathore"
                target="_blank"
                className="px-8 py-3 rounded-lg border border-zinc-700 hover:border-white transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Tanish Rathore. Built with Next.js.
      </footer>
    </main>
  );
}
