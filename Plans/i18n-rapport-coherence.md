# Rapport de cohérence des traductions EN/AR — Phase 1

Vérification automatisée (12 namespaces, comparaison EN/AR ↔ FR source) le 2026-06-16.
Les traductions sont **« à valider »** par un locuteur natif / médecin avant mise en production, surtout l'arabe.

## Verdict global
- **0 problème MAJEUR** — aucun glissement de sens médical, aucun chiffre/durée/fréquence modifié (37 lits, 4 h, 3×/sem, 72 h, 10 s, 05h–19h tous préservés), aucun sigle altéré (CNAS, CASNOS, CPAM, Chifa, ESSAADA), aucune formulation dangereuse ou promesse de résultat.
- 13 mineurs (style/terminologie), 22 infos (choix de localisation acceptables).
- EN « ok » sur 11/12 namespaces ; AR « ok » sur 7/12.

## Corrections déjà appliquées (auto)
- AR `home.meta.title`/`ogTitle` : « عيادة الـ ESSAADA » → « عيادة ESSAADA » (article parasite retiré).
- AR `firstSession.hero.photoAlt` : nom altéré « عيادة الصعدة » → « عيادة ESSAADA » (faux nom propre corrigé).
- EN + AR `meta.siteDescription` : « conventionné » rendu « accredited / مُعتمَد لدى » → « Affiliated with / متعاقد مع » (évite la confusion avec l'agrément Ministère).
- AR `hemodialysis.seanceIncludes` : « تتبّع معلوماتي » → « تتبّع رقمي » (terme « informatisée » plus juste).

## Notes restantes à valider par un relecteur (mineures, non bloquantes)
- AR `firstSession.documents.ordonnance` : ajoute « المعالج » (traitant) absent du FR — à confirmer.
- AR `hemodialysis.hero.subtitle` : « 3 créneaux » → « 3 حصص » (séances) ; nuance créneau/séance aplatie.
- AR `hemodialysis.qualite` : « quand indiqué » → « عند الحاجة » (au besoin) ; préférer « عند الاستطباب ».
- AR `footer.groups.understand` : « Comprendre » → « للفهم » (nominal) ; acceptable comme titre de rubrique.
- EN `consultation` : sigle ETP → TPE, « médecin traitant » → « GP » (registre UK) ; acceptable.
- EN `nav.treatment.hemodialysis.desc` : « déroulé » → « what to expect » ; « how it unfolds » serait plus exact.
- EN/AR `practical.vie.voyages` : « au bled » → « back home / في البلد » ; connotation diaspora atténuée, sens préservé.
- EN `home.stats.beds` : « lits » → « stations » (parti pris de localisation EN cohérent ; l'AR garde « أسرّة »). À trancher si harmonisation souhaitée.
