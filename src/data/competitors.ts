import { CompetitorData, Country } from '@/types';

export const countries: Country[] = [
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'BR', name: 'Brasil', flag: '🇧🇷' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'MX', name: 'México', flag: '🇲🇽' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'PE', name: 'Perú', flag: '🇵🇪' },
];

export const competitorData: CompetitorData = {
  CO: {
    competitors: [
      { name: 'Alkosto', title: 'Buscador Netkel Alkosto Colombia', cx: '515dc9e174e6b4e90' },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress Colombia', cx: '8506586f8692b4a9c' },
      { name: 'Exito', title: 'Buscador Netkel Exito Colombia', cx: '525dc6471986e477c' },
      { name: 'Falabella', title: 'Buscador Netkel Falabella Colombia', cx: '02e89763e96a6408d' },
      { name: 'Merqueo', title: 'Buscador Netkel Merqueo Colombia', cx: 'e2824816e575042b4' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Colombia', cx: 'f0147142e623145cd' }
    ]
  },
  AR: {
    competitors: [
      { name: 'Provinciacompras', title: 'Buscador Netkel Provincia Compras Argentina', cx: 'e2e1c9ddacc8244f6' },
      { name: 'Cotodigital', title: 'Buscador Netkel Coto Digital Argentina', cx: '64a47fe1d149a4f53' },
      { name: 'Carrefour', title: 'Buscador Netkel Carrefour Argentina', cx: 'f2298697f205943aa' },
      { name: 'Dexter', title: 'Buscador Netkel Dexter Argentina', cx: '5495e0075798849cc' },
      { name: 'Easy', title: 'Buscador Netkel Easy Argentina', cx: 'e30b5d1f3c5b0403a' },
      { name: 'Farmacity', title: 'Buscador Netkel Farmacity Argentina', cx: '46f640fdd52aa4e3f' },
      { name: 'Fravega', title: 'Buscador Netkel Fravega Argentina', cx: '75f59bb6c0382472e' },
      { name: 'Jumbo', title: 'Buscador Netkel Jumbo Argentina', cx: '273e0d3fc5a7d477c' },
      { name: 'Megatone', title: 'Buscador Netkel Megatone Argentina', cx: '46dc462e7da004338' },
      { name: 'Musimundo', title: 'Buscador Netkel Musimundo Argentina', cx: '27699c1e1120846bf' },
      { name: 'Stockcenter', title: 'Buscador Netkel Stock Center Argentina', cx: 'c498f1b3ad7754c60' },
      { name: 'Solodeportes', title: 'Buscador Netkel Solo Deportes Argentina', cx: '87e0cb23d1bcf4fbb' },
      { name: 'Samsung', title: 'Buscador Netkel Samsung Argentina', cx: '708a5e90bc1f941ce' },
      { name: 'Sportline', title: 'Buscador Netkel Sportline Argentina', cx: '879c0d9385c484920' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Argentina', cx: 'd56427f652e774362' }
    ]
  },
  BR: {
    competitors: [
      { name: 'Adidas', title: 'Buscador Netkel Adidas Brasil', cx: '22d187c07c4354874' },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress Brasil', cx: 'f3b5a1d8f54c4484c' },
      { name: 'Amazon', title: 'Buscador Netkel Amazon Brasil', cx: '772336e3b39854fd7' },
      { name: 'Americanas', title: 'Buscador Netkel Americanas Brasil', cx: '749751f73506b41d8' },
      { name: 'Casasbahia', title: 'Buscador Netkel Casas Bahia Brasil', cx: 'c742bf15247254c7a' },
      { name: 'Centauro', title: 'Buscador Netkel Centauro Brasil', cx: '500a99cbc37d14194' },
      { name: 'Carrefour', title: 'Buscador Netkel Carrefour Brasil', cx: '70902e3e5e3ca48f1' },
      { name: 'Dafiti', title: 'Buscador Netkel Dafiti Brasil', cx: 'a389c8c2ff2064d5c' },
      { name: 'Extra', title: 'Buscador Netkel Extra Brasil', cx: 'b429ff0b79c9e41cf' },
      { name: 'Fastshop', title: 'Buscador Netkel Fast Shop Brasil', cx: 'e39962196ace141e2' },
      { name: 'Leroymerlin', title: 'Buscador Netkel Leroy Merlin Brasil', cx: 'b46f9040248d749b5' },
      { name: 'Madeiramadeira', title: 'Buscador Netkel Madeira Madeira Brasil', cx: '2390d7ab6bd744d5d' },
      { name: 'Magazineluiza', title: 'Buscador Netkel Magazine Luiza Brasil', cx: 'b0e2e652021924191' },
      { name: 'Netshoes', title: 'Buscador Netkel Netshoes Brasil', cx: '44a817d2d1c6d470b' },
      { name: 'Paodeacucar', title: 'Buscador Netkel Pão de Açúcar Brasil', cx: '830ad385361ce49b7' },
      { name: 'Lojasrenner', title: 'Buscador Netkel Lojas Renner Brasil', cx: 'a5c8d79738b84419d' },
      { name: 'Shein', title: 'Buscador Netkel Shein Brasil', cx: '77434a3c9434a4cdc' },
      { name: 'Samsung', title: 'Buscador Netkel Samsung Brasil', cx: 'e0f73d2dbff304028' },
      { name: 'Shopee', title: 'Buscador Netkel Shopee Brasil', cx: '847fcbaa1b0d94d72' },
      { name: 'Zattini', title: 'Buscador Netkel Zattini Brasil', cx: '71dbf45d40d9c4261' },
      { name: 'Belezanaweb', title: 'Buscador Netkel Beleza na Web Brasil', cx: '11b4e4fed91f44e34' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Brasil', cx: '36cd8ce70a1664929' }
    ]
  },
  CL: {
    competitors: [
      { name: 'Paris', title: 'Buscador Netkel Paris Chile', cx: 'b72bbe311cf3541d5' },
      { name: 'Falabella', title: 'Buscador Netkel Falabella Chile', cx: 'd675cee5375024b14' },
      { name: 'Ripley', title: 'Buscador Netkel Ripley Chile', cx: '12853ba48ce9a43ce' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Chile', cx: '517facb761b5249c5' }
    ]
  },
  MX: {
    competitors: [
      { name: 'Adidas', title: 'Buscador Netkel Adidas México', cx: '40560d24e54ab46ab' },
      { name: 'Aliexpress', title: 'Buscador Netkel Aliexpress México', cx: 'f3b5a1d8f54c4484c' },
      { name: 'Amazon', title: 'Buscador Netkel Amazon México', cx: '5523c0e054c33494c' },
      { name: 'Converse', title: 'Buscador Netkel Converse México', cx: 'b325d9850feef4abb' },
      { name: 'Coppel', title: 'Buscador Netkel Coppel México', cx: '916883e81e8a84a05' },
      { name: 'Homedepot', title: 'Buscador Netkel Home Depot México', cx: '32b73005a918c4c71' },
      { name: 'Innovasport', title: 'Buscador Netkel Innova Sport México', cx: '554fac2d66f824234' },
      { name: 'Liverpool', title: 'Buscador Netkel Liverpool México', cx: '475d25a1ef4a545a3' },
      { name: 'Palaciodehierro', title: 'Buscador Netkel Palacio de Hierro México', cx: '17bedf9825b604fa6' },
      { name: 'Shein', title: 'Buscador Netkel Shein México', cx: '401ca36f68ecf41f5' },
      { name: 'Samsung', title: 'Buscador Netkel Samsung México', cx: 'f3a10fcec52c44aa1' },
      { name: 'Temu', title: 'Buscador Netkel Temu México', cx: 'b3fb03e58fc884000' },
      { name: 'Walmart', title: 'Buscador Netkel Walmart México', cx: '85b116caaa40d4c12' },
      { name: 'Superwaltmart', title: 'Buscador Netkel Walmart Super México', cx: '27eaeac3494c64fed' },
      { name: 'Elektra', title: 'Buscador Netkel Elektra México', cx: 'b0e3c928e928643ff' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel México', cx: '60c96aed779c94207' }
    ]
  },
  PE: {
    competitors: [
      { name: 'Falabella', title: 'Buscador Netkel Falabella Perú', cx: '82f257de540d84c1a' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Perú', cx: '20fdf79cead3049a2' }
    ]
  },
  UY: {
    competitors: [
      { name: 'Tiendamia', title: 'Buscador Netkel TiendaMIA Uruguay', cx: '20fdf79cead3049a2' },
      { name: 'Loi', title: 'Buscador Netkel Loi Uruguay', cx: '950548067af1c4286' },
      { name: 'Tienda Inglesa', title: 'Buscador Netkel Tienda Inglesa Uruguay', cx: 'b281281529385471d' }
    ],
    lens: [
      { name: 'Lens', title: 'Buscador Lens Netkel Uruguay', cx: '20fdf79cead3049a2' }
    ]
  }
};