# Backlog stratégique — Clinique ESSAADA

> Capturé 2026-04-20 — discussion sur comment améliorer drastiquement le site.
> À traiter APRÈS la phase de refonte lisibilité / design en cours.

## P0 — Bloqueurs de production (à régler avant mise en ligne)

Dans `lib/site.ts` — actuellement placeholders, site non-convertible en l'état :

- [ ] Téléphone réel (remplacer `+213 00 00 00 00 00`)
- [ ] Numéro d'urgence 24/7 réel
- [ ] WhatsApp réel (remplacer `213000000000`)
- [ ] Adresse complète
- [ ] Numéro d'agrément DSP Sidi Bel Abbès
- [ ] Numéro RC
- [ ] NIF
- [ ] Directeur de publication
- [ ] Mentions légales + politique de confidentialité rédigées

## P1 — Leviers haut impact (par ordre de ROI estimé)

### 1. Preuve sociale terrain (trust #1 en médical)
- [ ] Shooting photo pro : équipe (portraits), 37 lits, salle traitement eau, générateurs, accueil, salle attente
- [ ] Remplacer tous les placeholders / stock photos
- [ ] 20+ avis Google Business Profile (campagne demande aux patients résidents)
- [ ] Page "Nos résultats qualité" : KT/V moyen, taux complications, disponibilité médecin, si transparent

### 2. Google Business Profile
- [ ] Création / optimisation fiche GBP
- [ ] Photos, horaires, services, posts réguliers
- [ ] Lien direct WhatsApp depuis fiche
- [ ] Réponses avis systématiques

### 3. Version arabe (ar-DZ)
- [ ] Architecture i18n (Next.js App Router — `/ar` + middleware)
- [ ] Traduction pro de tout le contenu
- [ ] RTL layout (tailwind rtl plugin)
- [ ] Dir switcher visible

### 4. Diaspora France / CPAM (niche haute valeur)
- [ ] Approfondir `/patients-de-passage/depuis-la-france`
  - Procédure E112 détaillée
  - Convention franco-algérienne de sécurité sociale
  - Check-list documents avant départ
  - Coordonnées CPAM référence
- [ ] Étendre à autres pays diaspora (Canada, Belgique, Espagne)

### 5. SEO technique + E-E-A-T médical
- [ ] Schema.org : `MedicalClinic` + `MedicalBusiness` + `MedicalProcedure` (hémodialyse)
- [ ] Schema `Physician` par néphrologue (avec credentials)
- [ ] FAQ Schema sur page FAQ
- [ ] Sitemap + hreflang (quand bilingue)
- [ ] Protocole hygiène téléchargeable (PDF signé par direction médicale)

## P2 — Second tour

### Contenu éditorial profond
- [ ] 5-8 guides longs (dialyse & voyage, nutrition rénale, ramadan, première séance, aide CPAM/CNAS, préparation psychologique, entourage)
- [ ] Glossaire enrichi (croisements entre termes)
- [ ] Vidéos courtes : visite centre, témoignages, démo matériel

### Conversion
- [ ] CTA flottant WhatsApp avec message pré-rempli par contexte de page
- [ ] Formulaire RDV 3 champs max (nom, tel, motif)
- [ ] Callback request : "On vous rappelle sous 2h"
- [ ] Form médecin prescripteur (dossier patient B2B)

### Performance / mobile
- [ ] Audit Lighthouse complet (perf, a11y, SEO, PWA)
- [ ] Images : next/image partout + AVIF + blur placeholders
- [ ] Préchargement fonts critiques
- [ ] Test réel 3G + vieil Android (public cible)

## P3 — Stretch

- [ ] Portail patient simple (résultats bio, prochains RDV)
- [ ] Newsletter trimestrielle (éducation thérapeutique)
- [ ] Partenariats hôteliers pour patients de passage
- [ ] Chatbot FAQ multilingue

---

**Note** : tout levier "trust" (photos réelles, avis, agréments, mentions légales) prime sur les levers "contenu" ou "features". Un site médical sans trust signals = 0 conversion, peu importe le design.
