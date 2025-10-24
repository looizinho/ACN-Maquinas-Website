import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Obrigado pelo Contato',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoPage() {
  return (
    <div className="flex-grow flex items-center justify-center bg-background">
      <div className="container text-center py-24">
        <CheckCircle2 className="mx-auto h-20 w-20 text-green-500" />
        <h1 className="mt-6 font-headline text-4xl font-bold md:text-5xl">
          Mensagem Recebida!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Obrigado por entrar em contato. Nossa equipe analisará sua mensagem e retornaremos em até 1 dia útil.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
