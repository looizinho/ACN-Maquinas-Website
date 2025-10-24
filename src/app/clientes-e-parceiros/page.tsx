import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { clientLogos } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Clientes e Parceiros',
  description: 'Conheça as empresas que confiam nas soluções da ACN Máquinas para garantir a eficiência e segurança de suas operações.',
};

export default function ClientesPage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl font-bold md:text-5xl">
            Construímos Relações de Confiança Baseadas em Resultados
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Temos orgulho de ser o parceiro estratégico de grandes nomes da indústria, contribuindo para o sucesso de seus projetos.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex justify-center">
              <Image
                src={client.logo.imageUrl}
                alt={client.name}
                data-ai-hint={client.logo.imageHint}
                width={158}
                height={48}
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-card border rounded-lg p-8 md:p-12">
          <h2 className="font-headline text-2xl md:text-3xl font-semibold">
            Quer ver o que podemos fazer pelo seu setor?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Solicite um case de sucesso e descubra como nossas soluções podem ser aplicadas à sua realidade.
          </p>
          <div className="mt-6">
            <Button asChild size="lg" variant="accent">
              <Link href="/contato?assunto=case_de_sucesso">
                Solicitar Case de Sucesso
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
