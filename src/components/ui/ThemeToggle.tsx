import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-muted-foreground">Tema:</span>
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
        <Sun className="absolute left-1 h-3 w-3 text-muted-foreground" />
        <Moon className="absolute right-1 h-3 w-3 text-muted-foreground" />
      </button>
      <span className="text-sm text-muted-foreground capitalize">{theme}</span>
    </div>
  );
}