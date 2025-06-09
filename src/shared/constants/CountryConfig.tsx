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

export const COUNTRY_CONFIG: Record<string, CountryConfig> = {
  CO: {
    code: 'CO',
    name: 'Colombia',
    flag: '🇨🇴',
    path: '/co',
    competitors: [
      { name: 'Alkosto', title: 'Buscador Netkel Alkosto Colombia', cx: '515dc9e174e6b4e90', domains: ['alkosto.com'] },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress Colombia', cx: '8506586f8692b4a9c', domains: ['es.aliexpress.com'] },
      { name: 'Exito', title: 'Buscador Netkel Exito Colombia', cx: '525dc6471986e477c', domains: ['exito.com'] },
      { name: 'Falabella', title: 'Buscador Netkel Falabella Colombia', cx: '02e89763e96a6408d', domains: ['falabella.com.co'] },
      { name: 'Merqueo', title: 'Buscador Netkel Merqueo Colombia', cx: 'e2824816e575042b4', domains: ['merqueo.com'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Colombia', cx: '826964074351d48f5' }
    ]
  },

  AR: {
    code: 'AR',
    name: 'Argentina', 
    flag: '🇦🇷',
    path: '/ar',
    competitors: [
      { name: 'Provinciacompras', title: 'Buscador Netkel Provincia Compras Argentina', cx: 'e2e1c9ddacc8244f6', domains: ['provinciacompras.gba.gob.ar'] },
      { name: 'Cotodigital3', title: 'Buscador Netkel Coto Digital Argentina', cx: '64a47fe1d149a4f53', domains: ['cotodigital3.com.ar'] },
      { name: 'Carrefour', title: 'Buscador Netkel Carrefour Argentina', cx: 'f2298697f205943aa', domains: ['carrefour.com.ar'] },
      { name: 'Dexter', title: 'Buscador Netkel Dexter Argentina', cx: '5495e0075798849cc', domains: ['dexter.com.ar'] },
      { name: 'Easy', title: 'Buscador Netkel Easy Argentina', cx: 'e30b5d1f3c5b0403a', domains: ['easy.com.ar'] },
      { name: 'Farmacity', title: 'Buscador Netkel Farmacity Argentina', cx: '46f640fdd52aa4e3f', domains: ['farmacity.com'] },
      { name: 'Fravega', title: 'Buscador Netkel Fravega Argentina', cx: '75f59bb6c0382472e', domains: ['fravega.com'] },
      { name: 'Juleriaque', title: 'Buscador Netkel Juleriaque Argentina', cx: '64c3d86af8b0d45b9', domains: ['juleriaque.com.ar'] },
      { name: 'Jumbo', title: 'Buscador Netkel Jumbo Argentina', cx: '273e0d3fc5a7d477c', domains: ['jumbo.com.ar'] },
      { name: 'Megatone', title: 'Buscador Netkel Megatone Argentina', cx: '46dc462e7da004338', domains: ['megatone.com.ar'] },
      { name: 'Musimundo', title: 'Buscador Netkel Musimundo Argentina', cx: '27699c1e1120846bf', domains: ['musimundo.com'] },
      { name: 'Oncity', title: 'Buscador Netkel OnCity Argentina', cx: 'c272a436e88324573', domains: ['oncity.com.ar'] },
      { name: 'Stockcenter', title: 'Buscador Netkel Stock Center Argentina', cx: 'c498f1b3ad7754c60', domains: ['stockcenter.com.ar'] },
      { name: 'Solodeportes', title: 'Buscador Netkel Solo Deportes Argentina', cx: '87e0cb23d1bcf4fbb', domains: ['solodeportes.com.ar'] },
      { name: 'Samsung', title: 'Buscador Netkel Samsung Argentina', cx: '708a5e90bc1f941ce', domains: ['samsung.com.ar'] },
      { name: 'Sportline', title: 'Buscador Netkel Sportline Argentina', cx: '879c0d9385c484920', domains: ['sportline.com.ar'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Argentina', cx: '059e29f122b284a17' }
    ]
  },

  BR: {
    code: 'BR',
    name: 'Brasil',
    flag: '🇧🇷', 
    path: '/br',
    competitors: [
      { name: 'Adidas', title: 'Buscador Netkel Adidas Brasil', cx: '22d187c07c4354874', domains: ['adidas.com.br'] },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress Brasil', cx: 'f3b5a1d8f54c4484c', domains: ['pt.aliexpress.com'] },
      { name: 'Amazon', title: 'Buscador Netkel Amazon Brasil', cx: '772336e3b39854fd7', domains: ['amazon.com.br'] },
      { name: 'Americanas', title: 'Buscador Netkel Americanas Brasil', cx: '749751f73506b41d8', domains: ['americanas.com.br'] },
      { name: 'Casasbahia', title: 'Buscador Netkel Casas Bahia Brasil', cx: 'c742bf15247254c7a', domains: ['casasbahia.com.br'] },
      { name: 'Centauro', title: 'Buscador Netkel Centauro Brasil', cx: '500a99cbc37d14194', domains: ['centauro.com.br'] },
      { name: 'Carrefour', title: 'Buscador Netkel Carrefour Brasil', cx: '70902e3e5e3ca48f1', domains: ['carrefour.com.br'] },
      { name: 'Dafiti', title: 'Buscador Netkel Dafiti Brasil', cx: 'a389c8c2ff2064d5c', domains: ['dafiti.com.br'] },
      { name: 'Extra', title: 'Buscador Netkel Extra Brasil', cx: 'b429ff0b79c9e41cf', domains: ['extra.com.br'] },
      { name: 'Fastshop', title: 'Buscador Netkel Fast Shop Brasil', cx: 'e39962196ace141e2', domains: ['fastshop.com.br'] },
      { name: 'Leroymerlin', title: 'Buscador Netkel Leroy Merlin Brasil', cx: 'b46f9040248d749b5', domains: ['leroymerlin.com.br'] },
      { name: 'Madeiramadeira', title: 'Buscador Netkel Madeira Madeira Brasil', cx: '2390d7ab6bd744d5d', domains: ['madeiramadeira.com.br'] },
      { name: 'Magazineluiza', title: 'Buscador Netkel Magazine Luiza Brasil', cx: 'b0e2e652021924191', domains: ['magazineluiza.com.br'] },
      { name: 'Netshoes', title: 'Buscador Netkel Netshoes Brasil', cx: '44a817d2d1c6d470b', domains: ['netshoes.com.br'] },
      { name: 'Paodeacucar', title: 'Buscador Netkel Pão de Açúcar Brasil', cx: '830ad385361ce49b7', domains: ['paodeacucar.com'] },
      { name: 'Lojasrenner', title: 'Buscador Netkel Lojas Renner Brasil', cx: 'a5c8d79738b84419d', domains: ['lojasrenner.com.br'] },
      { name: 'Shein', title: 'Buscador Netkel Shein Brasil', cx: '77434a3c9434a4cdc', domains: ['br.shein.com'] },
      { name: 'Samsung', title: 'Buscador Netkel Samsung Brasil', cx: 'e0f73d2dbff304028', domains: ['samsung.com.br'] },
      { name: 'Shopee', title: 'Buscador Netkel Shopee Brasil', cx: '847fcbaa1b0d94d72', domains: ['shopee.com.br'] },
      { name: 'Zattini', title: 'Buscador Netkel Zattini Brasil', cx: '71dbf45d40d9c4261', domains: ['zattini.com.br'] },
      { name: 'Belezanaweb', title: 'Buscador Netkel Beleza na Web Brasil', cx: '11b4e4fed91f44e34', domains: ['belezanaweb.com.br'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Brasil', cx: '336a34abc2bee480a' }
    ]
  },

  CL: {
    code: 'CL',
    name: 'Chile',
    flag: '🇨🇱',
    path: '/cl', 
    competitors: [
      { name: 'Lider', title: 'Buscador Netkel Lider Chile', cx: 'a64fba6b22a7f4218', domains: ['lider.cl'] },
      { name: 'Paris', title: 'Buscador Netkel Paris Chile', cx: 'b72bbe311cf3541d5', domains: ['paris.cl'] },
      { name: 'Falabella', title: 'Buscador Netkel Falabella Chile', cx: 'd675cee5375024b14', domains: ['falabella.com'] },
      { name: 'Ripley', title: 'Buscador Netkel Ripley Chile', cx: '12853ba48ce9a43ce', domains: ['ripley.cl'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Chile', cx: '50b6e00efb1294ad5' }
    ]
  },

  MX: {
    code: 'MX',
    name: 'México',
    flag: '🇲🇽',
    path: '/mx',
    competitors: [
      { name: 'Adidas', title: 'Buscador Netkel Adidas México', cx: '40560d24e54ab46ab', domains: ['adidas.mx'] },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress México', cx: 'f3b5a1d8f54c4484c', domains: ['es.aliexpress.com'] },
      { name: 'Amazon', title: 'Buscador Netkel Amazon México', cx: '5523c0e054c33494c', domains: ['amazon.com.mx'] },
      { name: 'Bodega', title: 'Buscador Netkel Bodega Aurrera México', cx: '257c751bc657a4c13', domains: ['bodegaaurrera.com.mx'] },
      { name: 'Converse', title: 'Buscador Netkel Converse México', cx: 'b325d9850feef4abb', domains: ['converse.mx'] },
      { name: 'Coppel', title: 'Buscador Netkel Coppel México', cx: '916883e81e8a84a05', domains: ['coppel.com'] },
      { name: 'Homedepot', title: 'Buscador Netkel Home Depot México', cx: '32b73005a918c4c71', domains: ['homedepot.com.mx'] },
      { name: 'Innovasport', title: 'Buscador Netkel Innova Sport México', cx: '554fac2d66f824234', domains: ['innovasport.com'] },
      { name: 'Liverpool', title: 'Buscador Netkel Liverpool México', cx: '475d25a1ef4a545a3', domains: ['liverpool.com.mx'] },
      { name: 'Palaciodehierro', title: 'Buscador Netkel Palacio de Hierro México', cx: '17bedf9825b604fa6', domains: ['elpalaciodehierro.com'] },
      { name: 'Shein', title: 'Buscador Netkel Shein México', cx: '401ca36f68ecf41f5', domains: ['mx.shein.com'] },
      { name: 'Samsung', title: 'Buscador Netkel Samsung México', cx: 'f3a10fcec52c44aa1', domains: ['samsung.com.mx'] },
      { name: 'Temu', title: 'Buscador Netkel Temu México', cx: 'b3fb03e58fc884000', domains: ['temu.com'] },
      { name: 'Walmart', title: 'Buscador Netkel Walmart México', cx: '85b116caaa40d4c12', domains: ['walmart.com.mx'] },
      { name: 'WalmartSuper', title: 'Buscador Netkel Walmart Super México', cx: '27eaeac3494c64fed', domains: ['walmartsuper.com.mx'] },
      { name: 'Elektra', title: 'Buscador Netkel Elektra México', cx: 'b0e3c928e928643ff', domains: ['elektra.mx'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel México', cx: 'c23a8957967c84d6b' }
    ]
  },

  PE: {
    code: 'PE',
    name: 'Perú',
    flag: '🇵🇪',
    path: '/pe',
    competitors: [
      { name: 'Falabella', title: 'Buscador Netkel Falabella Perú', cx: '82f257de540d84c1a', domains: ['falabella.com.pe'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Perú', cx: 'a04cf0817cb754012' }
    ]
  },

  UY: {
    code: 'UY',
    name: 'Uruguay',
    flag: '🇺🇾',
    path: '/uy',
    competitors: [
      { name: 'Tiendamia', title: 'Buscador Netkel TiendaMIA Uruguay', cx: '704dcd288675e46da', domains: ['tiendamia.com'] },
      { name: 'Loi', title: 'Buscador Netkel Loi Uruguay', cx: '950548067af1c4286', domains: ['loi.com.uy'] },
      { name: 'TiendaInglesa', title: 'Buscador Netkel Tienda Inglesa Uruguay', cx: 'b281281529385471d', domains: ['tiendainglesa.com.uy'] }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Netkel Lens Uruguay', cx: '20fdf79cead3049a2' }
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

// EXPORTS para compatibilidad
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