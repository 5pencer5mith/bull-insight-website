// Utility
import { Roboto } from "next/font/google";

// Components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// Styles
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
});

export const metadata = {
  title: "Bull Insight",
  description: "Your Home for a Healthy Herd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} container min-h-screen`}>
        <div className="shrink-0">
          <Header />
        </div>

        <div className="flex w-full flex-1 flex-col">{children}</div>

        <div className="shrink-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
