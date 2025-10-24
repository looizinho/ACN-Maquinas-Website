'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks, solutionLinks } from '@/lib/data';
import { AcnLogo } from './icons';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'transition-colors text-sm font-medium text-foreground/80 hover:text-primary',
          isActive && 'text-primary',
          className
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          'block py-2 text-lg font-medium transition-colors hover:text-primary',
          isActive ? 'text-primary' : 'text-foreground'
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <AcnLogo className="h-8 w-auto"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.href === '/solucoes' ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <button className={cn(
                      'flex items-center gap-1 transition-colors text-sm font-medium text-foreground/80 hover:text-primary',
                      pathname.startsWith('/solucoes') && 'text-primary'
                    )}>
                    {link.name}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {solutionLinks.map((solLink) => (
                    <DropdownMenuItem key={solLink.href} asChild>
                      <Link href={solLink.href}>{solLink.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden sm:inline-flex" variant="accent">
            <Link href="/contato">Solicitar Orçamento</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center border-b pb-4">
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <AcnLogo className="h-8 w-auto"/>
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Fechar menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    link.href === '/solucoes' ? (
                      <div key={link.name}>
                        <h3 className={cn(
                          'py-2 text-lg font-medium transition-colors',
                          pathname.startsWith('/solucoes') ? 'text-primary' : 'text-foreground'
                        )}>{link.name}</h3>
                        <div className="flex flex-col pl-4 border-l-2 border-border">
                          {solutionLinks.map((solLink) => (
                            <MobileNavLink key={solLink.href} href={solLink.href}>
                              {solLink.name}
                            </MobileNavLink>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <MobileNavLink key={link.name} href={link.href}>
                        {link.name}
                      </MobileNavLink>
                    )
                  ))}
                </nav>
                <div className="mt-auto">
                    <Button asChild className="w-full" variant="accent" size="lg">
                        <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>Solicitar Orçamento</Link>
                    </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
