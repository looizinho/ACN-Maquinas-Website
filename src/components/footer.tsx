import Link from 'next/link';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AcnLogo } from './icons';
import { contactDetails, navLinks, solutionLinks } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container">
        <div className="py-12 px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="font-headline text-xl font-semibold text-primary">
                Precisa acelerar sua manutenção?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Fale agora com um de nossos especialistas e encontre a solução ideal para o seu projeto.
              </p>
            </div>
            <div className="lg:col-span-7 flex items-center justify-start lg:justify-end gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 md:px-6 grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-8">
            <Link href="/" className="inline-block mb-4">
              <AcnLogo className="h-8 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Soluções Industriais em Torqueamento, Manutenção e Locação de Equipamentos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Soluções</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {navLinks.filter(l => l.href !== '/' && l.href !== '/solucoes').map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={contactDetails.phoneHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{contactDetails.phone}</span>
                </a>
              </li>
              <li>
                <a href={contactDetails.emailHref} className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>{contactDetails.email}</span>
                </a>
              </li>
              <li>
                <a href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 px-4 md:px-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {year} ACN Máquinas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            <Link href="/politica-de-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            {' | '}
            <Link href="/termos-de-uso" className="hover:text-primary transition-colors">
              Termos de Uso (LGPD)
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
