"use client";

import { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Shield,
  Users,
  Activity,
  Stethoscope,
  Building2,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Car,
  Wifi,
  Coffee,
  UserPlus,
  FileText,
  Download,
  HelpCircle,
  ChevronDown,
  Calendar,
  Droplets,
  HeartPulse,
  ClipboardList,
} from "lucide-react";

// ============================================
// COMPOSANT: Bouton WhatsApp Flottant
// ============================================
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/213000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center gap-2 group"
      aria-label="Nous contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
}

// ============================================
// COMPOSANT: Barre de Contact Sticky
// ============================================
function ContactBar() {
  return (
    <div className="bg-primary-700 text-white py-2 text-sm">
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <a
            href="tel:+213000000000"
            className="flex items-center gap-2 hover:text-primary-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">+213 00 00 00 00 00</span>
          </a>
          <a
            href="https://wa.me/213000000000"
            className="flex items-center gap-2 hover:text-green-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>Ouvert 7j/7 - Service continu</span>
        </div>
      </div>
    </div>
  );
}

// ============================================
// COMPOSANT: Navigation
// ============================================
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#premiere-seance", label: "Première séance" },
    { href: "#equipe", label: "Équipe" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Skip link pour accessibilité */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      <ContactBar />

      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-3" : "bg-white/95 py-4"
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-3" aria-label="Clinique ESSAADA - Accueil">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-primary-700">
                  ESSAADA
                </span>
                <p className="text-xs text-neutral-500">Centre d&apos;Hémodialyse</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-base"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+213000000000"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Appeler
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-lg hover:bg-neutral-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-neutral-100"
            >
              <div className="container-custom py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-lg hover:bg-primary-50 text-neutral-700 font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex gap-2 mt-2">
                  <a
                    href="tel:+213000000000"
                    className="flex-1 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-center"
                  >
                    Appeler
                  </a>
                  <a
                    href="https://wa.me/213000000000"
                    className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold text-center"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

// ============================================
// SECTION: Hero
// ============================================
function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 text-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTE2aC0ydjEyaDJ2LTEyem0tOCAyMGgtMnYtOGgydjh6bTAgLTEwaC0ydi0yaDJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="container-custom py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-base font-medium mb-6">
            <Sparkles className="w-5 h-5" aria-hidden="true" />
            Centre d&apos;hémodialyse à Sidi Bel Abbès
          </div>

          {/* Titre */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Votre santé rénale,
            <br />
            notre engagement quotidien
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            La Clinique ESSAADA vous accueille dans un environnement moderne et
            apaisant. Notre équipe médicale qualifiée vous accompagne avec
            dévouement à chaque étape de votre parcours de soins.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#premiere-seance"
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Préparer ma première séance
            </a>
            <a
              href="tel:+213000000000"
              className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Nous appeler
            </a>
          </div>

          {/* Stats - Données clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold">20</div>
              <div className="text-white/80">Postes de dialyse</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold">7j/7</div>
              <div className="text-white/80">Ouvert tous les jours</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold">2023</div>
              <div className="text-white/80">Équipements récents</div>
            </div>
            <div>
              <div className="font-display text-3xl md:text-4xl font-bold">100%</div>
              <div className="text-white/80">Équipe qualifiée</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Services
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: Droplets,
      title: "Hémodialyse",
      description:
        "Traitement de suppléance rénale avec générateurs de dernière génération. Séances personnalisées dans un environnement confortable.",
      features: [
        "Générateurs Fresenius dernière génération",
        "Eau de dialyse ultra-pure",
        "Suivi médical permanent",
        "Fauteuils confortables inclinables",
      ],
    },
    {
      icon: Stethoscope,
      title: "Consultation Néphrologie",
      description:
        "Consultations spécialisées pour le diagnostic, le suivi et la prévention des maladies rénales à tous les stades.",
      features: [
        "Diagnostic précoce",
        "Suivi de l'insuffisance rénale",
        "Conseils nutritionnels",
        "Préparation à la dialyse",
      ],
    },
    {
      icon: HeartPulse,
      title: "Accompagnement Global",
      description:
        "Prise en charge complète : éducation thérapeutique, conseils diététiques et soutien psychologique.",
      features: [
        "Éducation thérapeutique",
        "Diététicienne spécialisée",
        "Accompagnement des familles",
        "Suivi personnalisé",
      ],
    },
    {
      icon: Building2,
      title: "Dialyse Vacanciers",
      description:
        "Vous êtes en vacances à Sidi Bel Abbès ? Nous accueillons les patients dialysés de passage. Réservez vos séances à l'avance.",
      features: [
        "Réservation anticipée",
        "Coordination avec votre centre",
        "Flexibilité des horaires",
        "Dossier médical sécurisé",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Nos services médicaux
          </h2>
          <p className="text-neutral-600 text-lg">
            La Clinique ESSAADA propose une prise en charge complète de
            l&apos;insuffisance rénale, du diagnostic au traitement de suppléance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-neutral-100"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>

              <h3 className="font-display text-xl font-bold text-neutral-800 mb-3">
                {service.title}
              </h3>

              <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3" role="list">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Première Séance (NOUVEAU)
// ============================================
function PremiereSeanceSection() {
  const etapes = [
    {
      numero: 1,
      titre: "Avant votre venue",
      items: [
        "Apportez votre carte d'identité et carte vitale (CNAS/CASNOS)",
        "Préparez votre dossier médical (analyses, ordonnances)",
        "Prenez un repas léger 2h avant la séance",
        "Portez des vêtements confortables avec manches courtes",
      ],
    },
    {
      numero: 2,
      titre: "À votre arrivée",
      items: [
        "L'accueil vous guide vers votre poste de dialyse",
        "L'infirmière vérifie vos constantes (poids, tension)",
        "Le médecin néphrologue vous examine",
        "On vous installe confortablement sur votre fauteuil",
      ],
    },
    {
      numero: 3,
      titre: "Pendant la séance",
      items: [
        "Durée : 4 heures en moyenne",
        "Vous pouvez lire, regarder la TV, dormir",
        "L'équipe surveille vos constantes en continu",
        "Collation disponible pendant la séance",
      ],
    },
    {
      numero: 4,
      titre: "Après la séance",
      items: [
        "Repos de quelques minutes avant de vous lever",
        "Contrôle du poids et de la tension",
        "Prochain rendez-vous confirmé",
        "Contact d'urgence fourni",
      ],
    },
  ];

  return (
    <section id="premiere-seance" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-base font-medium mb-4">
            <ClipboardList className="w-5 h-5" aria-hidden="true" />
            Guide pratique
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Préparer votre première séance
          </h2>
          <p className="text-neutral-600 text-lg">
            Nous savons que la première séance peut être source d&apos;inquiétude.
            Voici tout ce que vous devez savoir pour arriver sereinement.
          </p>
        </div>

        {/* Étapes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {etapes.map((etape) => (
            <div
              key={etape.numero}
              className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white font-display font-bold text-xl flex items-center justify-center">
                  {etape.numero}
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-800">
                  {etape.titre}
                </h3>
              </div>
              <ul className="space-y-3" role="list">
                {etape.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Téléchargement */}
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 text-center border border-primary-100">
          <FileText className="w-16 h-16 text-primary-600 mx-auto mb-4" aria-hidden="true" />
          <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-800 mb-3">
            Téléchargez le guide complet
          </h3>
          <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
            Un document PDF à imprimer avec la liste complète des documents à
            apporter et les réponses aux questions fréquentes.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Télécharger le guide (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Informations Pratiques (NOUVEAU)
// ============================================
function InfosPratiquesSection() {
  const infos = [
    {
      icon: Clock,
      titre: "Horaires des séances",
      contenu: [
        "Matin : 6h00 - 11h00",
        "Après-midi : 12h00 - 17h00",
        "Soir : 18h00 - 23h00",
        "3 séances par semaine selon prescription",
      ],
    },
    {
      icon: Car,
      titre: "Parking",
      contenu: [
        "Parking gratuit pour les patients",
        "Places réservées près de l'entrée",
        "Accès facilité pour personnes à mobilité réduite",
      ],
    },
    {
      icon: Wifi,
      titre: "WiFi gratuit",
      contenu: [
        "Connexion WiFi haut débit disponible",
        "Demandez le code à l'accueil",
        "Apportez votre tablette ou téléphone",
      ],
    },
    {
      icon: Coffee,
      titre: "Repas et collations",
      contenu: [
        "Collation offerte pendant la séance",
        "Eau et boissons disponibles",
        "Repas adaptés sur demande",
      ],
    },
    {
      icon: UserPlus,
      titre: "Accompagnants",
      contenu: [
        "Un accompagnant peut rester lors des premières séances",
        "Salle d'attente confortable",
        "Café et thé à disposition",
      ],
    },
    {
      icon: Shield,
      titre: "Sécurité",
      contenu: [
        "Équipements certifiés et contrôlés",
        "Protocoles d'hygiène stricts",
        "Médecin présent en permanence",
        "Numéro d'urgence 24h/24",
      ],
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Informations pratiques
          </h2>
          <p className="text-neutral-600 text-lg">
            Tout ce que vous devez savoir pour votre confort au quotidien.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {infos.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <info.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-neutral-800 mb-3">
                {info.titre}
              </h3>
              <ul className="space-y-2 text-neutral-600" role="list">
                {info.contenu.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Équipe
// ============================================
function EquipeSection() {
  const equipe = [
    {
      role: "Direction Médicale",
      description:
        "Notre directeur médical supervise l'ensemble des soins et garantit le respect des protocoles médicaux les plus stricts.",
      specialites: ["Néphrologie", "Hémodialyse", "Maladies rénales"],
    },
    {
      role: "Médecins Néphrologues",
      description:
        "Nos néphrologues expérimentés assurent le suivi personnalisé de chaque patient et adaptent les traitements.",
      specialites: ["Suivi dialyse", "Consultations", "Urgences"],
    },
    {
      role: "Équipe Infirmière",
      description:
        "Nos infirmiers spécialisés en hémodialyse vous accompagnent avec compétence et bienveillance à chaque séance.",
      specialites: ["Soins dialyse", "Surveillance", "Éducation patient"],
    },
    {
      role: "Personnel d'Accompagnement",
      description:
        "Diététiciens, psychologues et assistants sont là pour une prise en charge globale de votre bien-être.",
      specialites: ["Nutrition", "Soutien", "Administratif"],
    },
  ];

  return (
    <section id="equipe" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-base font-medium mb-4">
            <Users className="w-5 h-5" aria-hidden="true" />
            Notre équipe
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Une équipe qualifiée à votre écoute
          </h2>
          <p className="text-neutral-600 text-lg">
            Des professionnels de santé dévoués pour vous accompagner tout au long
            de votre parcours de soins.
          </p>
        </div>

        {/* Équipe Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {equipe.map((membre, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
            >
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold text-neutral-800 mb-3">
                {membre.role}
              </h3>
              <p className="text-neutral-600 mb-4 leading-relaxed">{membre.description}</p>
              <div className="flex flex-wrap gap-2">
                {membre.specialites.map((spec, i) => (
                  <span
                    key={i}
                    className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Message Direction */}
        <div className="bg-primary-50 rounded-2xl p-8 md:p-12 border border-primary-100">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-12 h-12 text-primary-600 mx-auto mb-6" aria-hidden="true" />
            <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-800 mb-4">
              Message de la Direction
            </h3>
            <blockquote className="text-lg text-neutral-700 italic mb-6 leading-relaxed">
              &ldquo;La Direction de l&apos;établissement vous souhaite la bienvenue et
              vous remercie de votre confiance. L&apos;équipe médicale et le personnel
              qualifié mettront tout en œuvre afin de vous apporter les meilleurs
              soins et rendre votre séjour le plus confortable possible.&rdquo;
            </blockquote>
            <p className="text-neutral-600">
              N&apos;hésitez pas à nous faire part de vos appréciations et suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: FAQ (NOUVEAU)
// ============================================
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien de temps dure une séance de dialyse ?",
      reponse:
        "Une séance d'hémodialyse dure en moyenne 4 heures. Cette durée est déterminée par votre médecin néphrologue en fonction de vos besoins médicaux. Vous pouvez lire, regarder la télévision ou vous reposer pendant ce temps.",
    },
    {
      question: "La dialyse est-elle douloureuse ?",
      reponse:
        "La ponction de la fistule peut occasionner une légère gêne, comparable à une prise de sang. Nos infirmiers sont formés pour minimiser cet inconfort. Une fois la séance commencée, elle est indolore.",
    },
    {
      question: "Puis-je manger pendant la dialyse ?",
      reponse:
        "Oui, une collation vous est proposée pendant la séance. Nous recommandons cependant de prendre un repas léger 2 heures avant votre venue pour éviter tout inconfort.",
    },
    {
      question: "À quelle fréquence dois-je venir ?",
      reponse:
        "La plupart des patients ont 3 séances par semaine (lundi-mercredi-vendredi ou mardi-jeudi-samedi). Votre médecin détermine la fréquence adaptée à votre situation.",
    },
    {
      question: "Puis-je voyager si je suis sous dialyse ?",
      reponse:
        "Oui ! De nombreux centres de dialyse en Algérie et à l'étranger accueillent les patients de passage. Nous vous aidons à organiser vos séances de dialyse pour vos vacances. Prévoyez de nous contacter au moins 1 mois à l'avance.",
    },
    {
      question: "Comment prendre rendez-vous pour une première consultation ?",
      reponse:
        "Appelez-nous au numéro indiqué ou envoyez-nous un message WhatsApp. Notre équipe vous fixera un rendez-vous avec un néphrologue dans les plus brefs délais.",
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-base font-medium mb-4">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
              Questions fréquentes
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-800">
              Vos questions, nos réponses
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-neutral-800 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-500 transition-transform shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 text-neutral-600 leading-relaxed"
                  >
                    {faq.reponse}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Vous avez d&apos;autres questions ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Contact
// ============================================
function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info Contact */}
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
              Prenez contact avec nous
            </h2>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions.
              N&apos;hésitez pas à nous appeler ou à nous envoyer un message.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+213000000000"
                className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Téléphone</h3>
                  <p className="text-primary-600 font-semibold text-lg group-hover:underline">
                    +213 00 00 00 00 00
                  </p>
                  <p className="text-neutral-500 text-sm">Disponible 7j/7</p>
                </div>
              </a>

              <a
                href="https://wa.me/213000000000"
                className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50 hover:bg-green-50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">WhatsApp</h3>
                  <p className="text-green-600 font-semibold text-lg group-hover:underline">
                    Envoyer un message
                  </p>
                  <p className="text-neutral-500 text-sm">Réponse sous 2h en moyenne</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50">
                <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Adresse</h3>
                  <p className="text-neutral-700">
                    Clinique ESSAADA
                    <br />
                    [Adresse complète]
                    <br />
                    Sidi Bel Abbès, Algérie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-xl bg-neutral-50">
                <div className="w-14 h-14 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Email</h3>
                  <a
                    href="mailto:contact@clinique-essaada.dz"
                    className="text-primary-600 font-semibold hover:underline"
                  >
                    contact@clinique-essaada.dz
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 border border-neutral-100">
            <h3 className="font-display text-xl font-bold text-neutral-800 mb-6">
              Demande de rendez-vous
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="nom" className="block font-medium text-neutral-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-lg"
                  placeholder="Votre nom et prénom"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block font-medium text-neutral-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-lg"
                  placeholder="0X XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="motif" className="block font-medium text-neutral-700 mb-2">
                  Motif de votre demande
                </label>
                <select
                  id="motif"
                  name="motif"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-lg bg-white"
                >
                  <option value="">Sélectionnez un motif</option>
                  <option value="premiere-consultation">Première consultation</option>
                  <option value="transfert">Transfert de centre</option>
                  <option value="vacances">Dialyse vacanciers</option>
                  <option value="information">Demande d&apos;information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-neutral-700 mb-2">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none text-lg"
                  placeholder="Précisez votre demande..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-lg"
              >
                Envoyer ma demande
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <p className="text-neutral-500 text-sm text-center">
                Nous vous recontacterons dans les 24h ouvrées.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECTION: Footer
// ============================================
function Footer() {
  return (
    <footer className="bg-neutral-900 text-white" role="contentinfo">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display font-bold text-xl">ESSAADA</span>
                <p className="text-sm text-neutral-400">Centre d&apos;Hémodialyse</p>
              </div>
            </div>
            <p className="text-neutral-400 max-w-md mb-6 leading-relaxed">
              La Clinique ESSAADA met tout en œuvre pour accueillir ses patients
              dans les meilleures conditions. Équipements modernes, équipe
              qualifiée, soins personnalisés.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/213000000000"
                className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="tel:+213000000000"
                className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-500 flex items-center justify-center transition-colors"
                aria-label="Téléphone"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-3" role="list">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#services", label: "Nos services" },
                { href: "#premiere-seance", label: "Première séance" },
                { href: "#equipe", label: "Notre équipe" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-neutral-400" role="list">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <a href="tel:+213000000000" className="hover:text-white transition-colors">
                  +213 00 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-500" aria-hidden="true" />
                <a href="https://wa.me/213000000000" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-500" aria-hidden="true" />
                <a href="mailto:contact@clinique-essaada.dz" className="hover:text-white transition-colors">
                  contact@clinique-essaada.dz
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-1" aria-hidden="true" />
                <span>Sidi Bel Abbès, Algérie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Clinique ESSAADA. Tous droits réservés.
          </p>
          <p className="text-neutral-500 text-sm">
            Centre d&apos;hémodialyse agréé - Sidi Bel Abbès
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// PAGE PRINCIPALE
// ============================================
export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <PremiereSeanceSection />
        <InfosPratiquesSection />
        <EquipeSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
