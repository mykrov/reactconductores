import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../assets';
// imagenes de planes
import diana from '../assets/imagenes/inicio/diana.png'
import admgold from '../assets/imagenes/inicio/admgold.png'
import admplatinium from '../assets/imagenes/inicio/admplatinium.png'
import apolo from '../assets/imagenes/inicio/apolo.png'

// ----------------------------------------------------------------------

// const LICENSES = ['Standard', 'Standard Plus', 'Extended'];
const LICENSES = ['ADM Start', 'ADM Pymes', 'ADM Enterprise'];
const COMMONS = [
  ["Ideal para Empresas o Personas que solo necesitan Facturar Servicios y/o Productos y requieren llevar Contabilidad",
    "Incluye sin Costo", "Capacitaciones Presenciales", "Facturación Electrónica ilimitada", "Video Tutoriales", "Conexión PowerBI", "Punto de Venta Offline "],

  ["Ideal para Empresas Medianas que requieren Facturación, Contabilidad,Inventarios, etc.",
    "Incluye sin Costo", "Capacitaciones Presenciales", "Facturación Electrónica ilimitada", "ADM GO", "Video Tutoriales", "Conexión PowerBI", "Punto de Venta Offline"],
  
    ["Ideal para Empresas o Personas que comercializan productos, que  requieren Facturación, Contabilidad  e Inventarios",
    "Incluye sin Costo", "Capacitaciones Presenciales", "Facturación Electrónica ilimitada", "ADM GO", "Video Tutoriales", "Conexión PowerBI", "Punto de Venta Offline"],

]
export const _homePlans = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: COMMONS[index],
  // commons: ['One end products', '12 months updates', '6 months of support'],
  options: [],
  icons: [diana, admgold, admplatinium, apolo]
}));

export const _pricingPlans = [
  {
    subscription: 'basic',
    icon: <PlanFreeIcon />,
    price: 0,
    caption: 'forever',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: false },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'current plan',
  },
  {
    subscription: 'starter',
    icon: <PlanStarterIcon />,
    price: 4.99,
    caption: 'saving $24 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: false },
      { text: 'Permissions & workflows', isAvailable: false },
    ],
    labelAction: 'choose starter',
  },
  {
    subscription: 'premium',
    icon: <PlanPremiumIcon />,
    price: 9.99,
    caption: 'saving $124 a year',
    lists: [
      { text: '3 prototypes', isAvailable: true },
      { text: '3 boards', isAvailable: true },
      { text: 'Up to 5 team members', isAvailable: true },
      { text: 'Advanced security', isAvailable: true },
      { text: 'Permissions & workflows', isAvailable: true },
    ],
    labelAction: 'choose premium',
  },
];
