import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vertical Tecnologia - Soluções Tecnológicas para seu Negócio",
  description: "Transforme seu negócio com nossas soluções tecnológicas: Internet Empresarial, Sistemas de Gestão, Automações WhatsApp, VerticalPay e muito mais. Atendimento personalizado para pequenas e médias empresas.",
  keywords: "tecnologia, internet empresarial, sistemas de gestão, automação whatsapp, verticalpay, maquininhas, campo grande, ms",
  authors: [{ name: "Vertical Tecnologia" }],
  openGraph: {
    title: "Vertical Tecnologia - Soluções Tecnológicas para seu Negócio",
    description: "Transforme seu negócio com nossas soluções tecnológicas personalizadas",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
