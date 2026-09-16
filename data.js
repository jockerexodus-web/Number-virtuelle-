// ============================================
// TCHATCHIBARA-WEB SCHOOL - Base de données
// Programme officiel du Gabon
// ============================================

const COURS = [
  // ================= 6ème =================
  {
    id: "6e-fr-1", classe: "6ème", matiere: "Français",
    titre: "Le récit : structure et personnages",
    description: "Découvrir la structure du récit et les types de personnages.",
    contenu: `Un récit est une histoire racontée. Il comporte 5 étapes :
1. La situation initiale : le décor et les personnages de départ.
2. L'élément déclencheur : un événement qui bouleverse tout.
3. Les péripéties : les aventures, les obstacles.
4. Le dénouement : la résolution du problème.
5. La situation finale : le nouvel équilibre.

Le narrateur peut être :
- Interne : il raconte à la 1ère personne ("je").
- Externe : il observe de l'extérieur ("il", "elle").
- Omniscient : il sait tout, même les pensées des personnages.

Les personnages : principaux, secondaires, figurants.`,
    exercices: ["Identifier les 5 étapes du récit dans un conte gabonais", "Distinguer narrateur interne et externe dans un extrait"]
  },
  {
    id: "6e-math-1", classe: "6ème", matiere: "Mathématiques",
    titre: "Les nombres décimaux",
    description: "Comparer, ranger et opérer sur les nombres décimaux.",
    contenu: `Un nombre décimal s'écrit avec une partie entière et une partie décimale séparées par une virgule.
Exemple : 12,45 = 12 + 4/10 + 5/100.

Comparer deux décimaux :
- On compare d'abord les parties entières.
- Si elles sont égales, on compare chiffre par chiffre après la virgule.

Opérations :
- Addition : 12,5 + 3,75 = 16,25
- Soustraction : 15,3 - 2,8 = 12,5
- Multiplication : 2,5 × 4 = 10`,
    exercices: ["Ranger 3,45 ; 3,405 ; 3,5 par ordre croissant", "Calculer 12,5 + 3,75"]
  },
  {
    id: "6e-svt-1", classe: "6ème", matiere: "SVT",
    titre: "Les êtres vivants et leur milieu",
    description: "Découvrir les caractéristiques du vivant et les écosystèmes.",
    contenu: `Les êtres vivants partagent 4 caractéristiques : ils naissent, se nourrissent, se reproduisent et meurent.

Un écosystème = un milieu de vie (biotope) + les êtres vivants (biocénose).
Exemples au Gabon : la forêt équatoriale, les mangroves, les savanes.

Chaîne alimentaire : producteurs (plantes) → consommateurs primaires (herbivores) → consommateurs secondaires (carnivores) → décomposeurs.`,
    exercices: ["Construire une chaîne alimentaire de la forêt gabonaise", "Citer 3 écosystèmes du Gabon"]
  },

  // ================= 5ème =================
  {
    id: "5e-fr-1", classe: "5ème", matiere: "Français",
    titre: "La description dans le récit",
    description: "Maîtriser les techniques de la description.",
    contenu: `La description sert à peindre un lieu, un objet ou un personnage.
Elle utilise :
- Des expansions du nom (adjectifs, propositions relatives).
- Les 5 sens (vue, ouïe, odorat, toucher, goût).
- Des figures de style (comparaison, métaphore).

Types de description : réaliste, fantastique, poétique.`,
    exercices: ["Décrire un marché gabonais en 10 lignes", "Repérer les 5 sens dans un texte descriptif"]
  },
  {
    id: "5e-math-1", classe: "5ème", matiere: "Mathématiques",
    titre: "Les fractions",
    description: "Opérations et simplification des fractions.",
    contenu: `Une fraction a/b représente a parts d'un tout divisé en b parts égales.

Addition/soustraction : il faut un dénominateur commun.
Ex : 1/2 + 1/3 = 3/6 + 2/6 = 5/6.

Multiplication : a/b × c/d = (a×c)/(b×d).
Ex : 2/3 × 3/4 = 6/12 = 1/2.

Division : a/b ÷ c/d = a/b × d/c.
Simplification : on divise numérateur et dénominateur par leur PGCD.`,
    exercices: ["Calculer 3/4 + 2/5", "Simplifier 24/36"]
  },

  // ================= 4ème =================
  {
    id: "4e-math-1", classe: "4ème", matiere: "Mathématiques",
    titre: "Puissances et notation scientifique",
    description: "Maîtriser les puissances et l'écriture scientifique.",
    contenu: `a^n = a × a × ... × a (n fois).

Propriétés :
- a^m × a^n = a^(m+n)
- a^m / a^n = a^(m-n)
- (a^m)^n = a^(mn)
- a^0 = 1 ; a^(-n) = 1/a^n

Notation scientifique : a × 10^n avec 1 ≤ a < 10.
Ex : 45000 = 4,5 × 10^4 ; 0,0032 = 3,2 × 10^-3.`,
    exercices: ["Écrire 0,00045 en notation scientifique", "Calculer 10^3 × 10^-5"]
  },
  {
    id: "4e-pc-1", classe: "4ème", matiere: "Physique-Chimie",
    titre: "Les mélanges et corps purs",
    description: "Distinguer mélanges et corps purs.",
    contenu: `Corps pur : une seule substance (ex : eau distillée, fer).
Mélange : plusieurs substances.
- Mélange homogène : on ne distingue pas les constituants (eau salée).
- Mélange hétérogène : on distingue les constituants (eau + sable).

Techniques de séparation :
- Filtration (solide/liquide)
- Décantation (repos)
- Distillation (liquides miscibles)
- Évaporation (sel dissous)`,
    exercices: ["Classer : eau salée, eau + huile, air, fer pur", "Décrire la filtration"]
  },

  // ================= 3ème =================
  {
    id: "3e-math-1", classe: "3ème", matiere: "Mathématiques",
    titre: "Théorème de Thalès",
    description: "Configuration, énoncé et applications du théorème.",
    contenu: `Énoncé : Si (MN) // (BC) dans le triangle ABC avec M ∈ [AB] et N ∈ [AC], alors :
AM/AB = AN/AC = MN/BC.

Application : calculer des longueurs inaccessibles (hauteur d'un arbre, largeur d'une rivière).

Exemple : AM = 3 cm, AB = 7,5 cm, MN = 4 cm.
3/7,5 = 4/BC → BC = (4 × 7,5)/3 = 10 cm.

Réciproque : si AM/AB = AN/AC et M, N alignés, alors (MN) // (BC).`,
    exercices: ["AM=3, AB=7,5, MN=4 → calculer BC", "Vérifier si deux droites sont parallèles"]
  },
  {
    id: "3e-math-2", classe: "3ème", matiere: "Mathématiques",
    titre: "Théorème de Pythagore",
    description: "Calculer des longueurs dans un triangle rectangle.",
    contenu: `Théorème : Dans un triangle rectangle, le carré de l'hypoténuse égale la somme des carrés des deux autres côtés.
BC² = AB² + AC².

Exemple : AB = 3, AC = 4 → BC² = 9 + 16 = 25 → BC = 5.

Réciproque : si BC² = AB² + AC², alors le triangle est rectangle en A.

Application : trigonométrie (cos, sin, tan).`,
    exercices: ["Calculer l'hypoténuse d'un triangle 6-8", "Vérifier si un triangle 5-12-13 est rectangle"]
  },
  {
    id: "3e-pc-1", classe: "3ème", matiere: "Physique-Chimie",
    titre: "Loi d'Ohm",
    description: "Relation entre tension, intensité et résistance.",
    contenu: `La loi d'Ohm s'écrit : U = R × I
- U : tension en volts (V)
- R : résistance en ohms (Ω)
- I : intensité en ampères (A)

Exemple : R = 50 Ω, I = 0,2 A → U = 50 × 0,2 = 10 V.

Cette loi s'applique aux conducteurs ohmiques (résistors).

Association de résistances :
- En série : R = R1 + R2
- En parallèle : 1/R = 1/R1 + 1/R2`,
    exercices: ["R=50 Ω, I=0,2 A → calculer U", "U=12 V, R=6 Ω → calculer I"]
  },
  {
    id: "3e-svt-1", classe: "3ème", matiere: "SVT",
    titre: "La digestion",
    description: "Mécanismes de la digestion chez l'Homme.",
    contenu: `La digestion transforme les aliments en nutriments assimilables.

Étapes :
1. Bouche : mastication + salive (amylase).
2. Œsophage : transport.
3. Estomac : suc gastrique (acide + pepsine).
4. Intestin grêle : absorption des nutriments (villosités).
5. Gros intestin : absorption de l'eau.

Les enzymes digestives : amylase (glucides), protéase (protéines), lipase (lipides).`,
    exercices: ["Décrire le trajet d'un aliment", "Rôle des villosités intestinales"]
  },

  // ================= 2nde =================
  {
    id: "2nde-math-1", classe: "2nde", matiere: "Mathématiques",
    titre: "Équations du second degré",
    description: "Résolution des équations du second degré.",
    contenu: `Forme générale : ax² + bx + c = 0 (a ≠ 0).

Discriminant : Δ = b² - 4ac.
- Si Δ > 0 : deux solutions x₁ = (-b-√Δ)/2a et x₂ = (-b+√Δ)/2a.
- Si Δ = 0 : une solution x = -b/2a.
- Si Δ < 0 : aucune solution réelle.

Exemple : x² - 5x + 6 = 0.
Δ = 25 - 24 = 1 > 0 → x₁ = 2, x₂ = 3.`,
    exercices: ["Résoudre x² - 5x + 6 = 0", "Résoudre 2x² + 3x - 5 = 0"]
  },
  {
    id: "2nde-svt-1", classe: "2nde", matiere: "SVT",
    titre: "La cellule eucaryote",
    description: "Organites cellulaires et leurs rôles.",
    contenu: `La cellule eucaryote possède un noyau délimité par une membrane.

Organites et rôles :
- Noyau : contient l'ADN, contrôle cellulaire.
- Mitochondrie : production d'énergie (respiration).
- Réticulum endoplasmique : synthèse des protéines.
- Appareil de Golgi : maturation et tri des protéines.
- Lysosome : digestion cellulaire.
- Chloroplaste (végétaux) : photosynthèse.
- Vacuole : stockage d'eau (végétaux).`,
    exercices: ["Citer les organites d'une cellule animale", "Comparer cellule animale et végétale"]
  },

  // ================= 1ère =================
  {
    id: "1ere-math-1", classe: "1ère", matiere: "Mathématiques",
    titre: "Les dérivées",
    description: "Notion de dérivée et applications.",
    contenu: `Le nombre dérivé de f en a est la limite du taux d'accroissement :
f'(a) = lim (f(a+h)-f(a))/h quand h → 0.

Interprétation : f'(a) = coefficient directeur de la tangente en a.

Formules :
- (x^n)' = n·x^(n-1)
- (u+v)' = u' + v'
- (uv)' = u'v + uv'
- (u/v)' = (u'v - uv')/v²
- (f∘g)' = g'·f'(g)

Exemple : f(x) = (3x²+1)/(x-2)
f'(x) = (3x² - 12x - 1)/(x-2)².`,
    exercices: ["Calculer f'(2) pour f(x)=x²", "Dériver (3x²+1)/(x-2)"]
  },
  {
    id: "1ere-pc-1", classe: "1ère", matiere: "Physique-Chimie",
    titre: "Mouvement rectiligne uniforme",
    description: "Étude du mouvement à vitesse constante.",
    contenu: `Mouvement rectiligne uniforme : trajectoire droite, vitesse constante.

Vitesse moyenne : v = d/t (m/s ou km/h).
Conversion : 1 m/s = 3,6 km/h.

Équation horaire : x(t) = x₀ + v·t.

Exemple : 200 m en 10 s → v = 20 m/s = 72 km/h.

Mouvement rectiligne uniformément accéléré :
- v(t) = v₀ + a·t
- x(t) = x₀ + v₀·t + ½·a·t²`,
    exercices: ["200 m en 10 s → calculer la vitesse", "Convertir 72 km/h en m/s"]
  },
  {
    id: "1ere-fr-1", classe: "1ère", matiere: "Français",
    titre: "Le commentaire composé",
    description: "Méthodologie complète du commentaire.",
    contenu: `Structure du commentaire composé :
1. Introduction : présentation (auteur, œuvre, extrait), problématique, annonce du plan.
2. Développement : 2 ou 3 axes, chacun avec des citations analysées (procédés + effets).
3. Conclusion : synthèse + ouverture.

Procédés à analyser :
- Figures de style (métaphore, comparaison, anaphore...)
- Champs lexicaux
- Rythme, sonorités
- Énonciation (je, tu, il...)`,
    exercices: ["Commentaire de 'Le Lac' de Lamartine", "Analyser les figures de style d'un poème de Senghor"]
  },

  // ================= Terminale =================
  {
    id: "term-math-1", classe: "Terminale", matiere: "Mathématiques",
    titre: "Calcul intégral",
    description: "Primitives, intégrales et applications.",
    contenu: `Primitive : F est une primitive de f si F' = f.
Toutes les primitives de f sont F + k.

Intégrale : ∫ₐᵇ f(x)dx = F(b) - F(a) (Newton-Leibniz).

Exemple : ∫₀¹ (2x+1)dx = [x² + x]₀¹ = 2.

Applications :
- Calcul d'aires
- Calcul de volumes
- Valeur moyenne d'une fonction

Primitives usuelles :
- ∫x^n dx = x^(n+1)/(n+1) + k
- ∫1/x dx = ln|x| + k
- ∫e^x dx = e^x + k`,
    exercices: ["Calculer ∫₀¹ (2x+1)dx", "Calculer l'aire entre y=x² et l'axe des abscisses sur [0,2]"]
  },
  {
    id: "term-math-2", classe: "Terminale", matiere: "Mathématiques",
    titre: "Nombres complexes",
    description: "Forme algébrique, trigonométrique et exponentielle.",
    contenu: `Un nombre complexe s'écrit z = a + ib (a, b réels, i² = -1).

Module : |z| = √(a² + b²).
Argument : θ = arg(z) tel que a = |z|cos θ, b = |z|sin θ.

Forme trigonométrique : z = |z|(cos θ + i sin θ).
Forme exponentielle : z = |z|e^(iθ).

Formule de Moivre : (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ).

Équation du second degré dans ℂ : Δ < 0 → solutions complexes conjuguées.`,
    exercices: ["Calculer |3+4i|", "Résoudre z² + 1 = 0"]
  },
  {
    id: "term-svt-1", classe: "Terminale", matiere: "SVT",
    titre: "Génétique - Transmission de l'information",
    description: "ADN, ARN, réplication, transcription, traduction.",
    contenu: `L'ADN porte l'information génétique sous forme de gènes.

Structure : double hélice, bases A-T et G-C.

Étapes :
1. Réplication (avant mitose) : copie de l'ADN.
2. Transcription (noyau) : ADN → ARNm.
3. Traduction (cytoplasme) : ARNm → protéine.

Code génétique : triplet de bases (codon) → 1 acide aminé.

Brassages génétiques lors de la méiose :
- Interchromosomique (1ère division)
- Intrachromosomique (crossing-over)`,
    exercices: ["Décrire la synthèse d'une protéine", "Expliquer un brassage interchromosomique"]
  },
  {
    id: "term-philo-1", classe: "Terminale", matiere: "Philosophie",
    titre: "La liberté",
    description: "Analyse philosophique du concept de liberté.",
    contenu: `La liberté : capacité de l'homme à se déterminer lui-même.

Auteurs :
- Descartes : liberté infinie en Dieu, bornée en l'homme.
- Sartre : "L'homme est condamné à être libre" (existentialisme).
- Spinoza : seul le sage est vraiment libre (connaissance).
- Kant : liberté = autonomie de la volonté (obéir à la loi morale).

Problématiques :
- La liberté est-elle une illusion ?
- Sommes-nous responsables de nos actes ?
- Peut-on renoncer à sa liberté ?`,
    exercices: ["La liberté est-elle une illusion ?", "Peut-on renoncer à sa liberté ?"]
  },
  {
    id: "term-eco-1", classe: "Terminale", matiere: "Économie",
    titre: "Le marché et ses mécanismes",
    description: "Offre, demande, prix d'équilibre.",
    contenu: `Le marché est le lieu de rencontre entre l'offre et la demande.

Loi de l'offre : quand le prix augmente, l'offre augmente.
Loi de la demande : quand le prix augmente, la demande diminue.

Prix d'équilibre : offre = demande.

Types de marchés :
- Concurrence pure et parfaite
- Monopole
- Oligopole
- Concurrence monopolistique

Le Gabon, économie pétrolière, est dépendant des marchés mondiaux.`,
    exercices: ["Représenter un équilibre offre/demande", "Analyser l'impact d'une taxe"]
  },
  {
    id: "term-fr-1", classe: "Terminale", matiere: "Français",
    titre: "La dissertation littéraire",
    description: "Méthodologie de la dissertation.",
    contenu: `Structure de la dissertation :
1. Introduction : amener le sujet, poser la problématique, annoncer le plan.
2. Développement : 3 parties (thèse, antithèse, synthèse).
3. Conclusion : bilan + ouverture.

Types de plans :
- Dialectique (thèse/antithèse/synthèse)
- Thématique (3 aspects)
- Analytique (causes/conséquences)

Exemple de sujet : "La littérature africaine est-elle engagée ?"`,
    exercices: ["'La littérature africaine est-elle engagée ?'", "Le roman doit-il être réaliste ?"]
  }
];

const EXERCICES = [
  // Maths
  { id: "ex-m1", classe: "3ème", matiere: "Mathématiques", titre: "Théorème de Thalès",
    enonce: "Dans un triangle ABC, M ∈ [AB] et N ∈ [AC] tels que (MN) // (BC). AM = 3 cm, AB = 7,5 cm, MN = 4 cm. Calculer BC.",
    solution: "D'après Thalès : AM/AB = MN/BC. Donc 3/7,5 = 4/BC → BC = (4 × 7,5)/3 = 10 cm.",
    explication: "Le théorème de Thalès permet de calculer des longueurs avec des droites parallèles." },
  { id: "ex-m2", classe: "3ème", matiere: "Mathématiques", titre: "Pythagore",
    enonce: "Un triangle rectangle a pour côtés de l'angle droit 6 cm et 8 cm. Calculer l'hypoténuse.",
    solution: "BC² = 6² + 8² = 36 + 64 = 100 → BC = 10 cm.",
    explication: "Le carré de l'hypoténuse égale la somme des carrés des deux autres côtés." },
  { id: "ex-m3", classe: "2nde", matiere: "Mathématiques", titre: "Équation du second degré",
    enonce: "Résoudre dans ℝ : x² - 5x + 6 = 0.",
    solution: "Δ = 25 - 24 = 1 > 0. x₁ = (5-1)/2 = 2 ; x₂ = (5+1)/2 = 3. S = {2 ; 3}.",
    explication: "On utilise le discriminant Δ pour trouver les solutions." },
  { id: "ex-m4", classe: "1ère", matiere: "Mathématiques", titre: "Dérivées",
    enonce: "Calculer la dérivée de f(x) = (3x² + 1)/(x - 2).",
    solution: "f'(x) = (3x² - 12x - 1)/(x-2)².",
    explication: "On applique la formule (u/v)' = (u'v - uv')/v²." },
  { id: "ex-m5", classe: "Terminale", matiere: "Mathématiques", titre: "Intégrales",
    enonce: "Calculer ∫₀¹ (2x + 1) dx.",
    solution: "∫₀¹ (2x+1)dx = [x² + x]₀¹ = 2.",
    explication: "On cherche une primitive puis on applique Newton-Leibniz." },
  { id: "ex-m6", classe: "Terminale", matiere: "Mathématiques", titre: "Complexes",
    enonce: "Calculer le module de z = 3 + 4i.",
    solution: "|z| = √(3² + 4²) = √25 = 5.",
    explication: "Le module d'un complexe z = a + bi est √(a² + b²)." },

  // Physique-Chimie
  { id: "ex-p1", classe: "3ème", matiere: "Physique-Chimie", titre: "Loi d'Ohm",
    enonce: "Un conducteur ohmique de résistance R = 50 Ω est traversé par I = 0,2 A. Calculer U.",
    solution: "U = R × I = 50 × 0,2 = 10 V.",
    explication: "La loi d'Ohm relie tension, intensité et résistance : U = R·I." },
  { id: "ex-p2", classe: "1ère", matiere: "Physique-Chimie", titre: "Vitesse",
    enonce: "Un mobile parcourt 200 m en 10 s. Calculer sa vitesse en m/s et km/h.",
    solution: "v = 200/10 = 20 m/s = 20 × 3,6 = 72 km/h.",
    explication: "Pour convertir m/s en km/h, on multiplie par 3,6." },
  { id: "ex-p3", classe: "Terminale", matiere: "Physique-Chimie", titre: "Chimie organique",
    enonce: "Donner la formule semi-développée et brute du butane.",
    solution: "CH₃-CH₂-CH₂-CH₃ ; formule brute C₄H₁₀.",
    explication: "Les alcanes suivent la formule CₙH₂ₙ₊₂." },

  // SVT
  { id: "ex-s1", classe: "Terminale", matiere: "SVT", titre: "Génétique",
    enonce: "Expliquez la transmission de l'information génétique lors de la méiose.",
    solution: "La méiose comporte 2 divisions : 1ère (séparation des homologues, brassage interchromosomique) et 2ème (séparation des chromatides sœurs, brassage intrachromosomique).",
    explication: "Ces brassages assurent la diversité génétique des gamètes." },
  { id: "ex-s2", classe: "2nde", matiere: "SVT", titre: "Cellule",
    enonce: "Citez les organites d'une cellule eucaryote et leur rôle.",
    solution: "Noyau (ADN), mitochondrie (énergie), RE (synthèse protéines), Golgi (maturation), lysosome (digestion), chloroplaste (photosynthèse).",
    explication: "Chaque organite a une fonction précise dans la cellule." },
  { id: "ex-s3", classe: "3ème", matiere: "SVT", titre: "Digestion",
    enonce: "Décrivez le trajet d'un aliment dans le tube digestif.",
    solution: "Bouche → œsophage → estomac → intestin grêle → gros intestin → anus.",
    explication: "Chaque étape transforme les aliments en nutriments assimilables." },

  // Français
  { id: "ex-f1", classe: "1ère", matiere: "Français", titre: "Commentaire composé",
    enonce: "Faites le commentaire composé du poème 'Le Lac' de Lamartine.",
    solution: "I. Intro (auteur, poème, problématique). II. Axe 1 : fuite du temps et nature. III. Axe 2 : souffrance amoureuse. IV. Conclusion + ouverture romantisme.",
    explication: "Le commentaire doit suivre une structure claire avec citations précises." },
  { id: "ex-f2", classe: "Terminale", matiere: "Français", titre: "Dissertation",
    enonce: "'La littérature africaine est-elle engagée ?' Discutez.",
    solution: "I. Oui (Césaire, Senghor, Soyinka). II. Non, certaines œuvres esthétiques. III. Synthèse : engagement et esthétique coexistent.",
    explication: "La littérature africaine reflète les réalités sociales du continent." },

  // Philosophie
  { id: "ex-ph1", classe: "Terminale", matiere: "Philosophie", titre: "La liberté",
    enonce: "La liberté est-elle une illusion ?",
    solution: "I. Déterminisme et inconscient → liberté illusoire. II. Expérience de conscience (Sartre, Descartes). III. Liberté à conquérir (Spinoza, Kant).",
    explication: "La liberté n'est pas donnée mais à construire par un effort permanent." },

  // Économie
  { id: "ex-ec1", classe: "Terminale", matiere: "Économie", titre: "Marché",
    enonce: "Expliquez la formation du prix d'équilibre.",
    solution: "Le prix d'équilibre résulte de la confrontation offre/demande. Si offre > demande → baisse ; si demande > offre → hausse.",
    explication: "Le Gabon, économie pétrolière, est sensible aux prix mondiaux." }
];

const BACS = [
  { id: "bac-a1", serie: "Série A1", nom: "Lettres", matieres: ["Philosophie", "Français", "Histoire-Géographie", "Anglais", "Littérature africaine"] },
  { id: "bac-a2", serie: "Série A2", nom: "Langues", matieres: ["Philosophie", "Français", "Anglais renforcé", "Espagnol/Allemand", "Histoire-Géographie"] },
  { id: "bac-b", serie: "Série B", nom: "Économique", matieres: ["Économie", "Maths appliquées", "Philosophie", "Histoire-Géographie", "Droit"] },
  { id: "bac-c", serie: "Série C", nom: "Mathématiques", matieres: ["Mathématiques", "Physique-Chimie", "SVT", "Philosophie", "Anglais"] },
  { id: "bac-d", serie: "Série D", nom: "Sciences", matieres: ["SVT", "Mathématiques", "Physique-Chimie", "Philosophie", "Anglais"] },
  { id: "bac-e", serie: "Série E", nom: "Technique", matieres: ["Maths techniques", "Physique appliquée", "Construction", "Électrotechnique", "Philosophie"] }
];
