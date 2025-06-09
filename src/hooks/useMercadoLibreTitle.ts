import { useState } from 'react';

export function useMercadoLibreTitle() {
  const [isLoading, setIsLoading] = useState(false);

  const extractTitle = async (url: string): Promise<string> => {
    setIsLoading(true);
    
    try {
      // Lógica similar a la función scrappearTitulo del código original
      if (url.includes('.com.co')) {
        url = url.replace('.com.co', '.com');
      }
      
      url = url.split('?')[0];
      url = url.split('#')[0];

      if (url.includes('.com') || url.includes('mercadolibre.cl')) {
        url = url.replace('.com.co', '.com');
        url = url.replace('https://', '');
        
        const segments = url.split('/');
        let productSlug = segments[1];
        
        if (!productSlug) return url;
        
        productSlug = productSlug.replace('-_JM', '');
        const parts = productSlug.split('-');
        const prefix = parts[0];
        
        let title: string;
        
        if (prefix[0] === 'M' && prefix[1] === 'L') {
          title = productSlug.replace(/^[^-]+-/, '');
          title = title.replace(/-/g, ' ');
          if (!prefix[3]) {
            title = title.replace(/^([^ ]+\s)/, '');
          }
        } else {
          title = productSlug.replace(/-/g, ' ');
        }

        // Si el título parece ser solo números o está vacío, usar API
        if (!title || title.trim() === '' || /^\d+$/.test(title)) {
          const apiUrl = `https://obtenertitulo.onrender.com/?url=${encodeURIComponent(url)}`;
          const response = await fetch(apiUrl);
          
          if (response.ok) {
            const data = await response.text();
            title = data.split('|')[0];
          }
        }
        
        title = title.replace('MCO', '').trim();
        return title;
      }
      
      return url;
    } catch (error) {
      console.error('Error extrayendo título:', error);
      return url;
    } finally {
      setIsLoading(false);
    }
  };

  return { extractTitle, isLoading };
}