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
        {children}
      </body>
    </html>
  );
}
