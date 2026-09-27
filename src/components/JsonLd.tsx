import { openingHours, salon, services } from "@/data/salon";

const dayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Strukturirani podaci tipa HairSalon — bolji prikaz na Googleu i Google kartama */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: salon.name,
    description: salon.description,
    url: salon.siteUrl,
    image: `${salon.siteUrl}/opengraph-image`,
    telephone: salon.phone.display,
    email: salon.email,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Gotovina, kartica",
    address: {
      "@type": "PostalAddress",
      streetAddress: salon.address.street,
      postalCode: salon.address.postalCode,
      addressLocality: salon.address.city,
      addressRegion: salon.address.region,
      addressCountry: salon.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: salon.geo.lat, longitude: salon.geo.lng },
    openingHoursSpecification: openingHours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayMap[h.day]}`,
        opens: h.open,
        closes: h.close,
      })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cjenik usluga",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        price: s.price,
        priceCurrency: "EUR",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: `${s.note}, ${s.duration} min`,
        },
      })),
    },
    sameAs: salon.social.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
