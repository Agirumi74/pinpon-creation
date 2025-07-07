# 📋 Pinpon Création — Trace d'import CSV CMS (Airtable/Strapi)

Ce document est la trace complète de la structure de données à importer dans Airtable/Strapi, avec le rôle de chaque table, les relations, et l'ordre d'import conseillé. Utilise-le comme référence pour ne rien oublier et comprendre la logique de chaque CSV.

---

## Ordre d'import conseillé
1. SiteSettings.csv (settings globaux, tokens, SEO, réseaux, contacts, etc.)
2. Navigation.csv (toutes les navigations)
3. SocialLinks.csv (tous les réseaux sociaux)
4. Stats.csv (blocs statistiques dynamiques)
5. CTAButton.csv (boutons d'appel à l'action globaux)
6. HeroSection.csv (contenus dynamiques du hero)
7. BioSection.csv (bloc bio/présentation)
8. AboutSection.csv (bloc "protocole")
9. Values.csv (valeurs, liées à AboutSection)
10. PortfolioSection.csv (bloc portfolio)
11. Projects.csv (projets, liés à PortfolioSection)
12. ProjectGallery.csv (images de galerie, liées à Projects)
13. PartnersSection.csv (bloc partenaires)
14. PartnerLogos.csv (logos partenaires, liés à PartnersSection)
15. ReviewsSection.csv (bloc avis)
16. Reviews.csv (avis, liés à ReviewsSection)
17. ContactSection.csv (bloc contact)
18. ContactChannels.csv (canaux de contact, liés à ContactSection)
19. UIUXAccessibilite.csv (optionnel, labels, tooltips, aria, etc.)

---

## Rôle de chaque table
- **SiteSettings.csv** : Toutes les configs globales, tokens, SEO, réseaux, contacts, dev, host, médiateur, etc.
- **Navigation.csv** : Tous les liens de navigation (header, mobile, footer, sitemap, légales)
- **SocialLinks.csv** : Tous les réseaux sociaux (footer, header, etc.)
- **Stats.csv** : Blocs statistiques dynamiques
- **CTAButton.csv** : Boutons d’appel à l’action globaux
- **HeroSection.csv** : Contenus dynamiques du hero
- **BioSection.csv** : Bloc bio/présentation
- **AboutSection.csv** : Bloc "protocole"
- **Values.csv** : Valeurs, liées à AboutSection (aboutSectionId)
- **PortfolioSection.csv** : Bloc portfolio
- **Projects.csv** : Projets, liés à PortfolioSection (portfolioSectionId)
- **ProjectGallery.csv** : Images de galerie, liées à Projects (projectId)
- **PartnersSection.csv** : Bloc partenaires
- **PartnerLogos.csv** : Logos partenaires, liés à PartnersSection (partnersSectionId)
- **ReviewsSection.csv** : Bloc avis
- **Reviews.csv** : Avis, liés à ReviewsSection (reviewsSectionId)
- **ContactSection.csv** : Bloc contact
- **ContactChannels.csv** : Canaux de contact, liés à ContactSection (contactSectionId)
- **UIUXAccessibilite.csv** : (optionnel) Tous les labels, tooltips, aria, placeholders, messages, etc.

---

## Relations clés
- **Values** → AboutSection (aboutSectionId)
- **Projects** → PortfolioSection (portfolioSectionId)
- **ProjectGallery** → Projects (projectId)
- **PartnerLogos** → PartnersSection (partnersSectionId)
- **Reviews** → ReviewsSection (reviewsSectionId)
- **ContactChannels** → ContactSection (contactSectionId)

---

> Vérifie la checklist dans CHECKUP-DATA.md avant d’importer pour garantir l’exhaustivité.
> Chaque CSV doit être importé dans le dossier `/data` à la racine du projet.
> Les sous-tables sont liées par un champ d’ID (clé étrangère).
> Cette trace sert de référence pour toute évolution future du modèle de données.
