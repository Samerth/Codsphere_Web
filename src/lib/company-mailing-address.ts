/**
 * Public CodSphere business mailing address (Phantom Digital Mail virtual mailbox).
 * Mailing only — not a storefront or a place to visit. Do not add a geo pin
 * or wording that implies a walk-in office.
 */
export const COMPANY_MAILING_NAME = "CodSphere (Samerth Pathak)";

export const COMPANY_MAILING_ADDRESS = {
  streetAddress: "329 Howe St, Unit #575",
  addressLocality: "Vancouver",
  addressRegion: "BC",
  postalCode: "V6C 3N2",
  addressCountry: "CA",
  addressCountryName: "Canada",
} as const;

/** schema.org PostalAddress for Organization JSON-LD. */
export const companyMailingPostalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: COMPANY_MAILING_ADDRESS.streetAddress,
  addressLocality: COMPANY_MAILING_ADDRESS.addressLocality,
  addressRegion: COMPANY_MAILING_ADDRESS.addressRegion,
  postalCode: COMPANY_MAILING_ADDRESS.postalCode,
  addressCountry: COMPANY_MAILING_ADDRESS.addressCountry,
};

/** Display form of the postal code, with a non-breaking space so "V6C 3N2" stays together. */
export const companyMailingPostalDisplay = COMPANY_MAILING_ADDRESS.postalCode.replace(" ", " ");

export const companyMailingCityLine = `${COMPANY_MAILING_ADDRESS.addressLocality}, ${COMPANY_MAILING_ADDRESS.addressRegion} ${companyMailingPostalDisplay}`;

/** Display lines for footers and contact blocks. */
export const companyMailingAddressLines = [
  COMPANY_MAILING_NAME,
  COMPANY_MAILING_ADDRESS.streetAddress,
  companyMailingCityLine,
  COMPANY_MAILING_ADDRESS.addressCountryName,
] as const;
