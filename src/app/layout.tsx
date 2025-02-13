import "./globals.css";
import { Figtree } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="bg-[#FCFFFD] text-[#333533]">
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="relative flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
