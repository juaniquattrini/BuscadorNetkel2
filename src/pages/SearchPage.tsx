import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { SearchInterface } from '@/components/search/SearchInterface';
import { countries, competitorData } from '@/data/competitors';
import { Competitor } from '@/types';

export function SearchPage() {
  const { country, competitor: competitorName, query } = useParams<{
    country: string;
    competitor: string;
    query?: string;
  }>();

  const [competitor, setCompetitor] = useState<Competitor | null>(null);
  const [currentQuery, setCurrentQuery] = useState(query || '');

  useEffect(() => {
    if (!country || !competitorName) return;

    const data = competitorData[country];
    if (!data) return;

    const allCompetitors = [...data.competitors, ...data.lens];
    const found = allCompetitors.find(c => 
      c.name.toLowerCase() === competitorName.toLowerCase()
    );
    
    setCompetitor(found || null);
  }, [country, competitorName]);

  if (!country || !competitor) {
    return (
      <PageLayout>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">
            Configuración de búsqueda inválida
          </h1>
        </div>
      </PageLayout>
    );
  }

  const countryInfo = countries.find(c => c.code === country);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {competitor.title}
          </h1>
          <p className="text-muted-foreground">
            Buscando en {competitor.name} • {countryInfo?.name}
          </p>
        </div>

        <SearchInterface 
          competitor={competitor}
          initialQuery={currentQuery}
          onQueryChange={setCurrentQuery}
        />
      </div>
    </PageLayout>
  );
}