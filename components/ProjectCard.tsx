"use client";

import { useRef } from "react";

type Props = {
    title: string;
    tech: string;
    image: string;
    github: string;
};


const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

export default function ProjectCard({ title, tech, image, github }: Props) {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isTouchDevice) return;

        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const dx = (x - centerX) / centerX;
        const dy = (y - centerY) / centerY;

        const rotateY = dx * 8;
        const rotateX = -dy * 8;

        // 1️⃣ Card bend
        card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `;

        // 2️⃣ Inner glow (pressure point)
        glow.style.background = `
      radial-gradient(
        150px circle at ${x}px ${y}px,
        rgba(99,102,241,0.38),
        transparent 65%
      )
    `;
        glow.style.opacity = "1";

        // 3️⃣ Directional edge highlight (stress border)
        const shadowX = -dx * 12;
        const shadowY = -dy * 12;

        card.style.boxShadow = `
      ${shadowX}px ${shadowY}px 15px rgba(99,102,241,0.35),
      inset ${-shadowX}px ${-shadowY}px 20px rgba(255,255,255,0.1)
    `;
    };

    const handleMouseLeave = () => {
        if (isTouchDevice) return;

        const card = cardRef.current;
        const glow = glowRef.current;
        if (!card || !glow) return;

        card.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

        card.style.boxShadow = "none";
        glow.style.opacity = "0";
    };

    return (
        <div
            className="relative h-[380px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* CARD */}

            <div
                ref={cardRef}
                className="
          relative h-full rounded-2xl overflow-hidden
          bg-zinc-900 border border-zinc-800
          transition-transform duration-300 ease-out
          will-change-transform
        "
            >
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                >
                    {/* 🔥 INNER GLOW (inside card) */}
                    <div
                        ref={glowRef}
                        className="
            pointer-events-none absolute inset-0
            opacity-0 transition-opacity duration-200
            z-10
          "
                    />

                    {/* Image */}
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 h-full w-full object-cover z-0"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 z-20" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-1 text-sm text-zinc-400">{tech}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
