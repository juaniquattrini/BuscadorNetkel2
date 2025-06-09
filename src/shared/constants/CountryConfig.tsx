export interface CompetitorConfig {
  name: string;
  title: string;
  cx: string;
  domains?: string[];
}

export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  path: string;
  competitors: CompetitorConfig[];
  lens: CompetitorConfig[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

/**
 * Configuración completa de países y competidores
 * EDITABLE: Aquí puedes agregar/modificar países y competidores
 */
export const COUNTRY_CONFIG: Record<string, CountryConfig> = {
  AR: {
    code: 'AR',
    name: 'Argentina',
    flag: '🇦🇷',
    path: '/ar',
    competitors: [
      { 
        name: 'Fravega', 
        title: 'Buscador Netkel Fravega Argentina', 
        cx: '75f59bb6c0382472e',
        domains: ['fravega.com']
      },
      { 
        name: 'Garbarino', 
        title: 'Buscador Netkel Garbarino Argentina', 
        cx: '273e0d3fc5a7d477c',
        domains: ['garbarino.com']
      },
      { 
        name: 'Megatone', 
        title: 'Buscador Netkel Megatone Argentina', 
        cx: '46dc462e7da004338',
        domains: ['megatone.com.ar']
      },
      { 
        name: 'Musimundo', 
        title: 'Buscador Netkel Musimundo Argentina', 
        cx: '27699c1e1120846bf',
        domains: ['musimundo.com']
      },
      { 
        name: 'Easy', 
        title: 'Buscador Netkel Easy Argentina', 
        cx: 'e30b5d1f3c5b0403a',
        domains: ['easy.com.ar']
      },
      { 
        name: 'Jumbo', 
        title: 'Buscador Netkel Jumbo Argentina', 
        cx: '5f59bb6c0382472e8',
        domains: ['jumbo.com.ar']
      },
      { 
        name: 'Carrefour', 
        title: 'Buscador Netkel Carrefour Argentina', 
        cx: 'f2298697f205943aa',
        domains: ['carrefour.com.ar']
      },
      { 
        name: 'Farmacity', 
        title: 'Buscador Netkel Farmacity Argentina', 
        cx: '46f640fdd52aa4e3f',
        domains: ['farmacity.com']
      },
      { 
        name: 'Solodeportes', 
        title: 'Buscador Netkel Solo Deportes Argentina', 
        cx: '87e0cb23d1bcf4fbb',
        domains: ['solodeportes.com.ar']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Argentina', 
        cx: 'd56427f652e774362' 
      }
    ]
  },
  
  BR: {
    code: 'BR',
    name: 'Brasil',
    flag: '🇧🇷',
    path: '/br',
    competitors: [
      { 
        name: 'Amazon', 
        title: 'Buscador Netkel Amazon Brasil', 
        cx: '772336e3b39854fd7',
        domains: ['amazon.com.br']
      },
      { 
        name: 'Americanas', 
        title: 'Buscador Netkel Americanas Brasil', 
        cx: '749751f73506b41d8',
        domains: ['americanas.com.br']
      },
      { 
        name: 'Casasbahia', 
        title: 'Buscador Netkel Casas Bahia Brasil', 
        cx: 'c742bf15247254c7a',
        domains: ['casasbahia.com.br']
      },
      { 
        name: 'Centauro', 
        title: 'Buscador Netkel Centauro Brasil', 
        cx: '500a99cbc37d14194',
        domains: ['centauro.com.br']
      },
      { 
        name: 'Magazineluiza', 
        title: 'Buscador Netkel Magazine Luiza Brasil', 
        cx: '8f2b44e89c6a54321',
        domains: ['magazineluiza.com.br']
      },
      { 
        name: 'Extra', 
        title: 'Buscador Netkel Extra Brasil', 
        cx: 'b429ff0b79c9e41cf',
        domains: ['extra.com.br']
      },
      { 
        name: 'Fastshop', 
        title: 'Buscador Netkel Fast Shop Brasil', 
        cx: 'e39962196ace141e2',
        domains: ['fastshop.com.br']
      },
      { 
        name: 'Leroymerlin', 
        title: 'Buscador Netkel Leroy Merlin Brasil', 
        cx: 'b46f9040248d749b5',
        domains: ['leroymerlin.com.br']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Brasil', 
        cx: 'a1b2c3d4e5f6g7h8i' 
      }
    ]
  },

  CO: {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    path: '/co',
    competitors: [
      { 
        name: 'Alkosto', 
        title: 'Buscador Netkel Alkosto Colombia', 
        cx: '515dc9e174e6b4e90',
        domains: ['alkosto.com']
      },
      { 
        name: 'Exito', 
        title: 'Buscador Netkel Exito Colombia', 
        cx: '525dc6471986e477c',
        domains: ['exito.com']
      },
      { 
        name: 'Falabella', 
        title: 'Buscador Netkel Falabella Colombia', 
        cx: '02e89763e96a6408d',
        domains: ['falabella.com.co']
      },
      { 
        name: 'Merqueo', 
        title: 'Buscador Netkel Merqueo Colombia', 
        cx: 'e2824816e575042b4',
        domains: ['merqueo.com']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Colombia', 
        cx: 'f0147142e623145cd' 
      }
    ]
  },

  CL: {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    path: '/cl',
    competitors: [
      { 
        name: 'Falabella', 
        title: 'Buscador Netkel Falabella Chile', 
        cx: '1a2b3c4d5e6f7g8h9',
        domains: ['falabella.com']
      },
      { 
        name: 'Ripley', 
        title: 'Buscador Netkel Ripley Chile', 
        cx: '9h8g7f6e5d4c3b2a1',
        domains: ['ripley.cl']
      },
      { 
        name: 'Paris', 
        title: 'Buscador Netkel Paris Chile', 
        cx: '5f4e3d2c1b0a9h8g7',
        domains: ['paris.cl']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Chile', 
        cx: 'z9y8x7w6v5u4t3s2r' 
      }
    ]
  },

  MX: {
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    path: '/mx',
    competitors: [
      { 
        name: 'Liverpool', 
        title: 'Buscador Netkel Liverpool México', 
        cx: '475d25a1ef4a545a3',
        domains: ['liverpool.com.mx']
      },
      { 
        name: 'Walmart', 
        title: 'Buscador Netkel Walmart México', 
        cx: '85b116caaa40d4c12',
        domains: ['walmart.com.mx']
      },
      { 
        name: 'Coppel', 
        title: 'Buscador Netkel Coppel México', 
        cx: '916883e81e8a84a05',
        domains: ['coppel.com']
      },
      { 
        name: 'Elektra', 
        title: 'Buscador Netkel Elektra México', 
        cx: 'b0e3c928e928643ff',
        domains: ['elektra.mx']
      },
      { 
        name: 'Homedepot', 
        title: 'Buscador Netkel Home Depot México', 
        cx: '32b73005a918c4c71',
        domains: ['homedepot.com.mx']
      },
      { 
        name: 'Innovasport', 
        title: 'Buscador Netkel Innova Sport México', 
        cx: '554fac2d66f824234',
        domains: ['innovasport.com']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel México', 
        cx: '60c96aed779c94207' 
      }
    ]
  },

  UY: {
    code: 'UY',
    name: 'Uruguay',
    flag: '🇺🇾',
    path: '/uy',
    competitors: [
      { 
        name: 'Tiendamia', 
        title: 'Buscador Netkel TiendaMIA Uruguay', 
        cx: '20fdf79cead3049a2',
        domains: ['tiendamia.com']
      },
      { 
        name: 'Loi', 
        title: 'Buscador Netkel Loi Uruguay', 
        cx: '950548067af1c4286',
        domains: ['loi.com.uy']
      },
      { 
        name: 'TiendaInglesa', 
        title: 'Buscador Netkel Tienda Inglesa Uruguay', 
        cx: 'b281281529385471d',
        domains: ['tiendainglesa.com.uy']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Uruguay', 
        cx: '20fdf79cead3049a2' 
      }
    ]
  },

  PE: {
    code: 'PE',
    name: 'Perú',
    flag: '🇵🇪',
    path: '/pe',
    competitors: [
      { 
        name: 'Falabella', 
        title: 'Buscador Netkel Falabella Perú', 
        cx: '82f257de540d84c1a',
        domains: ['falabella.com.pe']
      },
      { 
        name: 'Ripley', 
        title: 'Buscador Netkel Ripley Perú', 
        cx: '1f2e3d4c5b6a7f8e9',
        domains: ['ripley.com.pe']
      }
    ],
    lens: [
      { 
        name: 'Lens', 
        title: 'Buscador Lens Netkel Perú', 
        cx: '20fdf79cead3049a2' 
      }
    ]
  }
};

// Utilidades para acceso fácil
export const COUNTRY_PATHS = Object.values(COUNTRY_CONFIG).map(c => c.path);
export const COUNTRY_CODES = Object.keys(COUNTRY_CONFIG);

export const getCountryByPath = (path: string): CountryConfig | null => {
  return Object.values(COUNTRY_CONFIG).find(c => c.path === path) || null;
};

export const getCountryByCode = (code: string): CountryConfig | null => {
  return COUNTRY_CONFIG[code] || null;
};

// Para compatibilidad con competitors.ts existente
export const countries: Country[] = Object.values(COUNTRY_CONFIG).map(config => ({
  code: config.code,
  name: config.name,
  flag: config.flag
}));

export const competitorData: Record<string, { competitors: CompetitorConfig[], lens: CompetitorConfig[] }> = 
  Object.keys(COUNTRY_CONFIG).reduce((acc, code) => {
    const config = COUNTRY_CONFIG[code];
    acc[code] = {
      competitors: config.competitors,
      lens: config.lens
    };
    return acc;
  }, {} as Record<string, { competitors: CompetitorConfig[], lens: CompetitorConfig[] }>);