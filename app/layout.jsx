import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Newsletter from "@/components/shared/Newsletter";
import { Inter, Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // only include weights you need
});
const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Freight Solutions",
  description: "Freight Forwarding Next to Your Door",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}
        className={`${inter.variable} ${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Newsletter />
        <Footer />
      </body>
    </html>
  );
}
