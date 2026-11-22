/**
 * CodCRM public embed IDs used by the marketing site.
 *
 * Org slug `codsphere` is verified live (form HTML served at
 * https://www.codcrm.com/f/codsphere/show-us-your-order-flow on 2026-11-21).
 * Forms that are not yet created are still named here so the site can point at
 * them; do not invent IDs at call sites. Create the missing records in CodCRM
 * (do not write to the CRM database from this repo).
 */

export const CODCRM_ORIGIN = "https://www.codcrm.com";
export const CODCRM_ORG_SLUG = "codsphere";

export type CodCrmEmbedKind = "form" | "booking";

/** Verified live, 2026-11-21. Fields: first name, last name, email, company, phone, "What's painful in your order flow?" */
export const CODCRM_FORM_ORDER_FLOW = "show-us-your-order-flow";

/**
 * MUST CREATE in CodCRM before the footer signup works:
 * - Name: Website newsletter
 * - Slug: website-newsletter
 * - Fields: Email (required); First name optional
 * - Active, public form for org `codsphere`
 * Embeds pass utm_source=newsletter. CodCRM's form JS maps utm_source onto
 * contact.source for new contacts.
 */
export const CODCRM_FORM_NEWSLETTER = "website-newsletter";

/**
 * Contact / apparel fallback form. Reuses the live order-flow form.
 * Still needed in CodCRM: add a Trade field, and optionally retitle the pain
 * field to "One line on the stuck order."
 */
export const CODCRM_FORM_CONTACT_FALLBACK = CODCRM_FORM_ORDER_FLOW;

/**
 * MUST CREATE in CodCRM before the /contact and apparel booking embeds work:
 * - Title: Book a 30-minute call (or Free 30-minute order-flow map)
 * - Slug: 30-minute-order-flow-map
 * - Duration: 30 minutes
 * - Active public booking page for org `codsphere`
 * - Public URL: https://www.codcrm.com/book/codsphere/30-minute-order-flow-map
 *
 * Public /book-data/codsphere/<slug> returned 404 for common slugs on 2026-11-21.
 * A read-only Neon DSN was available but Postgres to Neon timed out from this
 * environment, so an unexpected slug could not be ruled out from the database.
 *
 * Booking pages currently do not post iframe height (codcrmFormHeight) and do
 * not persist UTMs or an `industry` query param on submit.
 */
export const CODCRM_BOOKING_ORDER_FLOW_MAP = "30-minute-order-flow-map";

export function codcrmEmbedPath(kind: CodCrmEmbedKind, slug: string): string {
  const prefix = kind === "booking" ? "book" : "f";
  return `${CODCRM_ORIGIN}/${prefix}/${CODCRM_ORG_SLUG}/${slug}`;
}

/** Slugs this site is allowed to probe via /api/codcrm-embed-status. */
export const CODCRM_KNOWN_SLUGS: Record<CodCrmEmbedKind, readonly string[]> = {
  form: [CODCRM_FORM_ORDER_FLOW, CODCRM_FORM_NEWSLETTER],
  booking: [CODCRM_BOOKING_ORDER_FLOW_MAP],
};

export function isKnownCodCrmSlug(kind: CodCrmEmbedKind, slug: string): boolean {
  return (CODCRM_KNOWN_SLUGS[kind] ?? []).includes(slug);
}

/** Public URL used to check whether an embed target exists (no CORS from the browser). */
export function codcrmStatusCheckUrl(kind: CodCrmEmbedKind, slug: string): string {
  if (kind === "booking") {
    return `${CODCRM_ORIGIN}/book-data/${CODCRM_ORG_SLUG}/${slug}`;
  }
  return `${codcrmEmbedPath("form", slug)}?embed=1`;
}
