import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { countries, competitorData } from '@/data/competitors';

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbs = () => {
    const breadcrumbs = [
      { label: 'Inicio', href: '/', icon: Home }
    ];

    if (pathSegments.length === 0) return breadcrumbs;

    if (pathSegments[0] === 'country' && pathSegments[1]) {
      const country = countries.find(c => c.code === pathSegments[1]);
      if (country) {
        breadcrumbs.push({
          label: country.name,
          href: `/country/${country.code}`
        });
      }
    }

    if (pathSegments[0] === 'search' && pathSegments.length >= 3) {
      const [, countryCode, competitorName] = pathSegments;
      const country = countries.find(c => c.code === countryCode);
      const competitors = competitorData[countryCode]?.competitors || [];
      const lens = competitorData[countryCode]?.lens || [];
      const competitor = [...competitors, ...lens].find(c => 
        c.name.toLowerCase() === competitorName.toLowerCase()
      );

      if (country) {
        breadcrumbs.push({
          label: country.name,
          href: `/country/${country.code}`
        });
      }

      if (competitor) {
        breadcrumbs.push({
          label: competitor.name,
          href: location.pathname
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-1 text-sm text-muted-foreground">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.href} className="flex items-center">
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