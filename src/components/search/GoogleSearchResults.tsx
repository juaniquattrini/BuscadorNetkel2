import { useEffect, useRef, useState, memo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CompetitorConfig } from '@/shared/constants/CountryConfig';
import { Loader2 } from 'lucide-react';

interface GoogleSearchResultsProps {
  query: string;
  competitor: CompetitorConfig;
  isLoading: boolean;
}

declare global {
  interface Window {
    google?: any;
    __gcse?: any;
  }
}

const GoogleSearchResults = memo(({ query, competitor, isLoading }: GoogleSearchResultsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [searchState, setSearchState] = useState({
    isReady: false,
    hasInitialized: false,
    currentQuery: ''
  });

  // Mantener logs solo en consola
  const addLog = (message: string) => {
    console.log(`[GoogleCSE Debug] ${message}`);
  };

  useEffect(() => {
    addLog(`=== INICIO BÚSQUEDA ===`);
    addLog(`Query: "${query}"`);
    addLog(`Competitor: ${competitor.name}`);
    addLog(`CX: ${competitor.cx}`);
    addLog(`IsLoading: ${isLoading}`);
    addLog(`HasInitialized: ${searchState.hasInitialized}`);

    if (!query || isLoading) {
      addLog('❌ Saliendo: No query o está loading');
      return;
    }

    if (searchState.hasInitialized) {
      addLog('❌ Saliendo: Ya inicializado');
      return;
    }

    const mountSearch = () => {
      if (!containerRef.current) {
        addLog('❌ Error: No hay containerRef');
        return;
      }

      addLog('✅ Iniciando montaje de búsqueda...');
      
      containerRef.current.innerHTML = '';
      addLog('✅ Contenedor limpiado');

      const searchElement = document.createElement('div');
      searchElement.className = 'gcse-searchresults-only';
      searchElement.id = 'mi-buscador';
      searchElement.setAttribute('data-enable-image-search', 'true');
      containerRef.current.appendChild(searchElement);
      addLog('✅ Elemento de búsqueda creado');

      const existingScript = document.querySelector(`script[src*="cse.js"]`);
      if (existingScript) {
        addLog('⚠️ Script de Google CSE ya existe, removiendo...');
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://cse.google.com/cse.js?cx=${competitor.cx}`;
      addLog(`✅ Cargando script: ${script.src}`);

      script.onload = () => {
        addLog('✅ Script de Google CSE cargado');
        
        setTimeout(() => {
          addLog('🔍 Intentando ejecutar búsqueda...');
          
          const input = document.getElementById('gsc-i-id1') as HTMLInputElement;
          if (input) {
            addLog('✅ Input encontrado');
            input.value = query;
            input.focus();
            addLog(`✅ Query "${query}" establecido en input`);
            
            const buttons = document.getElementsByClassName('gsc-search-button');
            addLog(`✅ Botones encontrados: ${buttons.length}`);
            
            if (buttons.length > 0) {
              const button = buttons[1] as HTMLElement;
              if (button) {
                addLog('✅ Ejecutando click en botón de búsqueda...');
                button.click();
                setSearchState({
                  isReady: true,
                  hasInitialized: true,
                  currentQuery: query
                });
                addLog('✅ Búsqueda ejecutada exitosamente');
              } else {
                addLog('❌ No se encontró el botón 1');
              }
            } else {
              addLog('❌ No se encontraron botones de búsqueda');
            }
          } else {
            addLog('❌ No se encontró el input gsc-i-id1');
          }
        }, 2000);
      };

      script.onerror = (error) => {
        addLog(`❌ Error cargando script: ${error}`);
      };

      document.head.appendChild(script);
      addLog('✅ Script agregado al head');
    };

    setTimeout(mountSearch, 100);
  }, [query, competitor.cx, isLoading, searchState.hasInitialized]);

  useEffect(() => {
    if (query !== searchState.currentQuery && searchState.hasInitialized) {
      addLog('🔄 Nueva búsqueda detectada, reiniciando...');
      setSearchState({
        isReady: false,
        hasInitialized: false,
        currentQuery: ''
      });
    }
  }, [query, searchState.currentQuery, searchState.hasInitialized]);

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="h-5 w-5 animate-spin mr-2" />
          <span>Buscando...</span>
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
          <p className="text-xs text-blue-400 dark:text-blue-300">CX: {competitor.cx}</p>
        </div>
        
        {!searchState.isReady && (
          <div className="flex items-center justify-center py-8 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            Iniciando búsqueda...
          </div>
        )}
        
        <div 
          ref={containerRef}
          className="min-h-[500px] w-full border border-border rounded"
          style={{ display: 'block' }}
        />
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => {
  return prevProps.query === nextProps.query && 
         prevProps.competitor.cx === nextProps.competitor.cx &&
         prevProps.isLoading === nextProps.isLoading;
});

export { GoogleSearchResults };