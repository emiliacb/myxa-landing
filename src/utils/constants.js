import { transform } from "framer-motion";

export const SERVICIOS = [
  {
    id: "instalacion",
    title: "Instalación",
    short_description:
      "Aseguramos que la instalación de nuestros equipos se realice de manera estratégica, promoviendo un acceso fácil para mantenimientos y reparaciones futuras.",
    full_description:
      "Nos encargamos de la instalación completa de tableros de control y equipos de presurización para sistemas contra incendios. Nuestro equipo de expertos se asegura de que cada componente esté correctamente instalado y configurado para un rendimiento óptimo y seguro. La instalación se realiza siguiendo las normativas vigentes y las mejores prácticas del sector, garantizando un sistema confiable y de fácil acceso para futuras intervenciones.",
    image: "/servicios_3.png",
  },
  {
    id: "capacitacion",
    title: "Capacitación",
    short_description:
      "Ofrecemos una capacitación detallada para que su equipo esté plenamente preparado para manejar y mantener el sistema eficientemente desde el día uno.",
    full_description:
      "Brindamos una capacitación exhaustiva al personal encargado de la operación y mantenimiento de los sistemas instalados. El objetivo es que su equipo adquiera los conocimientos necesarios para supervisar el sistema, identificar posibles anomalías y actuar de manera preventiva. La capacitación incluye tanto aspectos teóricos como prácticos, asegurando una comprensión completa del funcionamiento de los equipos.",
    image: "/servicios_1.png",
  },
  {
    id: "puesta-en-marcha",
    title: "Puesta en marcha",
    short_description:
      "Realizamos la puesta en marcha de los equipos para asegurar su correcto funcionamiento y performance.",
    full_description:
      "La puesta en marcha es una fase crucial para garantizar que el sistema contra incendios opere según lo diseñado. Nuestro equipo técnico realiza una serie de pruebas y ajustes para verificar el correcto funcionamiento de todos los componentes, desde los tableros de control hasta los equipos de presurización. Se entrega un informe detallado de la puesta en marcha, certificando que el sistema está listo para proteger sus instalaciones.",
    image: "/servicios_4.png",
  },
  {
    id: "mantenimiento",
    title: "Revisión y mantenimiento",
    short_description:
      "Nuestro servicio de mantenimiento está diseñado para asegurar que su sistema contraincendios esté siempre en condiciones óptimas de funcionamiento.",
    full_description:
      "Ofrecemos planes de mantenimiento preventivo y correctivo para asegurar la longevidad y el rendimiento de su sistema contra incendios. Las revisiones periódicas incluyen la inspección de todos los componentes, la limpieza de equipos, la actualización de software y la reparación de posibles fallas. Un mantenimiento adecuado es clave para garantizar que el sistema responda de manera efectiva en caso de una emergencia.",
    image: "/servicios_2.png",
  },
];

export const TABLERO_FEATURES = [
  {
    id: "proteccion-superior",
    title: "Protección Superior",
    description:
      "Gabinete metálico IP40 en rojo bermellón, diseñado para resistir entornos industriales exigentes y proteger los componentes internos.",
  },
  {
    id: "control-versatil",
    title: "Control",
    description:
      "Llaves selectoras para arranque automático y manual por cada bomba, ofreciendo flexibilidad operativa y control total sobre su sistema.",
  },
  {
    id: "senalizacion",
    title: "Señalización",
    description:
      "Pilotos LED de 220V para indicación de presencia de fases, estado de marcha de bombas y fallas en bomba Jockey, permitiendo una supervisión rápida y eficaz.",
  },
  {
    id: "arranque-optimizado",
    title: "Arranque Optimizado",
    description:
      "Soluciones de arranque directo para bombas de hasta 15HP y arranque estrella-triángulo para potencias superiores, asegurando un funcionamiento eficiente y prolongando la vida útil de sus equipos.",
  },
  {
    id: "conexionado",
    title: "Conexionado",
    description:
      "Borneras para conexión rápida y segura de alimentación al tablero, motores de bombas, presostatos y contacto seco para señal de incendio a distancia.",
  },
  {
    id: "seguridad-electrica-avanzada",
    title: "Protección Eléctrica",
    description:
      "Incorpora llave seccionadora y fusibles tipo NH para bombas de alta potencia, además de llaves termomagnéticas para protección de los circuitos de potencia y comando, garantizando la integridad de su instalación.",
  },
  {
    id: "circuito-de-comando-seguro",
    title: "Circuito de Comando Seguro",
    description:
      "Transformador de 24V para un circuito de comando de baja tensión, minimizando riesgos eléctricos y aumentando la seguridad del personal.",
  },
  {
    id: "planos",
    title: "Planos",
    description:
      "Incluye plano multifilar del cableado y conexionado en formato físico y digital (QR) asegurando una compresión clara del sistema para su instalación y conexionado, mantenimiento y futuras intervenciones.",
  },
];

export const DEFAULT_IMAGE_IDX = 2;

export const DEFAULT_FEATURE = {
  image: DEFAULT_IMAGE_IDX,
  styles: { transform: "scale(1.2) translate(0%,0)" },
};

export const FEATURES_IMAGE_TRANSFORMS = {
  "proteccion-superior": {
    image: 0,
    styles: {
      transform: "translate(0,-5%)",
    },
  },
  "control-versatil": {
    image: 1,
    styles: {
      transform: "scale(1.4) rotate(1deg) translate(0%, -3%)",
    },
  },
  senalizacion: {
    image: 7,
    styles: {
      transform: "scale(1.2)",
    },
  },
  "arranque-optimizado": {
    image: 2,
    styles: {
      transform: "scale(1.8) translate(-21%,2%)",
    },
  },
  conexionado: {
    image: 6,
    styles: {
      transform: "scale(1.6)",
    },
  },
  "seguridad-electrica-avanzada": {
    image: 5,
    styles: {
      transform: "scale(1.1) translateY(-4%)",
    },
  },
  "circuito-de-comando-seguro": {
    image: 4,
    styles: {
      objectFit: "cover",
      transform: "translateY(-5%)",
    },
  },
  planos: {
    image: 8,
    styles: {
      transform: "scale(1.2)",
    },
  },
};

export const TABLEROS_IMAGES = Object.values({
  0: "/tableros_1.png",
  1: "/tableros_4.png",
  2: "/tableros_2.png",
  3: "/tableros_5.png",
  4: "/tableros_6.jpeg",
  5: "/tableros_7.png",
  6: "/tableros_8.jpg",
  7: "/tableros_9.png",
  8: "/tableros_10.png",
});
