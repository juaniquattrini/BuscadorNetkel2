import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { CountryPage } from '@/pages/CountryPage';
import { SearchPage } from '@/pages/SearchPage';
import { COUNTRY_PATHS } from '@/shared/constants/CountryConfig';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Rutas dinámicas generadas desde configuración */}
        {COUNTRY_PATHS.map((path: string) => (
          <Route key={path} path={path} element={<CountryPage />} />
        ))}
        
        {/* Búsquedas específicas */}
        {COUNTRY_PATHS.map((path: string) => (
          <Route key={`${path}-search`} path={`${path}/:competitor`} element={<SearchPage />} />
        ))}
        
        {/* Con query de búsqueda */}
        {COUNTRY_PATHS.map((path: string) => (
          <Route key={`${path}-query`} path={`${path}/:competitor/:query`} element={<SearchPage />} />
        ))}
        
        {/* Compatibilidad con rutas antiguas */}
        <Route path="/country/:country" element={<CountryPage />} />
        <Route path="/search/:country/:competitor" element={<SearchPage />} />
        <Route path="/search/:country/:competitor/:query" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;