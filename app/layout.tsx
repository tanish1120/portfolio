import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tanish Rathore | Developer",
  description: "Full-Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-black text-white"
        suppressHydrationWarning
      >
        {/* NAVBAR */}
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-6">
          <h1 className="text-3xl font-semibold tracking-wide relative">
            <Link href="/">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
                Tanish Rathore
              </span>
            </Link>
          </h1>
          <div className="flex gap-6 text-sm text-zinc-400">
            <Link href="/projects" className="hover:text-white">
              Projects
            </Link>
            {/* <Link href="/contact" className="hover:text-white">
            Contact
          </Link> */}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
