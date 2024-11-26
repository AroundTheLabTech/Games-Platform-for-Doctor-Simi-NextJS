import { Inter } from "next/font/google";
import "./globals.css";
import "./style/style.css";
import "./style/style.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SimiJuegos",
  description: "Ganar nunca fue tan divertido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
