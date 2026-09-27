import { Space_Grotesk, Instrument_Serif, Inter } from "next/font/google";
import CursorFollower from "@/components/CursorFollower";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-accent",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Irfan Khalil | Process & Operations Engineer",
  description:
    "Portfolio of Irfan Khalil — Process/Operations Engineer with 14+ years in Hydrogen Peroxide plant operations, commissioning, and process safety.",
  openGraph: {
    title: "Irfan Khalil | Process & Operations Engineer",
    description: "14+ years operating Hydrogen Peroxide plants — commissioning, process safety, and optimization.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Irfan Khalil | Process & Operations Engineer",
    description: "14+ years operating Hydrogen Peroxide plants — commissioning, process safety, and optimization.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}>
        <CursorFollower />
        {children}
      </body>
    </html>
  );
}