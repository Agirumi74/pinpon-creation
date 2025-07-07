# 📋 Pinpon Création — Structure CSV CMS (Airtable/Strapi)

Ce README liste, sans redondance ni oubli, tous les CSV à générer pour une gestion 100% CMS de ton site Astro. Chaque table correspond à une entité ou sous-collection réelle, avec tous les champs nécessaires (y compris alt, tokens, props, etc.).

---

## 1. SiteSettings.csv
Contient tous les paramètres globaux, tokens, SEO, réseaux, contacts, dev, host, médiateur, etc.

| id | siteTitle | siteDescription | logoUrl | logoAlt | faviconUrl | faviconAlt | themeColor | author | address | email | phone | googleMaps | imageMaps | footerText | devName | devUrl | devEmail | hostName | hostAddress | hostUrl | hostContact | mediateurName | mediateurAddress | mediateurUrl | mediateurContact | robots | lang | ogImage | canonicalUrl | facebookUrl | instagramUrl | linkedinUrl | primaryColor | secondaryColor | backgroundColor | fontSans | fontMono | autresTokens... |
|----|-----------|-----------------|---------|---------|------------|------------|------------|--------|---------|-------|-------|------------|-----------|------------|---------|--------|----------|----------|-------------|--------|-------------|---------------|------------------|--------------|------------------|--------|------|---------|--------------|-------------|--------------|------------|-------------|---------------|----------------|----------|----------|-----------------|

---

## 2. Navigation.csv
Toutes les navigations (header, mobile, footer, sitemap, légales).

| id | label | anchor | url | order | location | visible | icon | ariaLabel |

---

## 3. SocialLinks.csv
Tous les réseaux sociaux (footer, header, etc.).

| id | platform | label | url | icon | order | visible | title |

---

## 4. Stats.csv
Blocs statistiques dynamiques.

| id | icon | number | desc | order | visible |

---

## 5. CTAButton.csv
Boutons d’appel à l’action globaux.

| id | label | url | style | icon | visible |

---

## 6. HeroSection.csv
Contenus dynamiques du hero.

| id | subtitle | title | content | ctaLabel | ctaAnchor | background | order | visible |

---

## 7. BioSection.csv
Bloc bio/présentation.

| id | image | imageAlt | heading | subheading | content1 | content2 | content3 | order | visible |

---

## 8. AboutSection.csv
Bloc "protocole" + sous-table valeurs.

| id | heading | subheading | description | order | visible |

### 8.1 Values.csv (liée à AboutSection)
| id | valueNumber | valueTitle | valueDescription | icon | order | aboutSectionId |

---

## 9. PortfolioSection.csv
Bloc portfolio + sous-table projets.

| id | heading | subheading | description | order | visible |

### 9.1 Projects.csv (liée à PortfolioSection)
| id | title | category | cover | coverAlt | description | url | gallery | galleryAlts | order | visible | portfolioSectionId |

---

## 10. PartnersSection.csv
Bloc partenaires + sous-table logos.

| id | heading | subheading | description | order | visible |

### 10.1 PartnerLogos.csv (liée à PartnersSection)
| id | logo | alt | order | partnersSectionId |

---

## 11. ReviewsSection.csv
Bloc avis + sous-table reviews.

| id | heading | subheading | description | order | visible |

### 11.1 Reviews.csv (liée à ReviewsSection)
| id | author | avatar | avatarAlt | date | stars | content | order | visible | reviewsSectionId |

---

## 12. ContactSection.csv
Bloc contact + sous-table canaux.

| id | heading | subheading | description | email | phone | order | visible |

### 12.1 ContactChannels.csv (liée à ContactSection)
| id | type | label | value | icon | order | contactSectionId |

---

## 13. UI/UX/Accessibilité.csv (optionnel, pour centraliser tous les labels, tooltips, aria, placeholders, messages, etc.)

| id | context | type | value | lang | section | order |

---

> Chaque CSV doit être généré à partir de la checklist validée dans CHECKUP-DATA.md. 
> Les sous-tables (values, projects, partnerLogos, reviews, contactChannels) sont liées à leur section par un champ d’ID.
> Complète/valide la checklist avant de générer les CSV pour garantir l’exhaustivité et l’absence de redondance.
