import { Card, CardContent } from '@/components/ui/card';
import { Country } from '@/types';
import { Link } from 'react-router-dom';

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Link to={`/country/${country.code}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-2">{country.flag}</div>
          <h3 className="font-semibold text-lg">{country.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">ML{country.code}</p>
        </CardContent>
      </Card>
    </Link>
  );
}