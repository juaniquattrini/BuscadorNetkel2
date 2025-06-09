import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { CountryPage } from '@/pages/CountryPage';
import { SearchPage } from '@/pages/SearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country" element={<CountryPage />} />
        <Route path="/search/:country/:competitor" element={<SearchPage />} />
        <Route path="/search/:country/:competitor/:query" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;