import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhinav Misra - Full Stack Developer | AI/ML Engineer",
  description: "15+ years experienced Full Stack Developer and AI/ML Engineer specializing in Python, Django, FastAPI, Object Detection, Face Recognition, and LLM Fine Tuning. AWS Solution Architect with expertise in DevOps and system administration.",
  keywords: ["Full Stack Developer", "AI/ML Engineer", "Python Developer", "Object Detection", "Face Recognition", "LLM Fine Tuning", "Django", "FastAPI", "React", "Next.js", "Node.js", "AWS", "DevOps", "PHP", "JavaScript"],
  authors: [{ name: "Abhinav Misra" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Abhinav Misra - Full Stack Developer | AI/ML Engineer",
    description: "15+ years experienced Full Stack Developer and AI/ML Engineer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav Misra - Full Stack Developer | AI/ML Engineer",
    description: "15+ years experienced Full Stack Developer and AI/ML Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
