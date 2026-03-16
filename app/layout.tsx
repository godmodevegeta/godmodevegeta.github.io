import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Rivera",
  description: "Personal portfolio of Alex Rivera",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-black antialiased selection:bg-blue-200 selection:text-black dark:bg-[#111] dark:text-[#eee] dark:selection:bg-blue-900`}>
        {children}
      </body>
    </html>
  );
}
