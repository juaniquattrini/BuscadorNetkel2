import { useParams } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { CompetitorCard } from '@/components/ui/CompetitorCard';
import { Button } from '@/components/ui/button';
import { Camera, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { competitorData, countries } from '@/data/competitors';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  
  if (!country || !competitorData[country]) {
    return <div>País no encontrado</div>;
  }

  const data = competitorData[country];
  const countryInfo = countries.find(c => c.code === country);
  const lensCompetitor = data.lens[0];
  
  // Filtrar y ordenar competidores
  const filteredCompetitors = data.competitors
    .filter(comp => comp.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Competidores en {countryInfo?.name} {countryInfo?.flag}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Selecciona una tienda para buscar productos
          </p>
          
          {/* Botón Lens destacado */}
          {lensCompetitor && (
            <div className="mb-8">
              <Link to={`/search/${country}/${lensCompetitor.name.toLowerCase()}`}>
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                  <Camera className="mr-2 h-5 w-5" />
                  Búsqueda con Lens
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Buscador de competidores */}
        <div className="mb-6 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar tienda..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Grid de competidores ordenado alfabéticamente */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCompetitors.map((competitor) => (
            <CompetitorCard key={competitor.cx} competitor={competitor} country={country} />
          ))}
        </div>
        
        {filteredCompetitors.length === 0 && searchTerm && (
          <div className="text-center py-8 text-muted-foreground">
            No se encontraron tiendas que coincidan con "{searchTerm}"
          </div>
        )}
      </div>
    </PageLayout>
  );
}