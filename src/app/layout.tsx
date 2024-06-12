import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import AppProvider from "../redux/Provider";
import GoOnTop from "@/components/GoOnTop";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";

const inter = Inter({ subsets: ["latin"] });
const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cool T-Shirts Online: Designer T-Shirts & Merch in India | Redwolf",
  description:
    "Look Alive! Redwolf is an Indie T-Shirt brand selling a line of Cool T-Shirts & Merch Online in India fashioned by Music, Art and All Things Pop Culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className} ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        <AppProvider>
          {/* <Navbar /> */}
          <ResponsiveNavbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
