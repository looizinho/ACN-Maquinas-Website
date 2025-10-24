import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { trustBadges, differentiators, services } from '@/lib/data';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-torque-equipment');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 flex h-full items-end">
          <div className="container py-12 md:py-20 text-white">
            <div className="max-w-3xl">
              <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Soluções Industriais em Torqueamento, Manutenção e Locação de Equipamentos
              </h1>
              <p className="mt-4 text-lg text-neutral-200 md:text-xl">
                Precisão, segurança e produtividade para operações em óleo e gás.
              </p>
              <ul className="mt-6 space-y-2 text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Equipe técnica com <strong>+10 anos de experiência</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Tecnologia e equipamentos <strong>de ponta</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span>Atendimento no <strong>RJ e regiões próximas</strong></span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="accent">
                  <Link href="/contato">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="font-semibold text-sm uppercase tracking-wider">
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Nossos Diferenciais</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Entregamos mais do que serviços. Entregamos confiança e resultados.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => (
              <Card key={item.title} className="text-center bg-card">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 font-headline text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-card border-y">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Soluções Completas para sua Indústria</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Da manutenção de rotina a projetos complexos, temos a expertise e os equipamentos que você precisa.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link href={`/solucoes/${service.id}`} key={service.id} className="group">
                <Card className="h-full overflow-hidden transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.name}
                      data-ai-hint={service.image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
