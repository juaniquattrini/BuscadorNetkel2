import { Card, CardContent } from '@/components/ui/card';
import { Competitor } from '@/types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

interface CompetitorCardProps {
  competitor: Competitor;
  type: 'competitor' | 'lens';
}

export function CompetitorCard({ competitor, type }: CompetitorCardProps) {
  const { country } = useParams<{ country: string }>();

  return (
    <Link to={`/search/${country}/${competitor.name.toLowerCase()}`}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardContent className="flex flex-col items-center justify-center p-4 text-center">
          <h3 className="font-medium text-sm">{competitor.name}</h3>
          {type === 'lens' && (
            <span className="text-xs text-primary mt-1 bg-primary/10 px-2 py-1 rounded">
              Lens
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}