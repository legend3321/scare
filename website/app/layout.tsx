import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "@/utils/ThemeRigistory";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCare",
  description: "Skin Disease Detection App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#FCFFFC" }}>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <Navbar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
