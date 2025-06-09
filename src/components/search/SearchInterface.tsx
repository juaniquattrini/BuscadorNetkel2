import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Loader2, ExternalLink, Globe } from 'lucide-react';
import { GoogleSearchResults } from './GoogleSearchResults';
import { useMercadoLibreTitle } from '@/hooks/useMercadoLibreTitle';
import { useMercadoLibreDetection } from '@/hooks/useMercadoLibreDetection';

interface Competitor {
  name: string;
  title: string;
  cx: string;
  domains?: string[];
}

interface SearchInterfaceProps {
  competitor: Competitor;
  initialQuery?: string;
  onQueryChange?: (query: string) => void;
}

export function SearchInterface({ competitor, initialQuery = '', onQueryChange }: SearchInterfaceProps) {
  const [query, setQuery] = useState(initialQuery);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  
  const { extractTitle, isLoading: isExtracting } = useMercadoLibreTitle();
  const { currentUrl, hasExtensionData } = useMercadoLibreDetection();

  // Mantener logs solo en consola
  const addSearchLog = (message: string) => {
    console.log(`[SearchInterface] ${message}`);
  };

  useEffect(() => {
    if (currentUrl && !query) {
      extractTitle(currentUrl).then(title => {
        if (title) {
          setQuery(title);
          addSearchLog(`Título extraído automáticamente: "${title}"`);
        }
      }).catch(console.error);
    }
  }, [currentUrl, query, extractTitle]);

  const handleSearch = () => {
    if (!query.trim()) {
      addSearchLog('❌ Búsqueda cancelada: Query vacío');
      return;
    }
    
    addSearchLog(`🔍 Iniciando búsqueda: "${query}"`);
    addSearchLog(`📋 Competidor: ${competitor.name} (CX: ${competitor.cx})`);
    
    setIsLoading(true);
    
    const delayMs = 3000;
    addSearchLog(`⏳ Aplicando delay de ${delayMs}ms para evitar CAPTCHA...`);
    
    setTimeout(() => {
      addSearchLog(`✅ Delay completado, ejecutando búsqueda...`);
      setSearchQuery(query);
      
      setTimeout(() => {
        setIsLoading(false);
        addSearchLog(`✅ Loading state completado`);
      }, 1000);
    }, delayMs);
    
    onQueryChange?.(query);
  };

  const handleExtract = async () => {
    if (!url.trim()) return;
    addSearchLog(`🔗 Extrayendo título de: ${url}`);
    try {
      const title = await extractTitle(url);
      setQuery(title);
      setUrl('');
      addSearchLog(`✅ Título extraído: "${title}"`);
    } catch (error) {
      addSearchLog(`❌ Error extrayendo título: ${error}`);
      console.error('Error:', error);
    }
  };

  const isLens = competitor.name.toLowerCase() === 'lens';

  return (
    <div className="space-y-6">
      {hasExtensionData && (
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                Detectado desde extensión: {currentUrl}
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {(isLens || !hasExtensionData) && (
        <Card>
          <CardContent className="p-4 space-y-4">
            <h3 className="font-medium">Extraer título de MercadoLibre</h3>
            <div className="flex gap-2">
              <Input
                placeholder="https://articulo.mercadolibre.com.ar/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleExtract()}
              />
              <Button onClick={handleExtract} disabled={isExtracting} variant="outline">
                {isExtracting ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-2">
        <Input
          placeholder="Ingresar título a buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />}
          Buscar
        </Button>
      </div>

      {searchQuery && (
        <GoogleSearchResults 
          query={searchQuery}
          competitor={competitor}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}