import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Práctica Profesionalizante – ITSE",
  description: "Documentación interactiva y visual del proceso de una práctica profesional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-inter bg-neutral-50 text-neutral-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
