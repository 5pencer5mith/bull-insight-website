// Utility
import { DM_Sans, DM_Serif_Display } from "next/font/google";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Styles
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body"
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display"
});

export const metadata = {
  title: "Bull Insight",
  description: "Your Home for a Healthy Herd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable} font-body bg-background-primary min-h-screen flex flex-col`}>
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
