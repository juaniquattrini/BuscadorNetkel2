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

  // Auto-extraer título si venimos desde la extensión
  useEffect(() => {
    if (currentUrl && !query) {
      extractTitle(currentUrl).then(title => {
        if (title) {
          setQuery(title);
        }
      }).catch(console.error);
    }
  }, [currentUrl, query, extractTitle]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setSearchQuery(query);
    onQueryChange?.(query);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleExtract = async () => {
    if (!url.trim()) return;
    try {
      const title = await extractTitle(url);
      setQuery(title);
      setUrl('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const isLens = competitor.name.toLowerCase() === 'lens';

  return (
    <div className="space-y-6">
      {hasExtensionData && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-blue-700">
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