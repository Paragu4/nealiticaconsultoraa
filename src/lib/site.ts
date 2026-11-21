import {
  BarChart3,
  Compass,
  GraduationCap,
  Megaphone,
  Palette,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// Datos de contacto: reemplazar por los reales cuando estén confirmados.
export const SITE = {
  name: "Nealítica Consultora",
  shortName: "Nealítica",
  tagline: "Comunicación pública basada en datos",
  whatsapp: "543761234567",
  whatsappDisplay: "+54 376 412-3456",
  email: "contacto@nealitica.com.ar",
  city: "Posadas, Misiones · Argentina",
} as const;

export function whatsappUrl(message?: string, phone: string = SITE.whatsapp): string {
  const digits = phone.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export interface ContactForm {
  nombre: string;
  organizacion?: string;
  servicio?: string;
  mensaje: string;
}

export function buildContactMessage(form: ContactForm): string {
  const lines = [`Hola Nealítica, soy ${form.nombre.trim()}.`];
  if (form.organizacion?.trim()) lines.push(`Organización: ${form.organizacion.trim()}`);
  if (form.servicio?.trim()) lines.push(`Me interesa: ${form.servicio.trim()}`);
  lines.push("", form.mensaje.trim());
  return lines.join("\n");
}

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  intro: string;
  listTitle: string;
  items: string[];
}

export const SERVICES: Service[] = [
  {
    id: "formacion",
    title: "Formación de equipos",
    icon: GraduationCap,
    summary: "Capacitación de equipos de gobierno en comunicación, políticas públicas y manejo de medios.",
    intro:
      "La capacitación y jerarquización de los equipos de la función pública permite cumplir mejor los objetivos de gestión. Cada programa se arma a medida, con profesionales de distintas áreas de gestión y comunicación.",
    listTitle: "Capacitaciones disponibles",
    items: [
      "Comunicación gubernamental en municipios",
      "Comunicación gubernamental y relación con la prensa",
      "Comunicación gubernamental digital",
      "Comunicación con perspectiva de género",
      "Comunicación de riesgo de desastre",
      "Comunicación de crisis",
      "Formación de voceros gubernamentales",
      "Taller de políticas públicas y diseño de proyectos",
    ],
  },
  {
    id: "investigacion",
    title: "Investigación y opinión pública",
    icon: BarChart3,
    summary: "Diagnóstico del desempeño de la gestión en la opinión pública, encuestas y análisis de impacto.",
    intro:
      "Medimos lo que la ciudadanía piensa y necesita para que cada decisión se tome con evidencia. Diseñamos, relevamos y procesamos la información con rigor estadístico.",
    listTitle: "Áreas de análisis",
    items: [
      "Encuestas de percepción ciudadana",
      "Censos y relevamientos territoriales",
      "Estudios de impacto comunicacional",
      "Evaluación de políticas públicas",
      "Modelos predictivos y proyecciones",
      "Tableros de datos para la gestión",
    ],
  },
  {
    id: "estrategia",
    title: "Planificación estratégica",
    icon: Compass,
    summary: "Norte estratégico, construcción del mensaje y manual de comunicación gubernamental.",
    intro:
      "Definimos qué quiere decir la gestión, a quién y con qué tono. Ordenamos la comunicación de todas las áreas detrás de un mismo rumbo.",
    listTitle: "Qué incluye",
    items: [
      "Diagnóstico de la comunicación actual",
      "Definición del norte estratégico",
      "Construcción del mensaje y ejes de gestión",
      "Manual de comunicación gubernamental",
      "Protocolos de comunicación de crisis",
    ],
  },
  {
    id: "digital",
    title: "Comunicación digital",
    icon: Megaphone,
    summary: "Gestión del ecosistema digital, datos, informes de avance, pauta y campañas.",
    intro:
      "Administramos los canales digitales de la gestión con objetivos claros y medición constante, para llegar a cada vecino con el mensaje correcto.",
    listTitle: "Servicios digitales",
    items: [
      "Gestión de redes sociales",
      "Análisis de datos y audiencias",
      "Informes de avance periódicos",
      "Pauta digital y campañas segmentadas",
    ],
  },
  {
    id: "diseno",
    title: "Diseño y creatividad",
    icon: Palette,
    summary: "Identidad visual de la gestión y piezas gráficas para campañas.",
    intro:
      "Traducimos la estrategia en una identidad visual coherente y en piezas que se reconocen, se entienden y se recuerdan.",
    listTitle: "Qué hacemos",
    items: [
      "Identidad visual de gestión",
      "Piezas para redes y vía pública",
      "Material institucional e informes",
      "Campañas integrales",
    ],
  },
  {
    id: "proyectos",
    title: "Gestión de proyectos",
    icon: Workflow,
    summary: "Planificación, seguimiento y evaluación de iniciativas y campañas públicas.",
    intro:
      "Acompañamos cada iniciativa de punta a punta: objetivos, cronograma, responsables e indicadores para saber qué funcionó.",
    listTitle: "Qué incluye",
    items: [
      "Planificación y cronograma",
      "Seguimiento y tablero de indicadores",
      "Coordinación entre áreas",
      "Evaluación final y aprendizajes",
    ],
  },
];

export const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/clientes", label: "Clientes" },
  { to: "/contacto", label: "Contacto" },
] as const;
