import { ReactNode } from 'react';
import { Header } from './header.tsx';
import { Breadcrumbs } from '../navigation/Breadcrumbs.ts';

interface PageLayoutProps {
  children: ReactNode;
  showBreadcrumbs?: boolean;
}

export function PageLayout({ children, showBreadcrumbs = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {showBreadcrumbs && (
        <div className="border-b bg-muted/40">
          <div className="container py-4">
            <Breadcrumbs />
          </div>
        </div>
      )}
      <main className="container py-8">
        {children}
      </main>
    </div>
  );
}