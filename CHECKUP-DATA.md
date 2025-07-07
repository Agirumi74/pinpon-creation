# CHECKUP DATA STRUCTURE (Pinpon Création)

Ce fichier sert de checklist exhaustive pour recenser, organiser et valider tous les champs, props, contenus, médias, tokens, settings, collections, sous-collections, etc. nécessaires à la gestion 100% CMS de ton site Astro.

Coche/complète/ajoute au fur et à mesure pour ne rien oublier avant de générer les CSV ou d'organiser Airtable/Strapi.

---

## 1. GLOBAL / SITE SETTINGS
- [ ] siteTitle
- [ ] siteDescription
- [ ] logoUrl
- [ ] logoAlt
- [ ] faviconUrl
- [ ] faviconAlt
- [ ] themeColor
- [ ] author
- [ ] address
- [ ] email
- [ ] phone
- [ ] googleMaps
- [ ] imageMaps
- [ ] footerText
- [ ] devName
- [ ] devUrl
- [ ] devEmail
- [ ] hostName
- [ ] hostAddress
- [ ] hostUrl
- [ ] hostContact
- [ ] mediateurName
- [ ] mediateurAddress
- [ ] mediateurUrl
- [ ] mediateurContact
- [ ] robots
- [ ] lang
- [ ] ogImage
- [ ] canonicalUrl
- [ ] facebookUrl
- [ ] instagramUrl
- [ ] linkedinUrl
- [ ] primaryColor
- [ ] secondaryColor
- [ ] backgroundColor
- [ ] fontSans
- [ ] fontMono
- [ ] autres tokens design (ajouter si besoin)

## 2. NAVIGATION (Header, Footer, Sitemap)
- [ ] id
- [ ] label
- [ ] anchor
- [ ] url
- [ ] order
- [ ] location (header/footer/sitemap)
- [ ] visible
- [ ] icon (si besoin)

## 3. SOCIAL LINKS
- [ ] id
- [ ] platform
- [ ] label
- [ ] url
- [ ] icon
- [ ] order
- [ ] visible

## 4. STATS
- [ ] id
- [ ] icon
- [ ] number
- [ ] desc
- [ ] order
- [ ] visible

## 5. CTA BUTTON
- [ ] id
- [ ] label
- [ ] url
- [ ] style
- [ ] icon
- [ ] visible

## 6. HERO SECTION
- [ ] id
- [ ] subtitle
- [ ] title
- [ ] content
- [ ] ctaLabel
- [ ] ctaAnchor
- [ ] background
- [ ] order
- [ ] visible

## 7. BIO SECTION
- [ ] id
- [ ] image
- [ ] imageAlt
- [ ] heading
- [ ] subheading
- [ ] content1
- [ ] content2
- [ ] content3
- [ ] order
- [ ] visible

## 8. ABOUT SECTION
- [ ] id
- [ ] heading
- [ ] subheading
- [ ] description
- [ ] order
- [ ] visible

### 8.1 VALUES (sous-table About)
- [ ] id
- [ ] valueNumber
- [ ] valueTitle
- [ ] valueDescription
- [ ] icon
- [ ] order
- [ ] aboutSectionId

## 9. PORTFOLIO SECTION
- [ ] id
- [ ] heading
- [ ] subheading
- [ ] description
- [ ] order
- [ ] visible

### 9.1 PROJECTS (sous-table Portfolio)
- [ ] id
- [ ] title
- [ ] category
- [ ] cover
- [ ] coverAlt
- [ ] description
- [ ] url
- [ ] gallery (liste d'urls)
- [ ] galleryAlts (liste d'alts)
- [ ] order
- [ ] visible
- [ ] portfolioSectionId

## 10. PARTNERS SECTION
- [ ] id
- [ ] heading
- [ ] subheading
- [ ] description
- [ ] order
- [ ] visible

### 10.1 PARTNER LOGOS (sous-table Partners)
- [ ] id
- [ ] logo
- [ ] alt
- [ ] order
- [ ] partnersSectionId

## 11. REVIEWS SECTION
- [ ] id
- [ ] heading
- [ ] subheading
- [ ] description
- [ ] order
- [ ] visible

### 11.1 REVIEWS (sous-table Reviews)
- [ ] id
- [ ] author
- [ ] avatar
- [ ] avatarAlt
- [ ] date
- [ ] stars
- [ ] content
- [ ] order
- [ ] visible
- [ ] reviewsSectionId

## 12. CONTACT SECTION
- [ ] id
- [ ] heading
- [ ] subheading
- [ ] description
- [ ] email
- [ ] phone
- [ ] order
- [ ] visible

### 12.1 CONTACT CHANNELS (sous-table Contact)
- [ ] id
- [ ] type (email/tel/autre)
- [ ] label
- [ ] value
- [ ] icon
- [ ] order
- [ ] contactSectionId

---


## 13. DESIGN TOKENS (global.css)
- [ ] main-bg
- [ ] main-text
- [ ] accent-red
- [ ] accent-glow
- [ ] accent-yellow
- [ ] light-bg
- [ ] dark-bg
- [ ] light-text
- [ ] font-sans
- [ ] font-mono
- [ ] autres tokens (breakpoints, radius, z-index, etc.)

## 14. NAVIGATION (Header/Footer/Sitemap)
- [ ] navDesktopLinks (array, label, anchor, order, visible, icon, aria-label)
- [ ] navMobileLinks (idem)
- [ ] navFooterLinks (idem)
- [ ] navLegalLinks (Mentions légales, CGV, etc.)
- [ ] navSitemapLinks (Plan du site)

## 15. SOCIALS
- [ ] socialName
- [ ] socialUrl
- [ ] socialIcon
- [ ] socialTitle (pour title/tooltip)
- [ ] socialOrder

## 16. HEADER/FOOTER
- [ ] headerLogoUrl
- [ ] headerLogoAlt
- [ ] headerTitle
- [ ] headerSubtitle
- [ ] headerButtonLabel
- [ ] headerButtonIcon
- [ ] headerButtonAria
- [ ] footerLogoUrl
- [ ] footerLogoAlt
- [ ] footerText
- [ ] footerCredits
- [ ] footerSitemapTitle
- [ ] footerLegalTitle
- [ ] footerLegalLinks (array)
- [ ] footerSocials (array)
- [ ] copyright

## 17. SEO & META (Layout/const.ts)
- [ ] metaTitle
- [ ] metaDescription
- [ ] metaKeywords
- [ ] metaAuthor
- [ ] metaOgImage
- [ ] metaCanonical
- [ ] metaRobots
- [ ] metaLang
- [ ] metaPrefetchUrls
- [ ] metaCssFiles
- [ ] metaJsFiles
- [ ] faviconIco
- [ ] favicon32
- [ ] favicon16
- [ ] appleTouchIcon
- [ ] manifest

## 18. UI/UX TEXTES & ACCESSIBILITÉ
- [ ] all alt for images/icons/svg
- [ ] all aria-label, aria-modal, role, etc.
- [ ] all tooltips/title
- [ ] all placeholder/form labels
- [ ] all modal labels/buttons (ex: modal-close-button, modal-title, modal-description, modal-link)
- [ ] all overlay/success/error messages

## 19. PROJECTS/GALLERIES
- [ ] projectGallery (array d’images)
- [ ] projectGalleryAlts (array d’alts)
- [ ] modalImageAlt
- [ ] modalCategory
- [ ] modalTitle
- [ ] modalDescription
- [ ] modalLinkLabel
- [ ] modalCloseAria

## 20. FORMULAIRE CONTACT
- [ ] formNameLabel
- [ ] formNamePlaceholder
- [ ] formEmailLabel
- [ ] formEmailPlaceholder
- [ ] formSubjectLabel
- [ ] formSubjectPlaceholder
- [ ] formMessageLabel
- [ ] formMessagePlaceholder
- [ ] formSubmitLabel
- [ ] formSuccessMessage
- [ ] formErrorMessage

## 21. AUTRES BLOCS/PROPS UI/ANIMATION
- [ ] Toutes les props de chaque composant/section (même statiques)
- [ ] Tous les assets SVG/images décoratives (et leur alt)
- [ ] Tous les textes d’animation (ex: firefighter, etc.)

---

> Complète, coche, ajoute, modifie ce fichier au fur et à mesure de l’audit. Quand tout est validé, on pourra générer les CSV/tableaux Airtable/Strapi sans rien oublier.

---

> Complète, coche, ajoute, modifie ce fichier au fur et à mesure de l’audit. Quand tout est validé, on pourra générer les CSV/tableaux Airtable/Strapi sans rien oublier.
