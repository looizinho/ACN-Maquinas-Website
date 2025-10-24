import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Flag, Target, Gem } from 'lucide-react';
import { aboutContent } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Sobre a ACN Máquinas',
  description: 'Conheça nossa história, missão, visão e os valores que nos guiam a ser referência em torqueamento e manutenção industrial no Rio de Janeiro.',
};

export default function SobrePage() {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="font-semibold text-primary uppercase tracking-wider">Sobre a ACN</span>
            <h1 className="font-headline text-4xl md:text-5xl font-bold mt-2">
              Experiência que Gera Resultados
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {aboutContent.text}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {aboutContent.pillars.map(pillar => (
                <div key={pillar.name} className="flex items-center gap-3">
                  <Check className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-foreground">{pillar.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Target className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{aboutContent.mission}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex-row items-center gap-4">
                <Flag className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{aboutContent.vision}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
            <div className="text-center max-w-3xl mx-auto">
                <Gem className="h-10 w-10 text-primary mx-auto" />
                <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">
                    Nossos Valores
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Os princípios que guiam cada uma de nossas ações e decisões.
                </p>
            </div>
            <div className="mt-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {aboutContent.values.map(value => (
                        <div key={value} className="bg-card border rounded-full px-5 py-2 text-sm font-medium text-foreground shadow-sm">
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
