import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import { data } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    default: "Abyss Network ⋅ Bee Swarm Simulator Guides, Tools & Data Sheets",
    template: "Abyss Network ⋅ %s",
  },
  description:
    "The ultimate Bee Swarm Simulator resource hub. Hive building guides, beequip stats, planter data sheets, macro setups, RBC guides, progression tips, and community tools for BSS players.",
  keywords: [
    "Bee Swarm Simulator",
    "BSS",
    "BSS guides",
    "Bee Swarm Simulator guides",
    "Bee Swarm Simulator tools",
    "hive builder",
    "beequip simulator",
    "beequip stats",
    "BSS beequip statistics",
    "Bee Swarm planter data",
    "BSS progression guide",
    "blue hive guide",
    "red hive guide",
    "white hive guide",
    "BSS macro setup",
    "Bee Swarm RBC guide",
    "BSS stick bug guide",
    "pop gum guide",
    "Bee Swarm alt account guide",
    "BSS earlygame guide",
    "Bee Swarm Simulator spreadsheet",
    "ability token stats",
    "planter statistics",
    "Bee Swarm data sheets",
    "Roblox Bee Swarm Simulator",
    "Abyss Network",
    "Abyssal Trench Network",
    "Deepsea Hive Builder",
  ],
  icons: {
    icon: "/assets/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Abyss Network",
    title: "Abyss Network ⋅ Bee Swarm Simulator Guides, Tools & Data Sheets",
    description:
      "The ultimate Bee Swarm Simulator resource hub. Guides for every hive color, beequip stats, planter spreadsheets, macro setups, and community-built tools.",
    images: [
      {
        url: "/assets/header.png",
        width: 1200,
        height: 630,
        alt: "Abyss Network ⋅ Bee Swarm Simulator Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abyss Network ⋅ Bee Swarm Simulator Guides, Tools & Data Sheets",
    description:
      "The ultimate BSS resource hub. Hive guides, beequip stats, planter data, macro setups, and community tools.",
    images: ["/assets/header.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar discordInvite={data.discordInvite} />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer discordInvite={data.discordInvite} />
      </body>
    </html>
  );
}
