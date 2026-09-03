import { SERVICIOS, TABLERO_FEATURES } from "./constants";

export const SITE_URL = "https://www.myxa.com.ar";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function getOrganization() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": ORGANIZATION_ID,
    name: "MYXA",
    url: `${SITE_URL}/`,
    email: "info@myxa.com.ar",
    telephone: "+54-9-11-5815-1959",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Dr. Enrique Finochietto 5345",
      addressLocality: "José C. Paz",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
    sameAs: ["https://linkedin.com/company/myxa-incendio"],
  };
}

export function getWebsite() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: "MYXA",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "es-AR",
  };
}

export function buildBreadcrumbList(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: `${SITE_URL}${path}`,
    })),
  };
}

export function getTablerosProduct() {
  return {
    "@type": "Product",
    name: "Tablero de comando para bombas contra incendio",
    description:
      "Tablero de comando para bombas principales y jockey de sistemas contra incendio, con diseño basado en los lineamientos de NFPA 20 e IRAM 3597.",
    brand: { "@id": ORGANIZATION_ID },
    manufacturer: { "@id": ORGANIZATION_ID },
    additionalProperty: TABLERO_FEATURES.map((feature) => ({
      "@type": "PropertyValue",
      name: feature.title,
      value: feature.description,
    })),
  };
}

export function getServiciosServices() {
  return SERVICIOS.map((servicio) => ({
    "@type": "Service",
    "@id": `${SITE_URL}/servicios#${servicio.id}`,
    name: servicio.title,
    description: servicio.full_description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "AR",
  }));
}

export function getPresurizacionService() {
  return {
    "@type": "Service",
    "@id": `${SITE_URL}/presurizacion#servicio`,
    name: "Diagnóstico y reparación de equipos de presurización contra incendio",
    description:
      "Diagnóstico y reparación de equipos de presurización contra incendio: colectores, cañerías, válvulas y bombas.",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: "AR",
  };
}

export function buildGraph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
