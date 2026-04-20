import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://totuldespreanxietate.ro";

  return [
    // ── Homepage ──
    {
      url: base,
      lastModified: "2026-04-10",
      changeFrequency: "weekly",
      priority: 1,
    },

    // ── Atac de panică (hub principal) ──
    {
      url: `${base}/atac-de-panica`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/atac-de-panica/recunoaste`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/atac-de-panica/intelege`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/atac-de-panica/actioneaza`,
      lastModified: "2026-04-10",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Tipuri de anxietate ──
    {
      url: `${base}/tipuri`,
      lastModified: "2026-04-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/tipuri/anxietate-sociala`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/tipuri/anxietate-generalizata`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/tipuri/tspt`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/tipuri/toc`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Fobii specifice ──
    {
      url: `${base}/tipuri/fobii-specifice`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/tipuri/fobii-specifice/fobie-de-sange`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/fobii-specifice/claustrofobie`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/fobii-specifice/fobie-de-animale`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/fobii-specifice/fobie-de-zbor`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/fobii-specifice/fobie-de-inaltime`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Atac de panică (sub tipuri/) ──
    {
      url: `${base}/tipuri/atac-de-panica`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/tipuri/atac-de-panica/simptome`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/atac-de-panica/sau-infarct`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/atac-de-panica/ce-sa-faci`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/atac-de-panica/ce-vrea-sa-spuna-psihicul`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/atac-de-panica/de-ce-se-intampla`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/tipuri/atac-de-panica/tratament`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // ── Pagini utilitare ──
    {
      url: `${base}/despre-daniel`,
      lastModified: "2026-04-13",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/programare`,
      lastModified: "2026-03-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/termeni-si-conditii`,
      lastModified: "2026-03-10",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/politica-de-confidentialitate`,
      lastModified: "2026-04-13",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
