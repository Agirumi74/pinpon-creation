// src/content/config.ts
import { defineCollection } from "astro:content";
import { airtableLoader } from "@ascorbic/airtable-loader";


const HeroSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "HeroSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const AboutSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "AboutSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const ContactChannels = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "ContactChannels",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const ContactSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "ContactSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const CTAButton = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "CTAButton",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const BioSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "BioSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const Navigation = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "Navigation",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const PartnerLogos = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "PartnerLogos",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const PartnersSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "PartnersSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const PortfolioSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "PortfolioSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const ProjectGallery = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "ProjectGallery",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const Projects = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "Projects",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const Reviews = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "Reviews",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const ReviewsSection = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "ReviewsSection",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const SiteSettings = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "SiteSettings",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const SocialLinks = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "SocialLinks",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

const Values = defineCollection({
  loader: airtableLoader({
    base: import.meta.env.AIRTABLE_BASE,
    table: "Values",
    token: import.meta.env.AIRTABLE_TOKEN,
  }),
});

export const collections = {
  HeroSection,
  AboutSection,
  ContactChannels,
  ContactSection,
  CTAButton,
  BioSection,
  Navigation,
  PartnerLogos,
  PartnersSection,
  PortfolioSection,
  ProjectGallery,
  Projects,
  Reviews,
  ReviewsSection,
  SiteSettings,
  SocialLinks,
  Values,
};