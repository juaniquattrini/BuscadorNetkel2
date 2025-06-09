import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2 } from 'lucide-react';
import { Competitor } from '@/types';
import { GoogleSearchResults } from './GoogleSearchResults';

interface SearchInterfaceProps {
  competitor: Competitor;
  initialQuery?: string;
  onQueryChange?: (query: string) => void;
}

export function SearchInterface({ 
  competitor, 
  initialQuery = '', 
  onQueryChange 
}: SearchInterfaceProps) {
  const [query, setQuery] = useState(initialQuery);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    setSearchQuery(query);
    onQueryChange?.(query);
    
    // Simular delay de búsqueda
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Ingresar MELI_URL o título a buscar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
          disabled={isLoading}
        />
        <Button 
          onClick={handleSearch} 
          disabled={isLoading || !query.trim()}
          className="px-6"
        >
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
          Buscar
        </Button>
      </div>

      {/* Search Results */}
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