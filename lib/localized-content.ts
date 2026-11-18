import {collectionProducts, products, type ProductData} from "@/lib/content";

const frenchProducts: Record<ProductData["slug"], ProductData> = {
  "tc-100": {
    ...products["tc-100"],
    title: "Aspirateur-balai sans fil TIDEA TC-100",
    tagline: "Conception légère. Nettoyage quotidien puissant.",
    description:
      "Avec un poids de seulement 5,4 lb, le TC-100 facilite le nettoyage quotidien. Profitez de la liberté sans fil, d’une autonomie allant jusqu’à 45 minutes et d’un entretien simple, le tout dans un appareil léger.",
    includesIntro: "Tout ce qu’il vous faut pour un nettoyage polyvalent de la maison.",
    includes: [
      "Aspirateur-balai sans fil TC-100",
      "Brosse à plancher motorisée à DEL",
      "Suceur plat",
      "Brosse 2-en-1",
      "Outil de nettoyage en profondeur",
      "Support mural de recharge",
      "Adaptateur secteur",
    ],
    features: [
      {
        ...products["tc-100"].features[0],
        title: "Un poids plume de seulement 5,4 lb",
        body: "Pesant seulement 5,4 lb (2,47 kg) avec la batterie, le TC-100 se transporte facilement à l’étage, se manœuvre autour des meubles et se soulève aisément pour nettoyer les endroits difficiles d’accès.",
      },
      {
        ...products["tc-100"].features[1],
        title: "Un entretien simple et propre",
        body: "L’outil de nettoyage en profondeur inclus coupe les cheveux emmêlés et enlève la poussière du bac. Videz le bac de 600 mL d’une seule pression, sans mettre les mains dans la saleté.",
      },
      {
        ...products["tc-100"].features[2],
        title: "Écran numérique facile à consulter",
        body: "Suivez votre nettoyage grâce à un écran numérique clair qui affiche le pourcentage de batterie restant et le mode de nettoyage en cours.",
      },
      {
        ...products["tc-100"].features[3],
        title: "Brosse à DEL avec 50 % plus d’aspiration en mode BOOST",
        body: "Les phares à DEL intégrés révèlent la poussière et les cheveux cachés sous les lits et les canapés. Passez au mode BOOST pour obtenir 50 % plus d’aspiration que le mode ECO sur les débris plus lourds, comme les céréales et les petits graviers.",
      },
      {
        ...products["tc-100"].features[4],
        title: "De l’aspirateur-balai à l’aspirateur à main",
        body: "Retirez le tube pour nettoyer les canapés, les escaliers, l’intérieur de la voiture et les tablettes. Une fois terminé, suspendez l’appareil au support mural pour le ranger et le recharger facilement.",
      },
    ],
    runtimeTitle: "Jusqu’à 45 minutes d’autonomie",
    runtimeNote: "Autonomie en mode ECO. L’autonomie réelle varie selon le mode et la surface.",
    runtimes: [
      {minutes: "45", mode: "ECO", body: "Idéal pour le nettoyage quotidien et les séances de nettoyage prolongées."},
      {minutes: "25", mode: "BOOST", body: "Offre 50 % plus d’aspiration que le mode ECO pour les débris plus lourds."},
    ],
    lifestyle: {
      ...products["tc-100"].lifestyle!,
      title: "Nettoyez bien plus que les planchers",
      columns: [
        {title: "Planchers durs", body: "Nettoyez le bois franc, la céramique et le stratifié avec la brosse à plancher motorisée à DEL."},
        {title: "Tapis à poils courts", body: "Effectuez le nettoyage courant des surfaces avec le mode approprié."},
        {title: "Meubles et tissus d’ameublement", body: "Passez au mode à main pour les canapés et les coussins."},
        {title: "Espaces étroits", body: "Utilisez le suceur plat pour les coins, les bordures et les fentes étroites."},
        {title: "Voitures et escaliers", body: "Profitez de la liberté sans fil pour nettoyer bien au-delà de vos planchers."},
      ],
    },
    specs: [
      {label: "Modèle", value: "TC-100"},
      {label: "Type de produit", value: "Aspirateur-balai sans fil"},
      {label: "Poids", value: "5,4 lb (2,47 kg), avec la batterie"},
      {label: "Batterie", value: "Lithium-ion 22,2 V, amovible"},
      {label: "Autonomie", value: "Jusqu’à 45 min (ECO) / Environ 25 min (BOOST)"},
      {label: "Temps de recharge", value: "Environ 5,5 heures"},
      {label: "Modes de nettoyage", value: "ECO / BOOST"},
      {label: "Capacité du bac à poussière", value: "600 mL (20 oz liq.)"},
      {label: "Écran", value: "Pourcentage de batterie et mode"},
      {label: "Surfaces", value: "Bois franc, céramique, stratifié et tapis à poils courts"},
      {label: "Dimensions", value: "Environ 9,8 × 12,2 × 45,7 po"},
      {label: "Entrée du chargeur", value: "100–240 V c.a."},
      {label: "Certifications", value: "cSGSus (États-Unis et Canada), FCC"},
    ],
  },
  "tc-500": {
    ...products["tc-500"],
    title: "Aspirateur sans fil auto-vidant TIDEA TC-500",
    tagline: "Posez-le sur sa base. Il se vide tout seul.",
    description:
      "Profitez d’un nettoyage encore plus simple avec le TIDEA TC-500. Sa base auto-vidante recueille automatiquement la poussière tout en rechargeant l’aspirateur, afin qu’il soit toujours prêt pour le prochain nettoyage.",
    includesIntro: "Un ensemble complet d’accessoires vous aide à effectuer différentes tâches de nettoyage dans toute la maison.",
    includes: [
      "Suceur plat avec rallonge",
      "Brosse à épousseter 2-en-1",
      "Brosse motorisée pour matelas",
      "Rouleau-brosse souple",
      "Petite brosse",
      "Supports pour accessoires",
    ],
    features: [
      {
        ...products["tc-500"].features[0],
        title: "Base auto-vidante",
        body: "Replacez simplement l’aspirateur sur sa base après le nettoyage. La poussière est automatiquement transférée du bac vers la base, ce qui réduit le contact direct avec la saleté.",
      },
      {
        ...products["tc-500"].features[1],
        title: "Recharge pratique",
        body: "La base auto-vidante recharge aussi votre aspirateur. Posez-le simplement sur sa base après l’utilisation et reprenez-le lorsque vous êtes prêt à nettoyer.",
      },
      {
        ...products["tc-500"].features[2],
        title: "Mode AUTO intelligent",
        body: "Le mode AUTO détecte les surfaces et règle automatiquement la puissance d’aspiration lorsque vous passez des planchers durs aux tapis.",
      },
      {
        ...products["tc-500"].features[3],
        title: "Bac transparent et alerte de remplissage",
        body: "Le bac transparent permet de voir la saleté recueillie en un coup d’œil, tandis que l’écran vous avertit lorsqu’il est temps de le vider.",
      },
      {
        ...products["tc-500"].features[4],
        title: "Conçu pour simplifier le quotidien",
        body: "Les phares à DEL éclairent la poussière cachée et le tube pliable facilite le nettoyage sous les lits et les canapés sans avoir à se pencher ni à s’agenouiller.",
      },
    ],
    runtimeTitle: "Jusqu’à 42 minutes d’autonomie",
    runtimes: [
      {minutes: "42", mode: "ECO", body: "Profitez d’une autonomie prolongée pour le nettoyage quotidien et les grandes surfaces."},
      {minutes: "24", mode: "AUTO", body: "Règle automatiquement la puissance d’aspiration selon la surface pour un nettoyage équilibré."},
      {minutes: "10", mode: "BOOST", body: "Augmente la puissance d’aspiration pour les tâches de nettoyage plus exigeantes."},
    ],
    specs: [
      {label: "Modèle", value: "TC-500"},
      {label: "Type de produit", value: "Aspirateur sans fil auto-vidant"},
      {label: "Modes de nettoyage", value: "ECO / AUTO / BOOST"},
      {label: "Autonomie", value: "Jusqu’à 42 min (ECO)"},
      {label: "Temps de recharge", value: "Environ 5 heures"},
      {label: "Capacité du bac à poussière", value: "600 mL max."},
      {label: "Tête de plancher", value: "Tête motorisée avec phares à DEL"},
      {label: "Largeur de nettoyage", value: "Plus de 210 mm / 8,3 po"},
      {label: "Tube", value: "Tube pliable en aluminium de 610 mm / 24 po"},
      {label: "Batterie", value: "Lithium-ion 29,6 V"},
      {label: "Entrée du chargeur", value: "100–240 V c.a."},
      {label: "Type de fiche", value: "Fiche nord-américaine"},
      {label: "Poids net de l’ensemble", value: "7 kg / 15,4 lb"},
      {label: "Poids brut", value: "7,9 kg / 17,4 lb"},
    ],
  },
  "tc-200": {
    ...products["tc-200"],
    title: "Aspirateur sans fil sec et humide 2-en-1 TIDEA TC-200",
    tagline: "Un aspirateur. Deux façons de nettoyer.",
    description:
      "Passez d’une aspiration puissante à un lavage pratique grâce à deux têtes de plancher motorisées interchangeables. Conçu pour les dégâts quotidiens sur les planchers durs, les tapis et bien plus.",
    includesIntro: "Tout ce qu’il vous faut pour un nettoyage polyvalent de la maison.",
    includes: [
      "Unité principale TC-200",
      "Tête de plancher motorisée à poils",
      "Tête de lavage électrique",
      "Tampons de vadrouille en microfibre",
      "Brosse à épousseter 2-en-1",
      "Suceur plat allongé",
      "Brosse-crochet de nettoyage",
      "Tube pliable en aluminium",
      "Adaptateur de recharge",
    ],
    features: [
      {
        ...products["tc-200"].features[0],
        title: "Nettoyage sec et humide 2-en-1",
        body: "Passez de l’aspiration au lavage grâce à deux têtes de plancher motorisées interchangeables. Éliminez la poussière, les débris et les dégâts quotidiens avec un seul appareil polyvalent.",
      },
      {
        ...products["tc-200"].features[1],
        title: "Puissant moteur sans balais",
        body: "Propulsé par un moteur sans balais haute vitesse atteignant 92 000 tr/min et offrant une puissance nominale allant jusqu’à 360 W pour un nettoyage quotidien efficace.",
      },
      {
        ...products["tc-200"].features[2],
        title: "Système de filtration avancé",
        body: "Un système de filtration à double cyclone et un filtre HEPA EPA 10 aident à capter la poussière et les débris. Le bac transparent de 600 mL permet de surveiller facilement la saleté recueillie.",
      },
      {
        ...products["tc-200"].features[3],
        title: "Batterie longue durée",
        body: "Profitez d’une autonomie allant jusqu’à 42 minutes en mode ECO. La batterie lithium-ion de 22,2 V assure un nettoyage sans fil fiable dans toute la maison.",
      },
      {
        ...products["tc-200"].features[4],
        title: "Têtes de plancher et accessoires polyvalents",
        body: "Deux têtes motorisées, un éclairage à DEL et un tube pliable en aluminium facilitent le nettoyage de différentes surfaces et permettent d’atteindre davantage d’endroits dans la maison.",
      },
    ],
    runtimeTitle: "Jusqu’à 42 minutes d’autonomie",
    runtimes: [
      {minutes: "42", mode: "ECO", body: "Profitez d’une autonomie prolongée pour le nettoyage quotidien et les grandes surfaces."},
      {minutes: "24", mode: "AUTO", body: "Règle automatiquement la puissance d’aspiration selon la surface pour un nettoyage équilibré."},
      {minutes: "10", mode: "BOOST", body: "Augmente la puissance d’aspiration pour les tâches de nettoyage plus exigeantes."},
    ],
    lifestyle: {
      ...products["tc-200"].lifestyle!,
      title: "Deux têtes de plancher. Encore plus de possibilités.",
      columns: [
        {title: "Aspiration à sec puissante", body: "La tête motorisée à poils ramasse la poussière et les débris quotidiens sur les planchers durs et les tapis. Les lumières à DEL intégrées révèlent la saleté cachée dans les zones sombres."},
        {title: "Lavage humide pratique", body: "La tête de lavage motorisée comprend un réservoir d’eau et un système de distribution automatique qui maintient les tampons en microfibre uniformément humides pendant le nettoyage."},
      ],
    },
    specs: [
      {label: "Modèle", value: "TC-200"},
      {label: "Type de produit", value: "Aspirateur sans fil sec et humide"},
      {label: "Tension nominale", value: "22,2 V c.c."},
      {label: "Puissance nominale maximale", value: "360 W"},
      {label: "Moteur principal", value: "GRAM RS:55 sans balais"},
      {label: "Vitesse du moteur", value: "Jusqu’à 92 000 tr/min"},
      {label: "Modes de nettoyage", value: "ECO / AUTO / BOOST"},
      {label: "Autonomie", value: "≥42 / ≥24 / ≥10 min"},
      {label: "Temps de recharge", value: "5 à 6 heures"},
      {label: "Batterie", value: "6 cellules lithium-ion 21700"},
      {label: "Capacité de la batterie", value: "4 000 mAh"},
      {label: "Capacité du bac à poussière", value: "600 mL"},
      {label: "Capacité du réservoir d’eau", value: "380 mL"},
      {label: "Filtration", value: "Double cyclone + HEPA EPA 10"},
      {label: "Vitesse de la tête de lavage", value: "190 tr/min"},
      {label: "Tampons", value: "Microfibre lavable"},
      {label: "Tête de plancher", value: "Brosse motorisée à poils avec 5 DEL"},
      {label: "Tube", value: "Tube pliable en aluminium de 650 mm"},
      {label: "Niveau sonore", value: "≤79 dB"},
      {label: "Entrée de l’adaptateur", value: "100–240 V c.a."},
    ],
  },
};

export function getProducts(locale: string): Record<ProductData["slug"], ProductData> {
  return locale === "fr" ? frenchProducts : products;
}

export function getCollectionProducts(locale: string): ProductData[] {
  const localized = getProducts(locale);
  return collectionProducts.map((product) => localized[product.slug]);
}
