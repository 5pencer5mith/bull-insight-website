// Utility — InSire web stack (brand-consistency.md)
import { DM_Mono, Playfair_Display, Source_Serif_4 } from "next/font/google";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Styles
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Bull InSight",
  description: "Breeding Forward",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} ${playfairDisplay.variable} ${dmMono.variable} font-body bg-background-primary flex min-h-screen flex-col`}
      >
        <div className="sticky top-0 z-50 shrink-0">
          <Header />
        </div>

        <div className="flex flex-1 flex-col w-full">{children}</div>

        <div className="shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
