


# Pinpon Création — Documentation technique et fonctionnelle

## Pages du site

- `/` (Accueil) :
  - Utilise le layout principal (`src/layouts/Layout.astro`)
  - Sections incluses (dans l’ordre) :
    - `HeroSection.astro` (props : hero)
    - `BioSection.astro` (props : bio)
    - `AboutSection.astro` (props : about, values)
    - `PortfolioSection.astro` (props : portfolio, projects, galleries)
    - `PartnersSection.astro` (props : partners, partnerLogos)
    - `ReviewsSection.astro` (props : reviewsSection, reviews)
    - `ContactSection.astro` (props : contact, channels)
- `/404` : page d’erreur personnalisée (`src/pages/404.astro`)

## Composants principaux et props

- `Header.astro` (props : navigation, siteSettings)
- `Footer.astro` (props : navigation, siteSettings, socialLinks)
- `BaseHead.astro` (props : title, description, image)
- `Elements/GoogleMaps.astro` (props : url, title)
- `Animations/Cursor.astro`, `Animations/PompierRampe.astro` (pas de props)
- `HeaderLink.astro`, `FormattedDate.astro` (props selon usage)

## Design tokens (src/styles/global.css)

- Couleurs : `--main-bg`, `--main-text`, `--accent-red`, `--accent-glow`, `--accent-yellow`, `--light-bg`, `--dark-bg`, `--light-text`
- Polices : `--font-sans`, `--font-mono`
- Utilisation : toutes modifiables dans le CSS ou via `SiteSettings.csv` pour certaines

## Tables CSV (relations et champs)

- `SiteSettings.csv` : titre, description, logo, couleurs, réseaux, contacts, etc.
- `Navigation.csv` : id, label, anchor, url, order, location, visible, icon, ariaLabel
- `SocialLinks.csv` : id, platform, label, url, icon, order, visible, title
- `HeroSection.csv` : id, subtitle, title, content, ctaLabel, ctaAnchor, background, order, visible
- `BioSection.csv` : id, image, imageAlt, heading, subheading, content1, content2, content3, order, visible
- `AboutSection.csv` : id, heading, subheading, description, order, visible
- `Values.csv` : id, valueNumber, valueTitle, valueDescription, icon, order, aboutSectionId
- `PortfolioSection.csv` : id, heading, subheading, description, order, visible
- `Projects.csv` : id, title, category, cover, coverAlt, description, url, gallery, galleryAlts, order, visible, portfolioSectionId
- `ProjectGallery.csv` : id, projectId, image, alt, order
- `PartnersSection.csv` : id, heading, subheading, description, order, visible
- `PartnerLogos.csv` : id, logo, alt, order, partnersSectionId
- `ReviewsSection.csv` : id, heading, subheading, description, order, visible
- `Reviews.csv` : id, author, avatar, avatarAlt, date, stars, content, order, visible, reviewsSectionId
- `ContactSection.csv` : id, heading, subheading, description, email, phone, order, visible
- `ContactChannels.csv` : id, type, label, value, icon, order, contactSectionId
- `Stats.csv`, `CTAButton.csv` : pour stats et boutons globaux

## Relations

- `Values.csv` lié à `AboutSection.csv` via `aboutSectionId`
- `Projects.csv` lié à `PortfolioSection.csv` via `portfolioSectionId`
- `ProjectGallery.csv` lié à `Projects.csv` via `projectId`
- `PartnerLogos.csv` lié à `PartnersSection.csv` via `partnersSectionId`
- `Reviews.csv` lié à `ReviewsSection.csv` via `reviewsSectionId`
- `ContactChannels.csv` lié à `ContactSection.csv` via `contactSectionId`

## package.json — scripts & features

- Scripts :
  - `dev` : lance le serveur local
  - `build` : build de production
  - `preview` : prévisualisation du build
  - `astro` : accès CLI Astro
- Dépendances principales :
  - `astro`, `astro-font`, `astro-icon`, `@ascorbic/airtable-loader`, `@iconify-json/openmoji`
- Pas de framework front lourd, tout est natif ou Astro

---

Pour le détail d’un composant, d’une table ou d’une relation, voir le code source ou demander une explication ciblée.
