import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "../app/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";


const fontSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-sans" });
const fontTitle = Nunito({ subsets: ["latin"], variable: "--font-title" });

export const metadata: Metadata = {
  title: "Resume Craft",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={ cn("min-h-screen bg-background font-sans antialiased", fontTitle.variable, fontSans.variable) }> 
        
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
        > 
         {children}
         <Toaster/>
        </ThemeProvider>

      </body>
    </html>
  );
}
