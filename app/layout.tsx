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
  title: {
    default: "Vertical Tecnologia - Soluções em Internet, Sistemas e Pagamentos",
    template: "%s | Vertical Tecnologia",
  },
  description:
    "Transforme seu negócio com a Vertical Tecnologia. Oferecemos Internet Empresarial, Sistemas de Gestão, Automação WhatsApp, VerticalPay e Marketplace Regional. Tecnologia que impulsiona resultados.",
  keywords: [
    "internet empresarial",
    "shopping virtual",
    "marketplace regional",
    "sistemas de gestão",
    "automação whatsapp",
    "logística e entregas",
    "hospedagem de sites",
    "verticalpay",
    "maquininha de cartão",
    "tecnologia para empresas",
    "campo grande",
    "mato grosso do sul",
  ],
  authors: [{ name: "Vertical Tecnologia" }],
  creator: "Vertical Tecnologia",
  publisher: "Vertical Tecnologia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vertical Tecnologia - Soluções em Internet, Sistemas e Pagamentos",
    description:
      "Transforme seu negócio com a Vertical Tecnologia. Oferecemos Internet Empresarial, Sistemas de Gestão, Automação WhatsApp, VerticalPay e Marketplace Regional.",
    url: "https://verticaltecnologia.com.br",
    siteName: "Vertical Tecnologia",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertical Tecnologia - Soluções em Internet, Sistemas e Pagamentos",
    description:
      "Transforme seu negócio com a Vertical Tecnologia. Oferecemos Internet Empresarial, Sistemas de Gestão, Automação WhatsApp, VerticalPay e Marketplace Regional.",
    creator: "@verticaltecnologia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
