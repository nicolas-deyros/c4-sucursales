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
          `<a href='https://www.google.com.ar/maps/search/Carrefour+Market/@${row.cells[4].data},${row.cells[5].data},18z' target='_blank'><i class='fas fa-map-marker-alt'></i> ${row.cells[3].data}</a>`
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
      id: 62,
      format: 'MARKET',
      name: ' Market Champagnat',
      address: 'Panamericana Ramal Pilar ',
      lat: -34.4498328,
      lon: -58.9185103,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 101,
      format: 'MARKET',
      name: ' Market Avellaneda II',
      address: 'Av. Belgrano 422',
      lat: -34.6614608,
      lon: -58.3703974,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 109,
      format: 'MARKET',
      name: ' Market La Plata I',
      address: 'Calle 7 767',
      lat: -34.9182279,
      lon: -57.9552819,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 110,
      format: 'MARKET',
      name: ' Market Corrientes Junín',
      address: 'Junín 1336',
      lat: -27.4677932,
      lon: -58.8362097,
      province: 'Corrientes',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: 'Cerrado',
      holidays: '09:00 a 13:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 114,
      format: 'MARKET',
      name: ' Market Bahía Blanca I',
      address: 'Brown 51',
      lat: -38.7204049,
      lon: -62.2701185,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '09:00 a 20:00',
      sat: '09:00 a 20:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '12:00 a 13:00',
    },
    {
      id: 115,
      format: 'MARKET',
      name: ' Market Flores',
      address: 'Av. Rivadavia 6538',
      lat: -34.6274214,
      lon: -58.4603586,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 116,
      format: 'MARKET',
      name: ' Market Avenida Santa Fe 1954',
      address: 'Av. Santa Fe 1954',
      lat: -34.5959016,
      lon: -58.3976047,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 118,
      format: 'MARKET',
      name: ' Market Vicente López',
      address: 'Vicente López 1676',
      lat: -34.5957358,
      lon: -58.4654559,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 119,
      format: 'MARKET',
      name: ' Market Río Cuarto',
      address: 'Sobremonte 902',
      lat: -33.1252606,
      lon: -64.3511956,
      province: 'Córdoba',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '08:00 a 13:30 y 17:30 a 20:00',
      holidays: '08:00 a 13:30 y 17:30 a 20:00',
      priority: '07:00 a 08:00 y feriados de 08:00 a 09:00',
    },
    {
      id: 120,
      format: 'MARKET',
      name: ' Market Belgrano Cabildo',
      address: 'Av. Cabildo 2441',
      lat: -34.5586292,
      lon: -58.4615501,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 122,
      format: 'MARKET',
      name: ' Market Jujuy',
      address: 'Belgrano 823',
      lat: -24.1865308,
      lon: -65.306869,
      province: 'Jujuy',
      mon_to_fri: '08:00 a 19:00',
      sat: '08:00 a 19:00',
      sun: '08:00 a 14:00',
      holidays: '08:00 a 14:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 125,
      format: 'MARKET',
      name: ' Market Paraná Uruguay',
      address: 'Uruguay 35',
      lat: -31.7384011,
      lon: -60.5418481,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 130,
      format: 'MARKET',
      name: ' Market Mar del Plata Centro',
      address: 'Catamarca 1965',
      lat: -37.9989186,
      lon: -57.5558947,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 132,
      format: 'MARKET',
      name: ' Market Catamarca',
      address: 'Rivadavia 945',
      lat: -28.4727095,
      lon: -65.7803846,
      province: 'Catamarca',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 134,
      format: 'MARKET',
      name: ' Market Tandil II',
      address: '9 de Julio 548',
      lat: -37.3262846,
      lon: -59.137284,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:30 a 18:00',
      sat: '08:30 a 18:00',
      sun: '09:00 a 18:00',
      holidays: '09:00 a 18:00',
      priority: '08:30 a 09:30',
    },
    {
      id: 135,
      format: 'MARKET',
      name: ' Market La Rioja',
      address: '25 de Mayo 151',
      lat: -29.4114763,
      lon: -66.8589397,
      province: 'La Rioja',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 137,
      format: 'MARKET',
      name: ' Market San Luis',
      address: 'Pringles 963',
      lat: -33.3027435,
      lon: -66.3390367,
      province: 'San Luis',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '09:00 a 14:00',
      holidays: '08:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 138,
      format: 'MARKET',
      name: ' Market Concordia II',
      address: 'Entre Ríos 635',
      lat: -31.3967694,
      lon: -58.0208307,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 13:00 y 16:00 a 20:00',
      sat: '08:00 a 13:00 y 16:00 a 20:00',
      sun: 'Cerrado',
      holidays: '08:00 a 13:00 y 16:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 139,
      format: 'MARKET',
      name: ' Market Olavarría',
      address: 'Rivadavia 2846',
      lat: -36.9008625,
      lon: -60.3266258,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '08:00 a 20:00',
      holidays: '08:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 141,
      format: 'MARKET',
      name: ' Market Formosa',
      address: 'España 198',
      lat: -26.181483,
      lon: -58.1689211,
      province: 'Formosa',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: 'Cerrado',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 143,
      format: 'MARKET',
      name: ' Market Río Gallegos',
      address: 'Av. Dr. Néstor Kirchner 742',
      lat: -51.6227896,
      lon: -69.2151979,
      province: 'Santa Cruz',
      mon_to_fri: '10:00 a 17:00',
      sat: '10:00 a 17:00',
      sun: '10:00 a 17:00',
      holidays: '10:00 a 17:00',
      priority: '10:00 a 11:00',
    },
    {
      id: 144,
      format: 'MARKET',
      name: ' Market La Plata II',
      address: 'Calle 12 1200',
      lat: -34.9230071,
      lon: -57.9521158,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 146,
      format: 'MARKET',
      name: ' Market Trelew II',
      address: '9 de Julio 194',
      lat: -43.2514988,
      lon: -65.3117557,
      province: 'Chubut',
      mon_to_fri: '08:00 a 19:30',
      sat: '08:00 a 19:30',
      sun: '08:00 a 19:30',
      holidays: '08:00 a 19:30',
      priority: '08:00 a 09:00',
    },
    {
      id: 147,
      format: 'MARKET',
      name: ' Market Santa Rosa',
      address: 'Avellaneda 151',
      lat: -36.6113081,
      lon: -64.2948202,
      province: 'La Pampa',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '00:00 a 00:00',
      holidays: '08:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 148,
      format: 'MARKET',
      name: ' Market 9 de Julio',
      address: 'Av. Rivadavia 999',
      lat: -34.6081576,
      lon: -58.3825607,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 150,
      format: 'MARKET',
      name: ' Market Vidt',
      address: 'Santa Fe 3368',
      lat: -34.5875324,
      lon: -58.4150386,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 151,
      format: 'MARKET',
      name: ' Market Uriburu',
      address: 'Av. Rivadavia 2243',
      lat: -34.609517,
      lon: -58.4004916,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 165,
      format: 'MARKET',
      name: ' Market Puerto Madryn II',
      address: '28 de Julio 136',
      lat: -42.766291,
      lon: -65.0375997,
      province: 'Chubut',
      mon_to_fri: '08:00 a 19:30',
      sat: '08:00 a 19:30',
      sun: '08:00 a 19:30',
      holidays: '08:00 a 19:30',
      priority: '08:00 a 09:00',
    },
    {
      id: 167,
      format: 'MARKET',
      name: ' Market Jujuy I',
      address: 'Balcarce 408',
      lat: -24.1865308,
      lon: -65.306869,
      province: 'Jujuy',
      mon_to_fri: '08:00 a 19:00',
      sat: '08:00 a 19:00',
      sun: '08:00 a 19:30',
      holidays: '08:00 a 14:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 168,
      format: 'MARKET',
      name: ' Market Jujuy II',
      address: 'Av. 19 de Abril 779',
      lat: -24.1889151,
      lon: -65.3058897,
      province: 'Jujuy',
      mon_to_fri: '08:00 a 19:00',
      sat: '08:00 a 19:00',
      sun: '08:00 a 14:00',
      holidays: '08:00 a 14:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 176,
      format: 'MARKET',
      name: ' Market Tucumán I',
      address: '24 de Septiembre 653',
      lat: -26.8216806,
      lon: -65.2671656,
      province: 'Tucumán',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 177,
      format: 'MARKET',
      name: ' Market Tucumán II',
      address: 'San Martín 344',
      lat: -26.8216806,
      lon: -65.2646987,
      province: 'Tucumán',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 08:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 181,
      format: 'MARKET',
      name: ' Market Paraná Parque',
      address: 'Santa Fe 606',
      lat: -31.7384011,
      lon: -60.5418481,
      province: 'Entre Ríos',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '09:00 a 13:00',
      holidays: '09:00 a 13:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 182,
      format: 'MARKET',
      name: ' Market Juramento',
      address: 'Juramento 2971',
      lat: -34.5650304,
      lon: -58.4641524,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 184,
      format: 'MARKET',
      name: ' Market Santa Rosa II',
      address: 'Spinetto 1230',
      lat: -36.604309,
      lon: -64.2830516,
      province: 'La Pampa',
      mon_to_fri: '08:00 a 13:00 y 16:00 a 20:00',
      sat: '08:00 a 13:00 y 16:00 a 20:00',
      sun: 'Cerrado',
      holidays: '08:00 a 13:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 187,
      format: 'MARKET',
      name: ' Market Escobar',
      address: 'Gelves 530',
      lat: -34.3441112,
      lon: -58.7919758,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 189,
      format: 'MARKET',
      name: ' Market Avenida Corrientes',
      address: 'Av. Corrientes 1160',
      lat: -34.5990669,
      lon: -58.4319132,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '09:00 a 17:00',
      sat: '09:00 a 17:00',
      sun: '09:00 a 17:00',
      holidays: '09:00 a 17:00',
      priority: '09:00 a 10:00',
    },
    {
      id: 191,
      format: 'MARKET',
      name: ' Market Mar del Plata III',
      address: 'Córdoba 1830',
      lat: -38.0007926,
      lon: -57.5500691,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 195,
      format: 'MARKET',
      name: ' Market Olazábal',
      address: 'Olazábal 4734',
      lat: -34.5744531,
      lon: -58.4842085,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 198,
      format: 'MARKET',
      name: ' Market Núñez',
      address: 'Av. Cabildo 3190',
      lat: -34.5467895,
      lon: -58.4702191,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 201,
      format: 'MARKET',
      name: ' Market Carapachay',
      address: 'Independencia 3067',
      lat: -34.5276254,
      lon: -58.5380011,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 202,
      format: 'MARKET',
      name: ' Market San Isidro La Florida',
      address: 'Av. Juan Segundo Fernández 1235',
      lat: -34.4808106,
      lon: -58.5551657,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 203,
      format: 'MARKET',
      name: ' Market Chilavert',
      address: 'Lacroze 5910',
      lat: -34.5410654,
      lon: -58.5650949,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '09:00 a 21:00',
      sat: '09:00 a 21:00',
      sun: '09:00 a 21:00',
      holidays: '09:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 205,
      format: 'MARKET',
      name: ' Market Palomar',
      address: 'De Los Ceibos 233',
      lat: -34.6034315,
      lon: -58.5947912,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 13:30',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 206,
      format: 'MARKET',
      name: ' Market Barrio Norte',
      address: 'Beruti 2951',
      lat: -34.5946824,
      lon: -58.4020109,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 208,
      format: 'MARKET',
      name: ' Market Campana Centro',
      address: 'Av. Mitre 1085',
      lat: -34.1627335,
      lon: -58.9676484,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '08:00 a 20:00',
      holidays: '08:00 a 20:00',
      priority: '08:00 a 10:00',
    },
    {
      id: 209,
      format: 'MARKET',
      name: ' Market Martínez (Libertador)',
      address: 'Av. del Libertador 13060',
      lat: -34.4902985,
      lon: -58.4871655,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 211,
      format: 'MARKET',
      name: ' Market Martínez (Italia)',
      address: 'Sáenz Valiente 206',
      lat: -34.4873391,
      lon: -58.5081615,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 212,
      format: 'MARKET',
      name: ' Market Malaver - Villa Ballester',
      address: 'América 4006',
      lat: -34.5577336,
      lon: -58.5531537,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:30 a 20:30',
      sat: '07:30 a 20:30',
      sun: '07:30 a 20:30',
      holidays: '07:30 a 20:30',
      priority: '07:30 a 08:30',
    },
    {
      id: 215,
      format: 'MARKET',
      name: ' Market Palermo Canning',
      address: 'Av. Raúl Scalabrini Ortíz 3128',
      lat: -34.6107075,
      lon: -58.5510847,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 216,
      format: 'MARKET',
      name: ' Market Vicente López - Maipú',
      address: 'Av. Maipú 940',
      lat: -34.5294759,
      lon: -58.4832691,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 218,
      format: 'MARKET',
      name: ' Market Hurlingham',
      address: 'Av. Vergara 4121',
      lat: -34.5919387,
      lon: -58.6385966,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 221,
      format: 'MARKET',
      name: ' Market Tigre',
      address: 'Almirante Brown 371',
      lat: -34.4331533,
      lon: -58.5679057,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 226,
      format: 'MARKET',
      name: ' Market Martínez (Edison)',
      address: 'Santa Fe 2349',
      lat: -34.4927127,
      lon: -58.5012297,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 228,
      format: 'MARKET',
      name: ' Market Colegiales (Elcano)',
      address: 'Av. Elcano 3380',
      lat: -34.5755877,
      lon: -58.4618815,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 237,
      format: 'MARKET',
      name: ' Market Villa del Parque',
      address: 'Av. Nazca 2951',
      lat: -34.6021561,
      lon: -58.4913913,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 243,
      format: 'MARKET',
      name: ' Market Paraná (San Juan)',
      address: 'San Juan 609',
      lat: -31.7267364,
      lon: -60.5263402,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 244,
      format: 'MARKET',
      name: ' Market Paraná (Yrigoyen)',
      address: 'Hipólito Yrigoyen 223',
      lat: -31.7378454,
      lon: -60.5268447,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 21:00',
      holidays: '09:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 249,
      format: 'MARKET',
      name: ' Market Paraná (Avenida de las Américas)',
      address: 'Av. de las Américas 1731',
      lat: -31.7484772,
      lon: -60.527133,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 13:00 y 13:00 a 21:00',
      holidays: '08:00 a 14:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 252,
      format: 'MARKET',
      name: ' Market Acassuso',
      address: 'Av. del Libertador 14893',
      lat: -34.4765821,
      lon: -58.4999365,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 253,
      format: 'MARKET',
      name: ' Market Olivos (Maipú)',
      address: 'Av. Maipú 3393',
      lat: -34.5066923,
      lon: -58.4951834,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 254,
      format: 'MARKET',
      name: ' Market San Isidro - D. Carman',
      address: 'Diego Carman 451',
      lat: -34.4953012,
      lon: -58.5477878,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 255,
      format: 'MARKET',
      name: ' Market Pergamino II',
      address: 'Bvard. Rocha 1352',
      lat: -33.9029792,
      lon: -60.5715048,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 256,
      format: 'MARKET',
      name: ' Market San Nicolás II',
      address: 'Av. Moreno 10',
      lat: -33.3359535,
      lon: -60.224658,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 19:00',
      sat: '08:00 a 19:00',
      sun: '08:00 a 19:00',
      holidays: '08:00 a 19:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 258,
      format: 'MARKET',
      name: ' Market Villa Pueyrredón',
      address: 'Av. Mosconi 2861',
      lat: -34.5857767,
      lon: -58.5038847,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 262,
      format: 'MARKET',
      name: ' Market Paraná J M Paz',
      address: 'Gral. José María Paz 1303',
      lat: -31.7384011,
      lon: -60.5418481,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 13:00 y 16:00 a 21:00',
      sat: '08:00 a 13:00 y 16:00 a 21:00',
      sun: '09:00 a 13:00 y 17:00 a 21:00',
      holidays: '09:00 a 13:00 y 17:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 263,
      format: 'MARKET',
      name: ' Market Paraná Rocamora',
      address: 'Santos Domínguez 808',
      lat: -31.7540132,
      lon: -60.5134224,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 264,
      format: 'MARKET',
      name: ' Market Paraná (México)',
      address: 'México 404',
      lat: -31.7253687,
      lon: -60.5358743,
      province: 'Entre Ríos',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 266,
      format: 'MARKET',
      name: ' Market Paraná (Don Bosco)',
      address: 'Av. Don Bosco ',
      lat: -31.7341287,
      lon: -60.5096062,
      province: 'Entre Ríos',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 271,
      format: 'MARKET',
      name: ' Market Belgrano',
      address: 'Av. Monroe 1655',
      lat: -34.5601235,
      lon: -58.4671271,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 272,
      format: 'MARKET',
      name: ' Market San Fernando II',
      address: 'Av. Pdte. Tte. Gral. J. D. Perón 1350',
      lat: -34.4417916,
      lon: -58.5559275,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 277,
      format: 'MARKET',
      name: ' Market Palermo Soler',
      address: 'Av. Raúl Scalabrini Ortíz 1840',
      lat: -34.5893604,
      lon: -58.4250698,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 278,
      format: 'MARKET',
      name: ' Market José L. Suárez',
      address: 'Rosas 1271',
      lat: -34.5175975,
      lon: -58.5714529,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 282,
      format: 'MARKET',
      name: ' Market Mendoza Colón',
      address: 'Av. Colón 324',
      lat: -32.8943385,
      lon: -68.8469883,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 283,
      format: 'MARKET',
      name: ' Market Mendoza Las Heras',
      address: 'Av. Las Heras 306',
      lat: -32.8856675,
      lon: -68.8443889,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: 'Cerrado',
      holidays: 'Cerrado',
      priority: '08:00 a 09:00',
    },
    {
      id: 286,
      format: 'MARKET',
      name: ' Market Mendoza Tupungato',
      address: 'Avenida Belgrano 1170',
      lat: -33.3639746,
      lon: -69.1439485,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 287,
      format: 'MARKET',
      name: ' Market Mendoza Suipacha',
      address: 'Suipacha 556',
      lat: -32.8775916,
      lon: -68.8573957,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: 'Cerrado',
      holidays: 'Cerrado',
      priority: '08:00 a 09:00',
    },
    {
      id: 288,
      format: 'MARKET',
      name: ' Market Mendoza Sexta',
      address: 'Jorge A. Calle 631',
      lat: -32.8687743,
      lon: -68.855028,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: 'Cerrado',
      holidays: 'Cerrado',
      priority: '08:00 a 09:00',
    },
    {
      id: 289,
      format: 'MARKET',
      name: ' Market Mendoza Luján de Cuyo',
      address: 'Azcuénaga 51',
      lat: -33.0367096,
      lon: -68.8806606,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: 'Cerrado',
      holidays: 'Cerrado',
      priority: '08:00 a 09:00',
    },
    {
      id: 290,
      format: 'MARKET',
      name: ' Market Mendoza Bombal',
      address: 'Beltrán 2078',
      lat: -32.9032202,
      lon: -68.8541415,
      province: 'Mendoza',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 20:00',
      holidays: '09:00 a 20:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 295,
      format: 'MARKET',
      name: ' Market Córdoba Granaderos',
      address: 'Bvard. Granaderos 2906',
      lat: -31.3745275,
      lon: -64.2160423,
      province: 'Córdoba',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 296,
      format: 'MARKET',
      name: ' Market Olavarría II',
      address: 'Av. del Valle 4379',
      lat: -36.9080631,
      lon: -60.3162811,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 16:00',
      sat: '08:00 a 16:00',
      sun: '08:00 a 16:00',
      holidays: '08:00 a 16:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 381,
      format: 'MARKET',
      name: ' Market Recoleta II',
      address: 'Av. Córdoba 2529',
      lat: -34.5987232,
      lon: -58.405148,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 385,
      format: 'MARKET',
      name: ' Market San Telmo',
      address: 'Av. Independencia 456',
      lat: -34.6174056,
      lon: -58.3746167,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '09:00 a 21:00',
      sat: '09:00 a 21:00',
      sun: '09:00 a 21:00',
      holidays: '09:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 386,
      format: 'MARKET',
      name: ' Market Monserrat',
      address: 'Av. Belgrano 1160',
      lat: -34.6153726,
      lon: -58.3830272,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 388,
      format: 'MARKET',
      name: ' Market Adrogué',
      address: 'Seguí 849',
      lat: -34.7990038,
      lon: -58.3972624,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '08:00 a 20:00',
      holidays: '08:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 389,
      format: 'MARKET',
      name: ' Market Carranza',
      address: 'Av. Santa Fe 5234',
      lat: -34.5760804,
      lon: -58.4358229,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 390,
      format: 'MARKET',
      name: ' Market Caballito',
      address: 'Av. Rivadavia 5973',
      lat: -34.6236623,
      lon: -58.4491682,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 490,
      format: 'MARKET',
      name: ' Market Recoleta I',
      address: 'Av. Córdoba 1631',
      lat: -34.5992382,
      lon: -58.3928311,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 491,
      format: 'MARKET',
      name: ' Market Barracas',
      address: 'Av. Montes de Oca 970',
      lat: -34.6357243,
      lon: -58.3795749,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '09:00 a 21:00',
      holidays: '09:00 a 21:00',
      priority: '08:09 a 09:09',
    },
    {
      id: 510,
      format: 'MARKET',
      name: ' Market Almagro',
      address: 'Av. Díaz Vélez ',
      lat: -34.6084831,
      lon: -58.4238124,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 511,
      format: 'MARKET',
      name: ' Market Once',
      address: 'Av. Rivadavia 3221',
      lat: -34.6104343,
      lon: -58.4144272,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 512,
      format: 'MARKET',
      name: ' Market Pilar Super',
      address: 'Ramírez 43',
      lat: -34.4546796,
      lon: -58.9120727,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 515,
      format: 'MARKET',
      name: ' Market Devoto',
      address: 'Av. Fco. Beiró 5204',
      lat: -34.6131758,
      lon: -58.5258034,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 516,
      format: 'MARKET',
      name: ' Market San Isidro Super',
      address: 'Cosme Beccar 437',
      lat: -34.4828488,
      lon: -58.5425723,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 21:00',
      sat: '07:00 a 21:00',
      sun: '07:00 a 21:00',
      holidays: '07:00 a 21:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 518,
      format: 'MARKET',
      name: ' Market Olivos',
      address: 'Av. Maipú 2960',
      lat: -34.4827551,
      lon: -58.5688369,
      province: 'Provincia de Buenos Aires',
      mon_to_fri: '07:00 a 20:00',
      sat: '07:00 a 20:00',
      sun: '07:00 a 20:00',
      holidays: '07:00 a 20:00',
      priority: '07:00 a 08:00',
    },
    {
      id: 519,
      format: 'MARKET',
      name: ' Market Conde',
      address: 'Av. Federico Lacroze 3117',
      lat: -34.5771953,
      lon: -58.4841497,
      province: 'Ciudad Autónoma de Buenos Aires',
      mon_to_fri: '08:00 a 21:00',
      sat: '08:00 a 21:00',
      sun: '08:00 a 21:00',
      holidays: '08:00 a 21:00',
      priority: '08:00 a 09:00',
    },
    {
      id: 601,
      format: 'MARKET',
      name: ' Market Yerba Buena',
      address: 'Av. Aconquija 1591',
      lat: -26.812987,
      lon: -65.2945557,
      province: 'Tucumán',
      mon_to_fri: '08:00 a 20:00',
      sat: '08:00 a 20:00',
      sun: '08:00 a 20:00',
      holidays: '08:00 a 20:00',
      priority: '09:00 a 10:00',
    },
  ],
}).render(document.getElementById('wrapper'));
