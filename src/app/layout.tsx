import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en">
      <body className={`bg-[#FCFFFD] ${inter.className} text-[#333533]`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="relative flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
