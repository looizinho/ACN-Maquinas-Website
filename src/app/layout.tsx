import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'ACN Máquinas | Soluções Industriais em Torqueamento e Manutenção',
    template: '%s | ACN Máquinas',
  },
  description: 'Precisão, segurança e produtividade para operações em óleo e gás. Oferecemos torqueamento, tensionamento, teste hidrostático, locação e manutenção de equipamentos no RJ.',
  keywords: ['torqueamento industrial', 'tensionamento de parafusos', 'corte a frio de tubulações', 'locação de equipamentos industriais', 'manutenção de ferramentas de torque', 'Rio de Janeiro', 'óleo e gás'],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "IndustrialBusiness",
  "name": "ACN Máquinas",
  "url": "https://www.acnmaquinas.com.br/",
  "telephone": "+5521964302781",
  "email": "comercial@acnmaquinas.com.br",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua Antonio Moreira, 37 – Vila Nova (Surui)",
    "addressLocality": "Magé",
    "addressRegion": "RJ",
    "postalCode": "25922-372",
    "addressCountry": "BR"
  },
  "openingHours": "Mo-Fr 08:00-17:00",
  "areaServed": "Rio de Janeiro",
  "sameAs": [
    "https://www.acnmaquinas.com.br/"
  ],
  "description": "Empresa especializada em soluções industriais como torqueamento, tensionamento, teste hidrostático, locação e venda de equipamentos para o setor de óleo e gás no Rio de Janeiro."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <FloatingWhatsApp />
        <Toaster />
      </body>
    </html>
  );
}
