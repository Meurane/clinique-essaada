export type GlossaireEntry = {
  term: string;
  slug: string;
  initial: string;
  definition: string;
  relatedTerms?: string[];
};

export const glossaire: GlossaireEntry[] = [
  {
    term: "Accès vasculaire",
    slug: "acces-vasculaire",
    initial: "A",
    definition:
      "Voie d'entrée chirurgicale ou médicale qui permet de connecter la circulation sanguine au générateur de dialyse. En hémodialyse, les deux formes principales sont la fistule artério-veineuse (solution durable) et le cathéter (utilisé en urgence ou en attente de fistule). La qualité de l'accès vasculaire conditionne directement l'efficacité des séances et la sécurité du patient sur le long terme.",
    relatedTerms: ["fistule-arterio-veineuse", "catheter", "hemodialyse"],
  },
  {
    term: "ASE",
    slug: "ase",
    initial: "A",
    definition:
      "Abréviation d'« Agent stimulant de l'érythropoïèse ». Ce sont des médicaments injectables qui imitent l'action de l'érythropoïétine, l'hormone normalement produite par les reins. Ils sont prescrits aux patients insuffisants rénaux dont les reins ne fabriquent plus assez de cette hormone, afin de corriger l'anémie rénale et de réduire la fatigue liée au manque de globules rouges.",
    relatedTerms: ["erythropoietine", "epo", "hemoglobine"],
  },
  {
    term: "Cathéter",
    slug: "catheter",
    initial: "C",
    definition:
      "Tuyau souple et fin en matière plastique, introduit dans un vaisseau sanguin (souvent au niveau du cou ou de l'aine) pour accéder à la circulation. En hémodialyse, il sert d'accès vasculaire temporaire, notamment en urgence ou pendant la maturation d'une fistule. Il peut aussi être posé dans l'abdomen pour la dialyse péritonéale. Sa manipulation exige une hygiène rigoureuse.",
    relatedTerms: ["acces-vasculaire", "fistule-arterio-veineuse", "dialyse-peritoneale"],
  },
  {
    term: "Centre d'Hémodialyse",
    slug: "centre-hemodialyse",
    initial: "C",
    definition:
      "Structure de soins dédiée aux patients atteints d'insuffisance rénale sévère qui nécessitent une prise en charge complète. Un néphrologue est présent en permanence pendant les séances, accompagné d'une équipe infirmière. Ce cadre convient aux patients dont l'état médical demande une surveillance rapprochée, par opposition à l'auto-dialyse ou à la dialyse à domicile.",
    relatedTerms: ["hemodialyse", "unite-auto-dialyse", "unite-dialyse-medicalisee"],
  },
  {
    term: "Créatinine",
    slug: "creatinine",
    initial: "C",
    definition:
      "Déchet produit en continu par le fonctionnement normal des muscles, à partir de la créatine. Elle est éliminée par les reins dans l'urine. Son dosage dans le sang et le calcul de sa clairance permettent d'évaluer la fonction rénale : plus la créatinine s'accumule dans le sang, moins les reins filtrent correctement. C'est l'un des marqueurs de référence du suivi néphrologique.",
    relatedTerms: ["uree", "maladie-renale-chronique", "insuffisance-renale-chronique-terminale"],
  },
  {
    term: "Diabète",
    slug: "diabete",
    initial: "D",
    definition:
      "Maladie chronique caractérisée par un taux de glucose (sucre) trop élevé dans le sang, lié à un défaut de production ou d'action de l'insuline. Mal équilibré sur le long terme, il abîme les petits vaisseaux sanguins, notamment ceux des reins. Environ un patient diabétique sur cinq développe une insuffisance rénale ; c'est l'une des premières causes de dialyse dans le monde.",
    relatedTerms: ["maladie-renale-chronique", "pression-arterielle"],
  },
  {
    term: "Dialyse",
    slug: "dialyse",
    initial: "D",
    definition:
      "Traitement qui remplace partiellement le travail de reins défaillants en épurant le sang de ses déchets et de l'excès d'eau. Deux techniques existent : l'hémodialyse, qui filtre le sang à travers un rein artificiel, et la dialyse péritonéale, qui utilise la membrane naturelle de l'abdomen. Le choix dépend de l'état médical, du mode de vie et des préférences du patient.",
    relatedTerms: ["hemodialyse", "dialyse-peritoneale", "greffe-de-rein"],
  },
  {
    term: "Dialyse à domicile",
    slug: "dialyse-a-domicile",
    initial: "D",
    definition:
      "Modalité de traitement où le patient réalise lui-même sa dialyse chez lui, après une formation encadrée. Elle offre une grande autonomie, un meilleur respect des rythmes personnels et un suivi médical régulier mais espacé. Elle concerne surtout la dialyse péritonéale, et plus rarement l'hémodialyse à domicile. Elle suppose un environnement adapté et un proche disponible en soutien.",
    relatedTerms: ["dialyse-peritoneale", "dpa", "dpca"],
  },
  {
    term: "Dialyse péritonéale",
    slug: "dialyse-peritoneale",
    initial: "D",
    definition:
      "Technique qui utilise le péritoine, la fine membrane tapissant la cavité abdominale, comme filtre naturel. Une solution de dialyse est introduite dans l'abdomen par un cathéter, laissée en place quelques heures, puis évacuée et remplacée. Le traitement fonctionne en continu, 24h/24, imitant davantage le rein naturel. Il est pratiqué presque exclusivement à domicile, après formation du patient.",
    relatedTerms: ["dpa", "dpca", "temps-de-stase"],
  },
  {
    term: "Dialyseur",
    slug: "dialyseur",
    initial: "D",
    definition:
      "Filtre central du générateur d'hémodialyse, parfois appelé « rein artificiel ». Il est composé de milliers de fibres creuses semi-perméables à travers lesquelles le sang circule. Les déchets et l'excès d'eau passent du sang vers la solution de dialyse, tandis que les cellules sanguines et les protéines restent dans la circulation. C'est lui qui réalise concrètement l'épuration.",
    relatedTerms: ["hemodialyse", "solution-de-dialyse", "ultrafiltration"],
  },
  {
    term: "DPA",
    slug: "dpa",
    initial: "D",
    definition:
      "Abréviation de « Dialyse péritonéale automatisée ». Le patient branche un petit appareil, le cycleur, qui réalise automatiquement les échanges de solution de dialyse dans l'abdomen pendant la nuit, sur environ 8 à 10 heures. La journée est ainsi libre de manipulations. Cette technique convient aux personnes actives ou gênées par les échanges manuels de la DPCA.",
    relatedTerms: ["dialyse-peritoneale", "dpca", "temps-de-stase"],
  },
  {
    term: "DPCA",
    slug: "dpca",
    initial: "D",
    definition:
      "Abréviation de « Dialyse péritonéale continue ambulatoire ». Le patient effectue lui-même, manuellement, quatre à cinq échanges de solution de dialyse dans la journée, à intervalles réguliers. Chaque échange dure environ 30 minutes. Entre deux échanges, il peut mener une vie normale. Cette méthode ne nécessite aucun appareil électrique et se pratique n'importe où si l'hygiène est respectée.",
    relatedTerms: ["dialyse-peritoneale", "dpa", "temps-de-stase"],
  },
  {
    term: "EPO",
    slug: "epo",
    initial: "E",
    definition:
      "Abréviation courante d'« érythropoïétine », hormone produite par les reins sains qui stimule la moelle osseuse pour fabriquer les globules rouges. Chez les patients insuffisants rénaux, la production d'EPO chute, ce qui provoque une anémie. Des formes synthétiques sont alors prescrites en injection pour restaurer un taux d'hémoglobine satisfaisant et réduire la fatigue.",
    relatedTerms: ["erythropoietine", "ase", "hemoglobine"],
  },
  {
    term: "Érythropoïétine",
    slug: "erythropoietine",
    initial: "E",
    definition:
      "Hormone naturellement produite par des reins en bonne santé. Elle agit sur la moelle osseuse en la stimulant pour produire les globules rouges, responsables du transport de l'oxygène. Quand les reins sont malades, cette production diminue et une anémie rénale s'installe, provoquant fatigue et essoufflement. Des versions synthétiques (EPO, ASE) permettent de compenser cette carence.",
    relatedTerms: ["epo", "ase", "hemoglobine"],
  },
  {
    term: "Fistule artério-veineuse (FAV)",
    slug: "fistule-arterio-veineuse",
    initial: "F",
    definition:
      "Accès vasculaire de référence pour l'hémodialyse, créé chirurgicalement, le plus souvent à l'avant-bras. Le chirurgien relie une artère à une veine voisine : la veine s'épaissit progressivement sous la pression artérielle et devient facile à piquer. Elle fournit le débit sanguin élevé nécessaire aux séances. Sa maturation demande plusieurs semaines avant la première utilisation.",
    relatedTerms: ["acces-vasculaire", "catheter", "hemodialyse"],
  },
  {
    term: "Greffe de rein",
    slug: "greffe-de-rein",
    initial: "G",
    definition:
      "Intervention chirurgicale qui consiste à remplacer la fonction des reins malades par un rein sain provenant d'un donneur. Le donneur peut être vivant, souvent un proche compatible, ou décédé. La greffe, quand elle est possible, offre une qualité de vie proche de la normale et libère le patient des séances de dialyse. Elle impose un traitement immunosuppresseur à vie.",
    relatedTerms: ["medicaments-immunosuppresseurs", "dialyse", "insuffisance-renale-chronique-terminale"],
  },
  {
    term: "Hémodialyse",
    slug: "hemodialyse",
    initial: "H",
    definition:
      "Technique de dialyse où le sang du patient circule hors du corps à travers un rein artificiel, le dialyseur. Déchets et excès d'eau passent dans la solution de dialyse à travers une membrane semi-perméable, puis le sang épuré retourne au patient. Les séances ont lieu généralement trois fois par semaine et durent quatre à six heures.",
    relatedTerms: ["dialyseur", "acces-vasculaire", "solution-de-dialyse"],
  },
  {
    term: "Hémoglobine",
    slug: "hemoglobine",
    initial: "H",
    definition:
      "Protéine contenue dans les globules rouges, responsable du transport de l'oxygène des poumons vers les tissus. Elle doit sa couleur rouge au fer qu'elle contient. Lorsqu'elle baisse sous un certain seuil, on parle d'anémie, qui se manifeste par de la fatigue, un essoufflement et une pâleur. L'anémie est fréquente chez les patients dialysés et se corrige par traitement.",
    relatedTerms: ["erythropoietine", "epo", "ase"],
  },
  {
    term: "Insuffisance rénale aiguë",
    slug: "insuffisance-renale-aigue",
    initial: "I",
    definition:
      "Perte brutale, en quelques heures ou quelques jours, de la capacité des reins à filtrer le sang. Elle est souvent temporaire et réversible si elle est prise en charge rapidement. Les causes fréquentes sont une baisse de l'irrigation des reins, une obstruction des voies urinaires ou une lésion après une opération, un accident ou une infection grave. Le traitement se fait souvent en réanimation.",
    relatedTerms: ["insuffisance-renale-chronique-terminale", "maladie-renale-chronique", "dialyse"],
  },
  {
    term: "Insuffisance rénale chronique terminale",
    slug: "insuffisance-renale-chronique-terminale",
    initial: "I",
    definition:
      "Stade le plus avancé de la maladie rénale chronique, où la fonction des reins est inférieure à environ 10 % de la normale (évaluée par le DFG, ou débit de filtration glomérulaire). À ce stade, les reins ne parviennent plus à assurer seuls l'épuration du sang. Un traitement de suppléance devient nécessaire : dialyse ou greffe de rein.",
    relatedTerms: ["maladie-renale-chronique", "dialyse", "greffe-de-rein"],
  },
  {
    term: "Maladie rénale chronique",
    slug: "maladie-renale-chronique",
    initial: "M",
    definition:
      "Dégradation lente et progressive de la fonction rénale, qui s'installe sur plusieurs années. Elle est souvent silencieuse au début et découverte par des analyses de sang ou d'urine. Sans prise en charge, elle peut évoluer vers l'insuffisance rénale terminale, nécessitant alors la dialyse ou la greffe. Ses principales causes sont le diabète, l'hypertension artérielle et certaines maladies héréditaires.",
    relatedTerms: ["diabete", "pression-arterielle", "insuffisance-renale-chronique-terminale"],
  },
  {
    term: "Médicaments immunosuppresseurs",
    slug: "medicaments-immunosuppresseurs",
    initial: "M",
    definition:
      "Médicaments qui atténuent l'activité du système immunitaire. Ils sont prescrits à vie après une greffe de rein pour empêcher l'organisme de reconnaître le greffon comme étranger et de le rejeter. Leur équilibre est délicat : trop peu et le rejet menace, trop et le patient devient vulnérable aux infections. Ils nécessitent un suivi médical rapproché et régulier.",
    relatedTerms: ["greffe-de-rein"],
  },
  {
    term: "Pression artérielle",
    slug: "pression-arterielle",
    initial: "P",
    definition:
      "Pression exercée par le sang sur la paroi des artères lors de chaque battement du cœur. Lorsqu'elle reste durablement trop élevée, on parle d'hypertension, qui fatigue le cœur, les vaisseaux et les reins. Elle augmente le risque d'infarctus et d'AVC, et figure parmi les principales causes de maladie rénale chronique. Elle se traite par hygiène de vie et médicaments.",
    relatedTerms: ["maladie-renale-chronique", "diabete"],
  },
  {
    term: "Solution de dialyse",
    slug: "solution-de-dialyse",
    initial: "S",
    definition:
      "Liquide stérile composé d'eau ultra-purifiée, de glucose et d'électrolytes (sodium, potassium, calcium, magnésium, chlorures). Dans le dialyseur, il circule de l'autre côté de la membrane par rapport au sang : les déchets et l'excès d'eau y passent par différence de concentration, tandis que les éléments utiles sont préservés. Sa composition est ajustée à chaque patient.",
    relatedTerms: ["dialyseur", "hemodialyse", "ultrafiltration"],
  },
  {
    term: "Temps de stase",
    slug: "temps-de-stase",
    initial: "T",
    definition:
      "En dialyse péritonéale, période pendant laquelle la solution de dialyse fraîche reste dans l'abdomen pour effectuer l'épuration. Sa durée varie selon la technique, de quelques heures en journée à une nuit complète. À la fin de ce temps, le dialysat chargé en déchets est évacué puis remplacé par une solution neuve, soit manuellement par le patient, soit automatiquement par un cycleur.",
    relatedTerms: ["dialyse-peritoneale", "dpa", "dpca"],
  },
  {
    term: "Ultrafiltration",
    slug: "ultrafiltration",
    initial: "U",
    definition:
      "Mécanisme par lequel l'excès d'eau accumulé dans le sang est retiré pendant la dialyse. La quantité à enlever est calculée avant chaque séance à partir du poids du patient et de son « poids sec » cible. Une ultrafiltration bien dosée soulage l'essoufflement et l'œdème ; trop rapide, elle peut entraîner crampes ou baisse de tension. L'équipe ajuste les réglages en conséquence.",
    relatedTerms: ["hemodialyse", "dialyseur", "solution-de-dialyse"],
  },
  {
    term: "Unité d'Auto-dialyse (UAD)",
    slug: "unite-auto-dialyse",
    initial: "U",
    definition:
      "Structure où les patients, formés et autonomes en tout ou partie, réalisent eux-mêmes leur séance d'hémodialyse sous la supervision légère d'un infirmier. Les séances se déroulent en petits groupes, souvent autour de cinq patients pour un soignant, dans un cadre convivial. Cette formule convient aux personnes stables médicalement qui souhaitent conserver autonomie et vie sociale.",
    relatedTerms: ["centre-hemodialyse", "unite-dialyse-medicalisee", "hemodialyse"],
  },
  {
    term: "Unité de Dialyse Médicalisée (UDM)",
    slug: "unite-dialyse-medicalisee",
    initial: "U",
    definition:
      "Structure intermédiaire entre le centre lourd d'hémodialyse et l'auto-dialyse. Elle accueille des patients dont les séances se déroulent habituellement sans incident, mais qui ne peuvent pas se prendre en charge seuls. Une équipe infirmière est présente en permanence, et un néphrologue intervient ponctuellement, sans surveillance médicale continue pendant la séance elle-même.",
    relatedTerms: ["centre-hemodialyse", "unite-auto-dialyse", "hemodialyse"],
  },
  {
    term: "Urée",
    slug: "uree",
    initial: "U",
    definition:
      "Déchet issu de la dégradation normale des protéines par le foie, transporté par le sang et éliminé par les reins dans l'urine. Chez l'insuffisant rénal, elle s'accumule dans le sang et son taux sert d'indicateur du niveau de fonction rénale restante. Un taux trop élevé peut provoquer fatigue, perte d'appétit et nausées ; la dialyse vise notamment à la faire redescendre.",
    relatedTerms: ["creatinine", "dialyse", "maladie-renale-chronique"],
  },
];

export const glossaireByLetter = glossaire.reduce<Record<string, GlossaireEntry[]>>(
  (acc, entry) => {
    const k = entry.initial.toUpperCase();
    if (!acc[k]) acc[k] = [];
    acc[k].push(entry);
    return acc;
  },
  {},
);

export const glossaireLetters = Object.keys(glossaireByLetter).sort();

export function findTerm(slug: string) {
  return glossaire.find((g) => g.slug === slug);
}
