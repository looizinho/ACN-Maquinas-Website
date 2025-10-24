import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">{children}</div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    Solicite um Orçamento
                  </CardTitle>
                   <Badge variant="secondary" className="absolute top-4 right-4 bg-primary/10 text-primary">Atendemos RJ e região</Badge>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
