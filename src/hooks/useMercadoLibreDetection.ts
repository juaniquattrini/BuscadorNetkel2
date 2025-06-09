import { useState, useEffect } from 'react';

export function useMercadoLibreDetection() {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [detectedCountry, setDetectedCountry] = useState<string>('');
  const [productTitle, setProductTitle] = useState<string>('');

  useEffect(() => {
    // Detectar si venimos desde la extensión
    const urlParams = new URLSearchParams(window.location.search);
    const originalUrl = urlParams.get('original_url');
    const country = urlParams.get('detected_country');
    
    if (originalUrl) {
      setCurrentUrl(decodeURIComponent(originalUrl));
    }
    
    if (country) {
      setDetectedCountry(country);
    }
  }, []);

  return {
    currentUrl,
    detectedCountry,
    productTitle,
    hasExtensionData: !!(currentUrl || detectedCountry)
  };
}