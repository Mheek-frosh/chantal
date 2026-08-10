import { CONTACT, SITE_URL } from "@/lib/constants";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "ShapeHaus", url: SITE_URL, email: CONTACT.email },
      { "@type": "HealthAndBeautyBusiness", "@id": `${SITE_URL}/#business`, name: "ShapeHaus", url: SITE_URL, email: CONTACT.email, telephone: CONTACT.phone, address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" }, parentOrganization: { "@id": `${SITE_URL}/#organization` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
