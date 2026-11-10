// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CPL L'EXCELLENCE — Abouda, préfecture de la Kozah (Région de la Kara)
//  Données vérifiées : nom, statut (privé laïc agréé par le MEPST), téléphone, localité,
//  cycles et classes, examens (CEPE, BEPC), modalités de paiement.
//  Données FICTIVES à confirmer avec l'établissement : slogan, e-mail, horaires, tarifs,
//  effectifs, textes de présentation, nom du fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cpl-excellence-abouda',
  logo: '/cpl-excellence-logo.png',
  settings: {
    name: 'Complexe Scolaire Privé Laïque L’Excellence',
    shortName: 'CPL L’Excellence',
    slogan: 'MÉRITE, TRAVAIL ET RÉUSSITE',
    address: 'Localité d’Abouda, préfecture de la Kozah — Kara, Togo',
    email: 'contact@cpl-excellence.tg',
    phone: '+228 92 77 20 93',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 70000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé laïc agréé par l’État togolais, à Abouda (Kozah) : de la maternelle au collège, une école de proximité où le mérite, le travail et la réussite sont au cœur du projet.',
  hero: {
    eyebrow: 'MÉRITE - DISCIPLINE - RÉUSSITE',
    titleLines: ['Complexe Scolaire', 'Privé Laïque'],
    highlight: 'L’Excellence',
    intro:
      'Bienvenue au CPL L’Excellence, à Abouda. Un encadrement de qualité, une vraie discipline de travail et une ambition claire : faire réussir chaque élève, de la maternelle jusqu’au BEPC.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du CPL L’Excellence',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['L’excellence n’est pas un nom,', 'c’est une exigence.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'En créant le CPL L’Excellence à Abouda, nous avons voulu offrir aux familles de notre communauté une école de proximité qui n’a rien à envier aux établissements de la ville : des enseignants engagés, un suivi rigoureux et des résultats.',
      'Ici, le mérite est reconnu, le travail est encouragé et la discipline est une force. Établissement laïc agréé par l’État, nous accueillons chaque enfant sans distinction et l’accompagnons jusqu’à la réussite aux examens.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Privé Laïque L’Excellence est implanté à Abouda, une localité de la préfecture de la Kozah, à proximité de la ville de Kara. Bien ancré dans la communauté, il offre aux familles de la zone une solution éducative de proximité.',
      'Son nom résume son projet pédagogique : viser l’excellence grâce au mérite, à la discipline de travail et à un encadrement de qualité assuré par un corps enseignant engagé.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, le complexe couvre l’essentiel du cursus général togolais, de la maternelle au collège, et prépare ses élèves au CEPE puis au BEPC.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'graduation',
      title: 'Mérite',
      text: 'Les efforts et les progrès de chaque élève sont reconnus et récompensés.',
    },
    {
      icon: 'shield',
      title: 'Discipline de travail',
      text: 'Régularité, ponctualité et sérieux, en classe comme à la maison.',
    },
    {
      icon: 'users',
      title: 'Encadrement de qualité',
      text: 'Des enseignants engagés qui suivent chaque élève de près.',
    },
    {
      icon: 'heart',
      title: 'Réussite aux examens',
      text: 'Une préparation rigoureuse au CEPE et au BEPC.',
    },
  ],
  faq: [
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Abouda, dans la préfecture de la Kozah (Région de la Kara), à proximité de la ville de Kara. Appelez-nous ou écrivez-nous sur WhatsApp au +228 92 77 20 93 pour être guidé.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'La maternelle (petite, moyenne et grande section), le primaire (du CP1 au CM2) et le collège (de la 6e à la 3e).',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont préparés et présentés au CEPE, et les élèves de 3e bénéficient d’une préparation rigoureuse au BEPC.',
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (cycle préscolaire) est la première étape du parcours scolaire. Elle pose les apprentissages de base et développe l’éveil, la motricité et la vie en groupe.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et motricité',
        'Développement du langage',
        'Initiation à la lecture et au calcul',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Les élèves sont préparés et présentés à l’examen national du CEPE (Certificat d’Études du Premier Cycle), qui ouvre l’entrée en 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et assure une préparation rigoureuse à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Préparation rigoureuse, devoirs surveillés et examens blancs en 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) extrait d’acte de naissance',
      'Les bulletins des trimestres précédents (sauf entrée en petite section)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Un certificat de scolarité ou de transfert (pour un élève venant d’un autre établissement)',
      'Deux (2) photos d’identité récentes, sur fond blanc',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
