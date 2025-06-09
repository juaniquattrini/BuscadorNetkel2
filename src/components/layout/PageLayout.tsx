import { ReactNode } from 'react';
import { Header } from './header';
import { Footer } from './Footer';
import { Breadcrumbs } from './navigation/Breadcrumbs';

interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export function PageLayout({ children, showBreadcrumbs = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      {showBreadcrumbs && (
        <div className="border-b bg-muted/40">
          <div className="container py-4">
            <Breadcrumbs />
          </div>
        </div>
      )}
      <main className="container py-8 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}