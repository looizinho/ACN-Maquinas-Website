import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import { services, equipmentForRental } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    return {
      title: 'Solução não encontrada',
    };
  }

  return {
    title: `${service.name} no RJ`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = services.find((s) => s.id === params.slug);

  if (!service) {
    notFound();
  }

  const isRentalPage = service.id === 'locacao-e-venda-de-equipamentos';

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
        <Image
          src={service.image.imageUrl}
          alt={service.name}
          data-ai-hint={service.image.imageHint}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="font-headline text-4xl md:text-5xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg text-muted-foreground lead">{service.content.opening}</p>

      <div className="my-10">
        <h2 className="font-headline text-3xl font-semibold border-b pb-2">Aplicações e Resultados</h2>
        <ul className="mt-6 space-y-4 not-prose list-none p-0">
          {service.content.applications.map((app) => (
            <li key={app.title} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground">{app.title}</h4>
                <p className="text-muted-foreground text-sm">{app.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {isRentalPage && (
        <div className="my-10">
          <h2 className="font-headline text-3xl font-semibold border-b pb-2">Equipamentos Disponíveis</h2>
            <Carousel
                opts={{
                align: 'start',
                loop: true,
                }}
                className="w-full mt-6"
            >
                <CarouselContent>
                {equipmentForRental.map((equip, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                    <Card className="overflow-hidden">
                        <div className="relative aspect-video">
                            <Image
                                src={equip.image.imageUrl}
                                alt={equip.name}
                                data-ai-hint={equip.image.imageHint}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardContent className="p-4">
                            <h4 className="font-semibold">{equip.name}</h4>
                        </CardContent>
                    </Card>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
            </Carousel>
        </div>
      )}

      <div className="my-10 bg-card border rounded-lg p-6">
        <h3 className="font-headline text-2xl font-semibold">Especificações Técnicas</h3>
        <p className="mt-2 text-muted-foreground">{service.content.specs}</p>
      </div>

      <div className="my-10">
        <h2 className="font-headline text-3xl font-semibold border-b pb-2">Perguntas Frequentes (FAQ)</h2>
        <Accordion type="single" collapsible className="w-full mt-6">
          {service.content.faq.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <div className="mt-12 text-center bg-primary/10 rounded-lg p-8">
        <h2 className="font-headline text-2xl md:text-3xl font-semibold text-primary">
            Pronto para otimizar sua operação?
        </h2>
        <p className="mt-2 text-primary/80 max-w-xl mx-auto">
            Nossa equipe de especialistas está pronta para ajudar.
        </p>
        <div className="mt-6">
            <Button asChild size="lg" variant="accent">
                <Link href="/contato">
                    {service.cta}
                </Link>
            </Button>
        </div>
      </div>
    </article>
  );
}
