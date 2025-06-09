import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMercadoLibreTitle } from '@/hooks/useMercadoLibreTitle';
import { ExternalLink, Loader2 } from 'lucide-react';

interface MercadoLibreExtractorProps {
  onExtracted: (title: string) => void;
}

export function MercadoLibreExtractor({ onExtracted }: MercadoLibreExtractorProps) {
  const [url, setUrl] = useState('');
  const { extractTitle, isLoading } = useMercadoLibreTitle();

  const handleExtract = async () => {
    if (!url.trim()) return;
    
    try {
      const title = await extractTitle(url);
      onExtracted(title);
      setUrl(''); // Limpiar el campo después de extraer
    } catch (error) {
      console.error('Error extrayendo título:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleExtract();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Extraer título de MercadoLibre</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Pega una URL de MercadoLibre para extraer automáticamente el título del producto
        </p>
      </div>
      
      <div className="flex space-x-2">
        <Input
          placeholder="https://articulo.mercadolibre.com.ar/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <Button 
          onClick={handleExtract} 
          disabled={isLoading || !url.trim()}
          variant="outline"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ExternalLink className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}