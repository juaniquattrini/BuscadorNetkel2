import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { SearchInterface } from '@/components/search/SearchInterface';
import { 
  getCountryByPath, 
  getCountryByCode, 
  COUNTRY_CONFIG,
  type CompetitorConfig 
} from '@/shared/constants/CountryConfig';

export function SearchPage() {
  const { competitor: competitorName, query, country: legacyCountry } = useParams<{
    competitor: string;
    query?: string;
    country?: string; // Para compatibilidad con rutas viejas
  }>();

  const [competitor, setCompetitor] = useState<CompetitorConfig | null>(null);
  const [countryConfig, setCountryConfig] = useState<any>(null);
  const [currentQuery, setCurrentQuery] = useState(query || '');

  useEffect(() => {
    if (!competitorName) return;

    // Detectar país desde la URL actual
    let detectedCountry = null;
    
    if (legacyCountry) {
      // Ruta legacy: /search/AR/lens
      detectedCountry = getCountryByCode(legacyCountry.toUpperCase());
    } else {
      // Nueva ruta: /ar/lens - detectar desde pathname
      const pathname = window.location.pathname;
      for (const [code, config] of Object.entries(COUNTRY_CONFIG)) {
        if (pathname.startsWith(config.path + '/')) {
          detectedCountry = config;
          break;
        }
      }
    }

    if (!detectedCountry) {
      console.error('No se pudo detectar el país desde la URL:', window.location.pathname);
      return;
    }

    setCountryConfig(detectedCountry);

    // Buscar el competidor en la configuración del país
    const allCompetitors = [...detectedCountry.competitors, ...detectedCountry.lens];
    const found = allCompetitors.find(c => 
      c.name.toLowerCase() === competitorName.toLowerCase()
    );
    
    setCompetitor(found || null);
  }, [competitorName, legacyCountry]);

  // Permitir búsqueda libre incluso si no se encuentra configuración específica
  if (!competitorName) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">
            No se especificó un buscador
          </h1>
        </div>
      </PageLayout>
    );
  }

  // Si no encontramos el competidor, crear uno genérico para permitir búsqueda libre
  const effectiveCompetitor = competitor || {
    name: competitorName,
    title: `Buscador ${competitorName.charAt(0).toUpperCase() + competitorName.slice(1)}`,
    cx: 'partner-pub-1234567890123456:abcdefghij' // CX genérico - debería funcionar para búsquedas básicas
  };

  const effectiveCountry = countryConfig || {
    name: 'Desconocido',
    flag: '🌎'
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {effectiveCompetitor.title}
          </h1>
          <p className="text-muted-foreground">
            Buscando en {effectiveCompetitor.name} • {effectiveCountry.name} {effectiveCountry.flag}
          </p>
          
          {!competitor && (
            <div className="mt-2 text-sm text-orange-600">
              ⚠️ Configuración no encontrada - usando búsqueda genérica
            </div>
          )}
        </div>

        <SearchInterface 
          competitor={effectiveCompetitor}
          initialQuery={currentQuery}
          onQueryChange={setCurrentQuery}
        />
      </div>
    </PageLayout>
  );
}