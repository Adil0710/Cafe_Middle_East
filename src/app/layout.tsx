import type { Metadata } from "next";
import { Poppins, Fascinate_Inline } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], 
});

const fascinateInline = Fascinate_Inline({
  variable: "--font-fascinateinline", 
  subsets: ["latin"],
  weight: "400", 
});

export const metadata: Metadata = {
  title: "Café Middle East",
  description: "Developed by Adil Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${fascinateInline.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
