import type { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";
import NavigationBar from "@/components/utils/NavigationBar";

const fontSans  = FontSans({ subsets: ["latin"] , variable: "--font-sans",});

export const metadata: Metadata = {
  title: "MerryMatch",
  description: "Find your destiny",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen font-nunito antialiased",
          fontSans .variable
        )}>
        <NavigationBar/>
        {children}
      </body>
    </html>
  );
}
