import "./globals.css";
import { Navbar } from "@/components/Navbar";

import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "ZAnime List",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
