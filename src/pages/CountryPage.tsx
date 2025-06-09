import { useParams, useLocation } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { CompetitorCard } from '@/components/ui/CompetitorCard';
import { Button } from '@/components/ui/button';
import { Camera, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { 
  getCountryByPath, 
  getCountryByCode, 
  type CompetitorConfig 
} from '@/shared/constants/CountryConfig';

export function CountryPage() {
  const { country: countryParam } = useParams<{ country: string }>();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Detectar país desde path o parámetro
  const countryConfig = countryParam 
    ? getCountryByCode(countryParam.toUpperCase())
    : getCountryByPath(location.pathname);
  
  if (!countryConfig) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">País no encontrado</h1>
        </div>
      </PageLayout>
    );
  }

  const lensCompetitor = countryConfig.lens[0];
  
  // Filtrar y ordenar competidores
  const filteredCompetitors = countryConfig.competitors
    .filter((comp: CompetitorConfig) => comp.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a: CompetitorConfig, b: CompetitorConfig) => a.name.localeCompare(b.name));
  
  return (
    <PageLayout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Competidores en {countryConfig.name} {countryConfig.flag}
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Selecciona una tienda para buscar productos
          </p>
          
          {/* Botón Lens destacado */}
          {lensCompetitor && (
            <div className="mb-8">
              <Link to={`${countryConfig.path}/${lensCompetitor.name.toLowerCase()}`}>
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
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar competidores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        {/* Grid de competidores */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCompetitors.map((competitor: CompetitorConfig) => (
            <CompetitorCard 
              key={competitor.name}
              competitor={competitor}
              country={countryConfig.code.toLowerCase()}
            />
          ))}
        </div>
        
        {filteredCompetitors.length === 0 && searchTerm && (
          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              No se encontraron competidores que coincidan con "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
}