import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { contactDetails } from '@/lib/data';

export function FloatingWhatsApp() {
  return (
    <Link
      href={contactDetails.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={cn(
        buttonVariants({ size: 'icon', variant: 'accent' }),
        'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110'
      )}
    >
      <MessageCircle className="h-7 w-7 text-accent-foreground" />
    </Link>
  );
}
