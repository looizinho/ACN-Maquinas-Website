import Image from 'next/image';
import { Metadata } from 'next';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { contactDetails } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a ACN Máquinas para solicitar um orçamento ou tirar dúvidas. Atendemos no Rio de Janeiro e região.',
};

export default function ContatoPage() {
    const mapImage = PlaceHolderImages.find(img => img.id === 'map-location');

  return (
    <>
      <div className="bg-background">
        <div className="container py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Entre em Contato</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Estamos prontos para atender sua demanda. Preencha o formulário ou utilize um de nossos canais de atendimento.
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
                <h2 className="font-headline text-2xl font-semibold">Informações de Contato</h2>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Endereço</h3>
                        <p className="text-muted-foreground">{contactDetails.address}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Telefone</h3>
                        <a href={contactDetails.phoneHref} className="text-muted-foreground hover:text-primary">{contactDetails.phone}</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">E-mail</h3>
                        <a href={contactDetails.emailHref} className="text-muted-foreground hover:text-primary">{contactDetails.email}</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Horário de Atendimento</h3>
                        <p className="text-muted-foreground">{contactDetails.hours}</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 bg-card p-8 rounded-lg border shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {mapImage && (
        <div className="w-full h-80 relative">
            <Image 
                src={mapImage.imageUrl} 
                alt="Mapa da localização da ACN Máquinas"
                data-ai-hint={mapImage.imageHint}
                fill
                className="object-cover"
            />
        </div>
      )}
    </>
  );
}
