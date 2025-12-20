import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Milliy Prep | Matematika Sertifikatiga Tayyorgarlik",
    template: "%s | Milliy Prep"
  },
  description: "O'zbekiston milliy sertifikat imtihonlariga matematika fanidan bepul va sifatli tayyorgarlik platformasi. Real darajadagi testlar va masalalar.",
  keywords: ["matematika", "milliy sertifikat", "dtm testlari", "abituriyent", "tayyorgarlik", "o'zbekiston"],
  authors: [{ name: "Milliy Prep Team" }],
  openGraph: {
    title: "Milliy Prep | Matematika Sertifikatiga Tayyorgarlik",
    description: "Matematika fanidan milliy sertifikat imtihonlariga eng samarali va bepul tayyorlanish platformasi.",
    url: "https://milliy-prep.uz", // Placeholder, useful for meta
    siteName: "Milliy Prep",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
