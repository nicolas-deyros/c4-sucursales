import { Grid, html } from 'gridjs';

new Grid({
  className: {
    table: 'text-xs',
    header: '',
    th: 'font-bold uppercase text-center',
  },
  sort: true,
  fixedHeader: true,
  search: {
    enabled: true,
  },
  pagination: {
    enabled: true,
    summary: true,
    limit: 10,
  },
  language: {
    search: {
      placeholder: '🔍 Buscador',
    },
    pagination: {
      previous: '👈',
      next: '👉',
      showing: 'Mostrando',
      results: () => 'Total',
    },
  },
  columns: [
    {
      id: 'id',
      hidden: true,
    },
    {
      id: 'format',
      hidden: true,
    },
    {
      id: 'name',
      name: 'Sucursal',
    },
    {
      id: 'address',
      name: 'Direcci\u00F3n',
      formatter: (_, row) =>
        html(
          `<a href='https://www.google.com.ar/maps/search/Carrefour+Maxi/@${row.cells[4].data},${row.cells[5].data},18z' target='_blank'><i class='fas fa-map-marker-alt'></i> ${row.cells[3].data}</a>`
        ),
    },
    {
      id: 'lat',
      hidden: true,
    },
    {
      id: 'lon',
      hidden: true,
    },
    {
      id: 'province',
      name: 'Provincia',
    },
    {
      id: 'mon_to_fri',
      name: 'Lunes a Viernes',
    },
    {
      id: 'sat',
      name: 'S\u00E1bado',
    },
    {
      id: 'sun',
      name: 'Domingo',
    },
    {
      id: 'holidays',
      name: 'Feriados',
    },
    {
      id: 'priority',
      name: 'Prioridad +60',
    },
  ],
  data: [
    {
      id: 20,
      format: 'MAXI',
      name: ' Maxi Avellaneda',
      address: 'Av. Presidente Hipólito Yrigoyen 299',
      lat: -34.6593916,
      lon: -58.3780207,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 59,
      format: 'MAXI',
      name: ' Maxi Godoy Cruz',
      address: 'San Martin 169 ',
      lat: -32.9223505,
      lon: -68.8477473,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 701,
      format: 'MAXI',
      name: ' Carrefour Maxi La Ferrere',
      address: 'Int. Federico Pedro Russo 5001-5297',
      lat: -34.7549552,
      lon: -58.6139389,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 702,
      format: 'MAXI',
      name: ' Carrefour Maxi Burzaco',
      address: 'Av. Monte Verde 7008',
      lat: -34.8223606,
      lon: -58.3682657,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '06:00 a 21:00',
      sat: '06:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: 'Ingreso General',
    },
    {
      id: 703,
      format: 'MAXI',
      name: ' Carrefour Maxi Moreno',
      address: 'Av. Libertador 7001',
      lat: -34.5901146,
      lon: -58.7536797,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 704,
      format: 'MAXI',
      name: ' Carrefour Maxi Ezpeleta',
      address: 'Av. Mitre 5530',
      lat: -34.7488866,
      lon: -58.2257917,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 705,
      format: 'MAXI',
      name: ' Carrefour Maxi José C. Paz',
      address: 'Av. Pres. Hipólito Yrigoyen 3866-3998',
      lat: -34.528588,
      lon: -58.7759466,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 706,
      format: 'MAXI',
      name: ' Carrefour Maxi Lomas de Zamora',
      address: 'Av. Gral. Martín Rodríguez 1502',
      lat: -34.7366876,
      lon: -58.4370387,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
    {
      id: 707,
      format: 'MAXI',
      name: ' Carrefour Maxi Córdoba Capital',
      address: 'Av. Juan B. Justo 4775',
      lat: -31.3681155,
      lon: -64.1796747,
      province: 'Córdoba',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '10:00 a 20:00',
      holidays: '10:00 a 20:00',
      priority: 'Ingreso General',
    },
  ],
}).render(document.getElementById('wrapper'));