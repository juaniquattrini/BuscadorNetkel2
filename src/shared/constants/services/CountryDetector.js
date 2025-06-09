import { COUNTRY_CONFIG } from '../constants/CountryConfig.js';

export class CountryDetector {
  // EDITABLE: URL base de la aplicación
  static BASE_URL = 'https://kelsoft-matcheador.netlify.app';
  
  // EDITABLE: URLs para diferentes entornos
  static ENVIRONMENT_URLS = {
    localhost: 'http://localhost:5173',
    qa: 'https://qaenvironmentkelsoft-matcheador.netlify.app',
    production: 'https://kelsoft-matcheador.netlify.app'
  };

  /**
   * Mapeo automático de dominios a países basado en configuración
   */
  static buildDomainToCountryMap() {
    const map = {};
    
    // Mercado Libre (patrones específicos)
    map['mercadolibre.com.ar'] = 'AR';
    map['mercadolibre.com.mx'] = 'MX';
    map['mercadolibre.com.co'] = 'CO';
    map['mercadolibre.cl'] = 'CL';
    map['mercadolibre.com.pe'] = 'PE';
    map['mercadolibre.com.uy'] = 'UY';
    map['mercadolibre.com.br'] = 'BR';
    
    // Agregar dominios de competidores desde configuración
    Object.entries(COUNTRY_CONFIG).forEach(([countryCode, config]) => {
      [...config.competitors, ...config.lens].forEach(competitor => {
        if (competitor.domains) {
          competitor.domains.forEach(domain => {
            map[domain] = countryCode;
          });
        }
      });
    });
    
    return map;
  }

  /**
   * Detecta el entorno actual
   */
  static detectEnvironment() {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'localhost';
      }
      if (hostname.includes('qa')) {
        return 'qa';
      }
    }
    return 'production';
  }

  /**
   * Obtiene la URL base según el entorno
   */
  static getBaseUrl() {
    const env = this.detectEnvironment();
    return this.ENVIRONMENT_URLS[env] || this.BASE_URL;
  }

  /**
   * Detecta el país basado en una URL
   */
  static detectCountryFromUrl(url) {
    try {
      const urlObj = new URL(url);
      const hostname = urlObj.hostname.toLowerCase();
      
      const domainMap = this.buildDomainToCountryMap();
      return domainMap[hostname] || null;
    } catch (error) {
      console.error('Error parsing URL:', error);
      return null;
    }
  }

  /**
   * Obtiene la URL de la aplicación web para un país
   */
  static getWebAppUrl(countryCode, params = {}) {
    const baseUrl = this.getBaseUrl();
    const countryConfig = COUNTRY_CONFIG[countryCode];
    
    if (!countryConfig) {
      console.warn(`País ${countryCode} no configurado, usando Argentina por defecto`);
      return `${baseUrl}/ar`;
    }

    let url = `${baseUrl}${countryConfig.path}`;
    
    // Agregar parámetros de query
    if (Object.keys(params).length > 0) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    return url;
  }

  /**
   * Detecta país de la pestaña activa y obtiene URL correspondiente
   */
  static async detectCurrentCountryAndUrl() {
    try {
      const [activeTab] = await chrome.tabs.query({ 
        active: true, 
        currentWindow: true 
      });
      
      if (!activeTab?.url) {
        throw new Error('No se pudo obtener la URL de la pestaña activa');
      }

      const country = this.detectCountryFromUrl(activeTab.url);
      const detectedCountry = country || 'AR'; // Default a Argentina
      
      const webAppUrl = this.getWebAppUrl(detectedCountry, {
        source: 'extension',
        detected_country: detectedCountry,
        original_url: encodeURIComponent(activeTab.url)
      });

      return {
        country: detectedCountry,
        url: webAppUrl,
        originalUrl: activeTab.url,
        wasDetected: !!country
      };
    } catch (error) {
      console.error('Error detecting country:', error);
      return {
        country: 'AR',
        url: this.getWebAppUrl('AR'),
        originalUrl: null,
        wasDetected: false
      };
    }
  }

  /**
   * Obtiene competidores para un país específico
   */
  static getCompetitorsForCountry(countryCode) {
    const config = COUNTRY_CONFIG[countryCode];
    return config ? config.competitors : [];
  }

  /**
   * Obtiene configuración de LENS para un país
   */
  static getLensForCountry(countryCode) {
    const config = COUNTRY_CONFIG[countryCode];
    return config ? config.lens[0] : null;
  }

  /**
   * Busca automáticamente el competidor más relevante basado en la URL actual
   */
  static async findRelevantCompetitor() {
    try {
      const { country, originalUrl } = await this.detectCurrentCountryAndUrl();
      
      if (!originalUrl) {
        return null;
      }

      const hostname = new URL(originalUrl).hostname.toLowerCase();
      const competitors = this.getCompetitorsForCountry(country);
      
      // Buscar competidor que coincida con el dominio actual
      const matchingCompetitor = competitors.find(comp => 
        comp.domains && comp.domains.some(domain => hostname.includes(domain))
      );

      return {
        country,
        competitor: matchingCompetitor,
        lens: this.getLensForCountry(country)
      };
    } catch (error) {
      console.error('Error finding relevant competitor:', error);
      return null;
    }
  }
}