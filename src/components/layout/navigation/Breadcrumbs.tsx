import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { COUNTRY_CONFIG } from '@/shared/constants/CountryConfig';
import { LucideIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', href: '/', icon: Home }
    ];

    if (pathSegments.length === 0) return breadcrumbs;

    // Detectar país desde path (nueva estructura)
    let countryConfig = null;
    let competitorName = null;

    // Buscar configuración de país
    for (const [code, config] of Object.entries(COUNTRY_CONFIG)) {
      if (location.pathname.startsWith(config.path)) {
        countryConfig = config;
        
        // Extraer nombre del competidor si existe
        const competitorPath = location.pathname.replace(config.path, '').replace(/^\//, '');
        if (competitorPath) {
          competitorName = competitorPath.split('/')[0];
        }
        break;
      }
    }

    // Legacy support: /search/AR/competitor
    if (pathSegments[0] === 'search' && pathSegments.length >= 2) {
      const countryCode = pathSegments[1];
      countryConfig = COUNTRY_CONFIG[countryCode] || null;
      competitorName = pathSegments[2] || null;
    }

    // Agregar país al breadcrumb
    if (countryConfig) {
      breadcrumbs.push({
        label: `${countryConfig.name} ${countryConfig.flag}`,
        href: countryConfig.path
      });
    }

    // Agregar competidor al breadcrumb
    if (countryConfig && competitorName) {
      const allCompetitors = [...countryConfig.competitors, ...countryConfig.lens];
      const competitor = allCompetitors.find(c => 
        c.name.toLowerCase() === competitorName.toLowerCase()
      );

      if (competitor) {
        breadcrumbs.push({
          label: competitor.name,
          href: location.pathname // No clickeable, es la página actual
        });
      } else {
        // Competidor no encontrado, mostrar nombre capitalizado
        breadcrumbs.push({
          label: competitorName.charAt(0).toUpperCase() + competitorName.slice(1),
          href: location.pathname
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground mb-4">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={`${breadcrumb.href}-${index}`} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-1" />}
          {index === breadcrumbs.length - 1 ? (
            <span className="text-foreground font-medium flex items-center">
              {breadcrumb.icon && <breadcrumb.icon className="h-4 w-4 mr-1" />}
              {breadcrumb.label}
            </span>
          ) : (
            <Link
              to={breadcrumb.href}
              className="hover:text-foreground transition-colors flex items-center"
            >
              {breadcrumb.icon && <breadcrumb.icon className="h-4 w-4 mr-1" />}
              {breadcrumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}