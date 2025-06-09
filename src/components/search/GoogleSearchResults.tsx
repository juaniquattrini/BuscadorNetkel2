import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Competitor } from '@/types';
import { Loader2 } from 'lucide-react';

interface GoogleSearchResultsProps {
  query: string;
  competitor: Competitor;
  isLoading: boolean;
}

export function GoogleSearchResults({ query, competitor, isLoading }: GoogleSearchResultsProps) {
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query || isLoading) return;

    // Limpiar resultados anteriores
    if (searchContainerRef.current) {
      searchContainerRef.current.innerHTML = '';
    }

    // Cargar Google Custom Search
    const loadGoogleSearch = () => {
      // Eliminar scripts anteriores de Google CSE
      const existingScripts = document.querySelectorAll('script[src*="cse.google.com"]');
      existingScripts.forEach(script => script.remove());

      // Crear nuevo elemento de búsqueda
      const searchElement = document.createElement('div');
      searchElement.className = 'gcse-searchresults-only';
      searchElement.setAttribute('data-cx', competitor.cx);
      searchElement.setAttribute('data-enable-image-search', 'true');
      searchElement.setAttribute('data-layout', 'cse-inline');
      
      if (searchContainerRef.current) {
        searchContainerRef.current.appendChild(searchElement);
      }

      // Cargar script de Google CSE
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://cse.google.com/cse.js?cx=${competitor.cx}`;
      
      script.onload = () => {
        // Esperar a que Google CSE se inicialice
        setTimeout(() => {
          // Buscar el input de Google y establecer el valor
          const googleInput = document.querySelector('.gsc-input input') as HTMLInputElement;
          if (googleInput) {
            googleInput.value = query;
            
            // Disparar la búsqueda
            const searchButton = document.querySelector('.gsc-search-button input') as HTMLInputElement;
            if (searchButton) {
              searchButton.click();
            }
          }
        }, 500);
      };

      document.head.appendChild(script);
    };

    loadGoogleSearch();

    // Cleanup
    return () => {
      const scripts = document.querySelectorAll('script[src*="cse.google.com"]');
      scripts.forEach(script => script.remove());
    };
  }, [query, competitor.cx, isLoading]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <div className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Buscando...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="p-0">
        <div 
          ref={searchContainerRef}
          className="min-h-[400px] w-full"
          style={{ display: query ? 'block' : 'none' }}
        />
        {!query && (
          <div className="flex items-center justify-center py-12 text-muted-foreground">
            Ingresa un término de búsqueda para comenzar
          </div>
        )}
      </CardContent>
    </Card>
  );
}