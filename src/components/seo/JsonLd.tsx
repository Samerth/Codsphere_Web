const BASE = "https://www.codsphere.com";
export const ORG_ID = `${BASE}/#organization`;

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** crumbs: [["Solutions", "/solutions"], ["Order Flow", "/solutions/order-flow"]] — Home is prepended. */
export function breadcrumbJsonLd(crumbs: [string, string][]) {
  const all: [string, string][] = [["Home", "/"], ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: path === "/" ? BASE : `${BASE}${path}`,
    })),
  };
}

export function serviceJsonLd(name: string, path: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE}${path}`,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "Canada" },
  };
}
