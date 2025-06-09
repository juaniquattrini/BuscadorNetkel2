import { PageLayout } from '@/components/layout/PageLayout';
import { CountryCard } from '@/components/ui/CountryCard';
import { countries } from '@/data/competitors';

export function HomePage() {
  return (
    <PageLayout showBreadcrumbs={false}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Buscador Netkel
          </h1>
          <p className="text-xl text-muted-foreground">
            Selecciona un país para comenzar tu búsqueda
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country) => (
            <CountryCard key={country.code} country={country} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}