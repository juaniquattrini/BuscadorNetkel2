import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Competitor } from '@/types';
import { Loader2 } from 'lucide-react';

interface GoogleSearchResultsProps {
  query: string;
  competitor: Competitor;
  isLoading: boolean;
}

declare global {
  interface Window {
    google: any;
    __gcse: any;
  }
}

export function GoogleSearchResults({ query, competitor, isLoading }: GoogleSearchResultsProps) {
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (!query || isLoading) return;

    const loadGoogleCSE = () => {
      // Limpiar contenedor
      if (searchContainerRef.current) {
        searchContainerRef.current.innerHTML = '';
      }

      // Crear elemento de búsqueda
      const searchElement = document.createElement('div');
      searchElement.className = 'gcse-searchresults-only';
      searchElement.setAttribute('data-cx', competitor.cx);
      searchElement.setAttribute('data-enableImageSearch', 'true');
      searchElement.setAttribute('data-layout', 'cse-inline');
      
      if (searchContainerRef.current) {
        searchContainerRef.current.appendChild(searchElement);
      }

      // Si ya existe el script, solo reinicializar
      if (window.google && window.google.search && window.google.search.cse) {
        window.google.search.cse.element.render({
          div: searchContainerRef.current,
          tag: 'searchresults-only'
        });
        performSearch();
        return;
      }

      // Cargar script si no existe
      const existingScript = document.querySelector(`script[src*="cse.js"]`);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://cse.google.com/cse.js?cx=${competitor.cx}`;
      
      script.onload = () => {
        setIsScriptLoaded(true);
        setTimeout(() => performSearch(), 1000);
      };

      document.head.appendChild(script);
    };

    const performSearch = () => {
      // Buscar input de Google CSE y ejecutar búsqueda
      setTimeout(() => {
        const input = document.querySelector('.gsc-input input') as HTMLInputElement;
        if (input) {
          input.value = query;
          const searchButton = document.querySelector('.gsc-search-button input') as HTMLInputElement;
          if (searchButton) {
            searchButton.click();
          } else {
            // Método alternativo si no hay botón
            const event = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13 });
            input.dispatchEvent(event);
          }
        }
      }, 500);
    };

    loadGoogleCSE();

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
      <CardContent className="p-4">
        <div className="mb-4">
          <h3 className="font-medium">Resultados en {competitor.name}</h3>
          <p className="text-sm text-muted-foreground">Búsqueda: "{query}"</p>
        </div>
        <div 
          ref={searchContainerRef}
          className="min-h-[400px] w-full"
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