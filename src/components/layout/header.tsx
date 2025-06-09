import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Search className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">Netkel Search</span>
        </Link>
        
        <ThemeToggle />
      </div>
    </header>
  );
}