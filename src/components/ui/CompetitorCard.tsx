import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { getCountryByCode, type CompetitorConfig } from '@/shared/constants/CountryConfig';

interface CompetitorCardProps {
  competitor: CompetitorConfig;
  country: string;
  className?: string;
}

export function CompetitorCard({ competitor, country, className }: CompetitorCardProps) {
  const countryConfig = getCountryByCode(country.toUpperCase());
  const basePath = countryConfig?.path || `/${country}`;
  
  return (
    <Link to={`${basePath}/${competitor.name.toLowerCase()}`}>
      <div 
        className={cn(
          "group relative overflow-hidden rounded-lg border-2 border-border bg-card p-4 cursor-pointer transition-all hover:shadow-lg hover:scale-105 h-24 flex items-center justify-center hover:border-orange border-l-4 border-l-orange hover:shadow-orange/20",
          className
        )}
      >
        <div className="text-center">
          <h3 className="font-semibold text-card-foreground text-sm">{competitor.name}</h3>
        </div>
      </div>
    </Link>
  )
}