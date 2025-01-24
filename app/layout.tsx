import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Serif,Inter } from "next/font/google";
import "./globals.css";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['400','700']
});

const iBMPlexSerif= IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight:['400','700']
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is modern banking platform for everyone",
  icons:{
    icon:'/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${iBMPlexSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
