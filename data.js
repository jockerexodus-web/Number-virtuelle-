// ==================================================
// TCHATCHIBARA-WEB SCHOOL — Programme officiel Gabon
// Base de données complète : 6ème → Terminale
// ==================================================

const COURS = [
    // ============ 6ème ============
    { id:"6e-fr-1", classe:"6ème", matiere:"Français", titre:"Le récit et ses étapes",
      description:"Structure d'un récit et types de narrateur.",
      contenu:`Un récit comporte 5 étapes :
1. Situation initiale (décor, personnages)
2. Élément déclencheur (bouleversement)
3. Péripéties (aventures, obstacles)
4. Dénouement (résolution)
5. Situation finale (nouvel équilibre)

Types de narrateur :
• Interne : raconte à la 1ère personne (je)
• Externe : observe de l'extérieur (il/elle)
• Omniscient : sait tout, même les pensées

Personnages : principaux, secondaires, figurants.`,
      exercices:["Identifier les 5 étapes dans un conte gabonais","Distinguer narrateur interne/externe"] },
    { id:"6e-fr-2", classe:"6ème", matiere:"Français", titre:"Les classes grammaticales",
      description:"Nom, verbe, adjectif, adverbe, pronom...",
      contenu:`Les 9 classes grammaticales :
• Nom (commun/propre)
• Déterminant (article, possessif, démonstratif)
• Adjectif qualificatif
• Verbe
• Pronom (personnel, possessif, démonstratif, relatif)
• Adverbe
• Préposition
• Conjonction (coordination, subordination)
• Interjection

Ex : "Le chat noir dort paisiblement sur le canapé."`,
      exercices:["Identifier la classe de chaque mot","Compléter un texte avec les bons déterminants"] },
    { id:"6e-math-1", classe:"6ème", matiere:"Mathématiques", titre:"Les nombres décimaux",
      description:"Comparaison, rangement et opérations.",
      contenu:`Un décimal s'écrit avec une partie entière et une partie décimale.
Ex : 12,45 = 12 + 4/10 + 5/100.

Comparaison : on compare d'abord les parties entières, puis chiffre par chiffre après la virgule.

Opérations :
• Addition : 12,5 + 3,75 = 16,25
• Soustraction : 15,3 - 2,8 = 12,5
• Multiplication : 2,5 × 4 = 10
• Division : 7,5 ÷ 2,5 = 3`,
      exercices:["Ranger 3,45 ; 3,405 ; 3,5","Calculer 12,5 + 3,75"] },
    { id:"6e-math-2", classe:"6ème", matiere:"Mathématiques", titre:"La proportionnalité",
      description:"Tableaux, coefficients et pourcentages.",
      contenu:`Deux grandeurs sont proportionnelles si l'une s'obtient en multipliant l'autre par un coefficient k.

Tableau de proportionnalité :
Quantité | 1  | 3  | 5
Prix     | 2€ | 6€ | 10€

Coefficient : 2€ / 1 = 2.

Pourcentages :
• Prendre 20% de 50 € = 50 × 20/100 = 10 €
• Une remise de 30% sur 80 € → 80 × 0,7 = 56 €`,
      exercices:["Compléter un tableau de proportionnalité","Calculer 35% de 240"] },
    { id:"6e-svt-1", classe:"6ème", matiere:"SVT", titre:"Les êtres vivants et leur milieu",
      description:"Caractéristiques du vivant et écosystèmes.",
      contenu:`4 caractéristiques du vivant : naître, se nourrir, se reproduire, mourir.

Écosystème = biotope (milieu) + biocénose (êtres vivants).
Exemples au Gabon : forêt équatoriale, mangroves, savanes.

Chaîne alimentaire :
Producteurs (plantes) → Herbivores → Carnivores → Décomposeurs.`,
      exercices:["Construire une chaîne alimentaire","Citer 3 écosystèmes gabonais"] },
    { id:"6e-hg-1", classe:"6ème", matiere:"Histoire-Géo", titre:"Le Gabon : relief et climat",
      description:"Découverte de la géographie du Gabon.",
      contenu:`Le Gabon (267 667 km²) est situé en Afrique centrale, traversé par l'équateur.

Relief :
• Plaines côtières à l'ouest
• Plateaux et collines au centre
• Monts au nord-est (Mont Iboundji, 1575 m)

Climat : équatorial (chaud et humide toute l'année).
Végétation : forêt dense, mangroves, savanes.

Villes : Libreville (capitale), Port-Gentil, Franceville, Oyem.`,
      exercices:["Situer le Gabon sur une carte","Décrire le climat équatorial"] },

    // ============ 5ème ============
    { id:"5e-fr-1", classe:"5ème", matiere:"Français", titre:"La description",
      description:"Techniques de la description littéraire.",
      contenu:`La description peint un lieu, un objet, un personnage.

Outils :
• Expansions du nom (adjectifs, propositions relatives)
• Les 5 sens (vue, ouïe, odorat, toucher, goût)
• Figures de style (comparaison, métaphore)

Types : réaliste, fantastique, poétique.

Ex : "Le marché grouillait de vie ; les couleurs éclatantes des pagnes se mêlaient aux odeurs de poisson grillé."`,
      exercices:["Décrire un marché gabonais","Repérer les 5 sens dans un texte"] },
    { id:"5e-math-1", classe:"5ème", matiere:"Mathématiques", titre:"Les fractions",
      description:"Opérations et simplification.",
      contenu:`Une fraction a/b = a parts d'un tout divisé en b parts.

Addition : 1/2 + 1/3 = 3/6 + 2/6 = 5/6
Multiplication : 2/3 × 3/4 = 6/12 = 1/2
Division : a/b ÷ c/d = a/b × d/c

Simplification : diviser numérateur et dénominateur par leur PGCD.
Ex : 24/36 = 2/3.`,
      exercices:["Calculer 3/4 + 2/5","Simplifier 24/36"] },
    { id:"5e-math-2", classe:"5ème", matiere:"Mathématiques", titre:"Les nombres relatifs",
      description:"Addition et soustraction de relatifs.",
      contenu:`Un nombre relatif a un signe (+ ou -).
Ex : -5, +3, -12,5.

Addition :
• Mêmes signes : on additionne et on garde le signe. (-3) + (-5) = -8
• Signes différents : on soustrait et on garde le signe du plus grand. (-7) + 4 = -3

Soustraction : a - b = a + (-b).
Ex : 5 - (-3) = 5 + 3 = 8.`,
      exercices:["Calculer (-8) + 5","Calculer 7 - (-4)"] },
    { id:"5e-pc-1", classe:"5ème", matiere:"Physique-Chimie", titre:"Les états de la matière",
      description:"Solide, liquide, gaz et changements d'état.",
      contenu:`3 états : solide, liquide, gaz.

Changements d'état :
• Fusion (solide → liquide)
• Solidification (liquide → solide)
• Vaporisation (liquide → gaz)
• Liquéfaction (gaz → liquide)
• Sublimation (solide → gaz)

Ex : la glace fond à 0°C, l'eau bout à 100°C (pression normale).`,
      exercices:["Nommer les changements d'état","Décrire le cycle de l'eau"] },
    { id:"5e-svt-1", classe:"5ème", matiere:"SVT", titre:"L'alimentation des êtres vivants",
      description:"Régimes alimentaires et digestion.",
      contenu:`Régimes alimentaires :
• Herbivores (végétaux)
• Carnivores (viande)
• Omnivores (les deux)

La digestion transforme les aliments en nutriments.
Enzymes : amylase (glucides), protéase (protéines), lipase (lipides).

Au Gabon : manioc, plantain, poisson, arachide sont à la base de l'alimentation.`,
      exercices:["Classer des animaux selon leur régime","Décrire la digestion"] },

    // ============ 4ème ============
    { id:"4e-math-1", classe:"4ème", matiere:"Mathématiques", titre:"Puissances et notation scientifique",
      description:"Règles de calcul sur les puissances.",
      contenu:`a^n = a × a × ... × a (n fois)

Propriétés :
• a^m × a^n = a^(m+n)
• a^m / a^n = a^(m-n)
• (a^m)^n = a^(mn)
• a^0 = 1 ; a^(-n) = 1/a^n

Notation scientifique : a × 10^n avec 1 ≤ a < 10.
Ex : 45000 = 4,5 × 10^4
0,0032 = 3,2 × 10^-3`,
      exercices:["Écrire 0,00045 en notation scientifique","Calculer 10^3 × 10^-5"] },
    { id:"4e-math-2", classe:"4ème", matiere:"Mathématiques", titre:"Calcul littéral et équations",
      description:"Développement, factorisation, résolution.",
      contenu:`Développer : k(a+b) = ka + kb
(a+b)(c+d) = ac + ad + bc + bd

Identités remarquables :
• (a+b)² = a² + 2ab + b²
• (a-b)² = a² - 2ab + b²
• (a+b)(a-b) = a² - b²

Résolution d'équation du 1er degré :
2x + 5 = 11 → 2x = 6 → x = 3.`,
      exercices:["Développer (x+3)²","Résoudre 3x - 7 = 8"] },
    { id:"4e-pc-1", classe:"4ème", matiere:"Physique-Chimie", titre:"Mélanges et corps purs",
      description:"Distinguer et séparer les mélanges.",
      contenu:`Corps pur : une seule substance (eau distillée, fer).
Mélange : plusieurs substances.
• Homogène : constituants invisibles (eau salée)
• Hétérogène : constituants visibles (eau + sable)

Séparation :
• Filtration (solide/liquide)
• Décantation (repos)
• Distillation (liquides miscibles)
• Évaporation (sel dissous)`,
      exercices:["Classer des mélanges","Décrire la filtration"] },
    { id:"4e-svt-1", classe:"4ème", matiere:"SVT", titre:"La reproduction sexuée",
      description:"Fécondation et développement.",
      contenu:`Reproduction sexuée = rencontre de 2 gamètes (mâle + femelle).

Chez les végétaux : pollen + ovule → graine.
Chez les animaux : spermatozoïde + ovule → œuf → embryon.

Fécondation :
• Externe (poissons, amphibiens)
• Interne (mammifères, oiseaux)

Développement : ovipare (œuf) ou vivipare (utérus).`,
      exercices:["Comparer ovipare et vivipare","Décrire la pollinisation"] },
    { id:"4e-hg-1", classe:"4ème", matiere:"Histoire-Géo", titre:"Les grands empires africains",
      description:"Ghana, Mali, Songhaï.",
      contenu:`Empire du Ghana (VIIIe-XIe) : or et sel, capitale Koumbi Saleh.
Empire du Mali (XIIIe-XVe) : Soundiata Keïta, Mansa Moussa, Tombouctou.
Empire Songhaï (XVe-XVIe) : Sonni Ali Ber, Askia Mohamed.

Richesse : commerce transsaharien (or, sel, esclaves).
Culture : universités de Tombouctou, manuscrits.`,
      exercices:["Situer les 3 empires dans le temps","Décrire le commerce transsaharien"] },

    // ============ 3ème ============
    { id:"3e-math-1", classe:"3ème", matiere:"Mathématiques", titre:"Théorème de Thalès",
      description:"Configuration et applications.",
      contenu:`Si (MN) // (BC) dans ABC avec M ∈ [AB], N ∈ [AC] :
AM/AB = AN/AC = MN/BC

Ex : AM=3, AB=7,5, MN=4
3/7,5 = 4/BC → BC = 10 cm.

Réciproque : si AM/AB = AN/AC et M,N alignés → (MN)//(BC).

Application : hauteur d'un arbre, largeur d'une rivière.`,
      exercices:["Calculer BC avec Thalès","Vérifier un parallélisme"] },
    { id:"3e-math-2", classe:"3ème", matiere:"Mathématiques", titre:"Théorème de Pythagore",
      description:"Calculs dans le triangle rectangle.",
      contenu:`Dans un triangle rectangle : BC² = AB² + AC²

Ex : AB=3, AC=4 → BC² = 9+16 = 25 → BC = 5.

Réciproque : si BC² = AB² + AC² → triangle rectangle en A.

Trigo :
• cos = adjacent/hypoténuse
• sin = opposé/hypoténuse
• tan = opposé/adjacent

Formule : cos² + sin² = 1.`,
      exercices:["Calculer l'hypoténuse 6-8","Vérifier 5-12-13"] },
    { id:"3e-math-3", classe:"3ème", matiere:"Mathématiques", titre:"Équations et inéquations",
      description:"Résolution du 1er degré.",
      contenu:`Équation : 2x + 5 = 11 → x = 3
Avec dénominateur : (x/2) + 1 = 4 → x/2 = 3 → x = 6

Inéquation : 3x - 2 > 7 → 3x > 9 → x > 3
Attention : si on multiplie/divise par un négatif, on inverse le sens.
-2x > 6 → x < -3.`,
      exercices:["Résoudre 5x - 3 = 12","Résoudre 2x + 1 < 7"] },
    { id:"3e-pc-1", classe:"3ème", matiere:"Physique-Chimie", titre:"Loi d'Ohm",
      description:"Tension, intensité et résistance.",
      contenu:`U = R × I
U (V), R (Ω), I (A)

Ex : R = 50 Ω, I = 0,2 A → U = 10 V.

Associations :
• Série : R = R1 + R2
• Parallèle : 1/R = 1/R1 + 1/R2

Application : circuits électriques domestiques au Gabon.`,
      exercices:["R=50, I=0,2 → U ?","U=12, R=6 → I ?"] },
    { id:"3e-pc-2", classe:"3ème", matiere:"Physique-Chimie", titre:"Les atomes et molécules",
      description:"Structure de la matière.",
      contenu:`Atome = noyau (protons + neutrons) + électrons.

Symbole : A/Z X
• Z = numéro atomique (protons)
• A = nombre de masse (protons + neutrons)

Molécule : assemblage d'atomes.
Ex : H₂O (eau), CO₂ (dioxyde de carbone), CH₄ (méthane).

Ion : atome chargé (perte ou gain d'électrons).`,
      exercices:["Donner la composition de l'atome de carbone","Écrire la formule de l'eau"] },
    { id:"3e-svt-1", classe:"3ème", matiere:"SVT", titre:"La digestion",
      description:"Transformation des aliments.",
      contenu:`Étapes : bouche → œsophage → estomac → intestin grêle → gros intestin → anus.

Enzymes :
• Amylase (glucides) — salive
• Protéase (protéines) — estomac
• Lipase (lipides) — intestin

Absorption : villosités intestinales.
Nutriments : glucose, acides aminés, acides gras.`,
      exercices:["Décrire le trajet d'un aliment","Rôle des villosités"] },
    { id:"3e-hg-1", classe:"3ème", matiere:"Histoire-Géo", titre:"La colonisation de l'Afrique",
      description:"Partage de l'Afrique et résistances.",
      contenu:`Conférence de Berlin (1884-85) : partage de l'Afrique.

Colonisation française en Afrique centrale :
• Brazza explore le Congo (1875-1885)
• Le Gabon devient colonie française (1886)

Résistances : Samory Touré, Lat Dior, Béhanzin.

Indépendances : 1960 (Gabon : 17 août 1960).`,
      exercices:["Expliquer la Conférence de Berlin","Citer des résistants africains"] },

    // ============ 2nde ============
    { id:"2nde-math-1", classe:"2nde", matiere:"Mathématiques", titre:"Équations du second degré",
      description:"Discriminant et solutions.",
      contenu:`Forme : ax² + bx + c = 0 (a≠0)

Δ = b² - 4ac
• Δ>0 : x₁ = (-b-√Δ)/2a ; x₂ = (-b+√Δ)/2a
• Δ=0 : x = -b/2a
• Δ<0 : pas de solution réelle

Ex : x² - 5x + 6 = 0
Δ = 25-24 = 1 → x₁=2, x₂=3.

Factorisation : a(x-x₁)(x-x₂).`,
      exercices:["Résoudre x²-5x+6=0","Résoudre 2x²+3x-5=0"] },
    { id:"2nde-math-2", classe:"2nde", matiere:"Mathématiques", titre:"Fonctions et variations",
      description:"Étude des fonctions.",
      contenu:`Fonction f : x ↦ f(x).

Sens de variation :
• Croissante si x₁<x₂ → f(x₁)<f(x₂)
• Décroissante si x₁<x₂ → f(x₁)>f(x₂)

Fonctions de référence :
• f(x)=x² (parabole)
• f(x)=1/x (hyperbole)
• f(x)=√x

Tableau de variations + courbe.`,
      exercices:["Étudier f(x)=x²-4","Dresser un tableau de variations"] },
    { id:"2nde-math-3", classe:"2nde", matiere:"Mathématiques", titre:"Statistiques",
      description:"Moyenne, médiane, écart-type.",
      contenu:`Série : x₁, x₂, ..., xₙ

Moyenne : x̄ = (Σxᵢ)/n
Médiane : valeur du milieu
Étendue : max - min
Écart-type : σ = √(Σ(xᵢ-x̄)²/n)

Ex : 5, 8, 10, 12, 15
Moyenne = 50/5 = 10
Médiane = 10
Étendue = 10.`,
      exercices:["Calculer la moyenne d'une série","Calculer l'écart-type"] },
    { id:"2nde-pc-1", classe:"2nde", matiere:"Physique-Chimie", titre:"Optique géométrique",
      description:"Réflexion et réfraction de la lumière.",
      contenu:`Lumière : se propage en ligne droite à 3×10⁸ m/s dans le vide.

Réflexion : angle incident = angle réfléchi.
Réfraction : loi de Snell-Descartes
n₁ sin(i₁) = n₂ sin(i₂)

Lentilles minces :
1/OA' - 1/OA = 1/OF'

Ex : lentille convergente, image réelle ou virtuelle.`,
      exercices:["Appliquer Snell-Descartes","Construire une image"] },
    { id:"2nde-svt-1", classe:"2nde", matiere:"SVT", titre:"La cellule eucaryote",
      description:"Organites cellulaires.",
      contenu:`Cellule eucaryote = noyau + cytoplasme + organites.

Organites :
• Noyau : ADN
• Mitochondrie : énergie
• Réticulum endoplasmique : synthèse protéines
• Golgi : maturation
• Lysosome : digestion
• Chloroplaste (végétaux) : photosynthèse
• Vacuole : stockage

Cellule animale vs végétale : paroi + chloroplaste + vacuole chez végétale.`,
      exercices:["Comparer cellule animale/végétale","Rôles des organites"] },
    { id:"2nde-hg-1", classe:"2nde", matiere:"Histoire-Géo", titre:"La Première Guerre mondiale",
      description:"Causes, déroulement, conséquences.",
      contenu:`Causes : nationalismes, alliances, course aux armements, Balkans.

1914-1918 : guerre de tranchées, Verdun, Somme.
1917 : entrée des USA, Révolution russe.
1918 : armistice 11 novembre.

Conséquences :
• Traité de Versailles (1919)
• Disparition de 4 empires
• 10 millions de morts
• SDN créée.`,
      exercices:["Expliquer les causes de la guerre","Analyser le traité de Versailles"] },

    // ============ 1ère ============
    { id:"1ere-math-1", classe:"1ère", matiere:"Mathématiques", titre:"Les dérivées",
      description:"Nombre dérivé et fonctions dérivées.",
      contenu:`f'(a) = lim (f(a+h)-f(a))/h quand h→0.

Interprétation : coefficient directeur de la tangente.

Formules :
• (x^n)' = n·x^(n-1)
• (u+v)' = u' + v'
• (uv)' = u'v + uv'
• (u/v)' = (u'v - uv')/v²

Ex : f(x) = (3x²+1)/(x-2)
f'(x) = (3x²-12x-1)/(x-2)².

Sens de variation : f'>0 → croissante.`,
      exercices:["Calculer f'(2) pour f(x)=x²","Dériver (3x²+1)/(x-2)"] },
    { id:"1ere-math-2", classe:"1ère", matiere:"Mathématiques", titre:"Suites numériques",
      description:"Suites arithmétiques et géométriques.",
      contenu:`Suite arithmétique : u(n+1) = u(n) + r
Terme général : u(n) = u(0) + n×r
Somme : S = n(u(0)+u(n-1))/2

Suite géométrique : u(n+1) = u(n) × q
Terme général : u(n) = u(0) × q^n
Somme : S = u(0)(1-q^n)/(1-q)

Ex : 2, 5, 8, 11... (arith, r=3)
2, 6, 18, 54... (géo, q=3)`,
      exercices:["Calculer u(10) pour u(0)=2 et r=3","Somme des 5 premiers termes"] },
    { id:"1ere-math-3", classe:"1ère", matiere:"Mathématiques", titre:"Trigonométrie",
      description:"Cercle trigonométrique.",
      contenu:`Cercle trigonométrique : rayon 1.

Radian : π rad = 180°.

Valeurs remarquables :
• cos(0)=1, sin(0)=0
• cos(π/2)=0, sin(π/2)=1
• cos(π)=-1, sin(π)=0

Formules :
• cos²+sin²=1
• cos(a+b) = cos a cos b - sin a sin b
• sin(a+b) = sin a cos b + cos a sin b`,
      exercices:["Placer π/3 sur le cercle","Calculer cos(π/4)"] },
    { id:"1ere-pc-1", classe:"1ère", matiere:"Physique-Chimie", titre:"Mouvement rectiligne",
      description:"Vitesse, accélération.",
      contenu:`Vitesse moyenne : v = d/t
Conversion : 1 m/s = 3,6 km/h.

Mouvement rectiligne uniforme (MRU) :
x(t) = x₀ + v·t

Mouvement rectiligne uniformément accéléré (MRUA) :
• v(t) = v₀ + a·t
• x(t) = x₀ + v₀t + ½at²
• v² - v₀² = 2a(x-x₀)

Ex : 200 m en 10 s → v = 20 m/s = 72 km/h.`,
      exercices:["200 m en 10 s → vitesse","MRUA : calculer a"] },
    { id:"1ere-pc-2", classe:"1ère", matiere:"Physique-Chimie", titre:"Chimie : les moles",
      description:"Quantité de matière.",
      contenu:`Mole : quantité de matière (6,02×10²³ entités).

n = m/M
• n : moles (mol)
• m : masse (g)
• M : masse molaire (g/mol)

Concentration : C = n/V
Ex : 5,85 g de NaCl (M=58,5 g/mol) → n = 0,1 mol.

Volume molaire (gaz, CNTP) : Vm = 22,4 L/mol.`,
      exercices:["Calculer n pour 36 g d'eau","Calculer C d'une solution"] },
    { id:"1ere-fr-1", classe:"1ère", matiere:"Français", titre:"Le commentaire composé",
      description:"Méthodologie complète.",
      contenu:`Structure :
1. Introduction (présentation, problématique, plan)
2. Développement (2-3 axes avec citations)
3. Conclusion (synthèse + ouverture)

Procédés à analyser :
• Figures de style (métaphore, anaphore...)
• Champs lexicaux
• Rythme, sonorités
• Énonciation

Conseils : citer précisément, analyser (pas décrire).`,
      exercices:["Commentaire de 'Le Lac' de Lamartine","Analyser un poème de Senghor"] },
    { id:"1ere-hg-1", classe:"1ère", matiere:"Histoire-Géo", titre:"La Guerre froide",
      description:"Bipolarisation du monde (1947-1991).",
      contenu:`Deux blocs :
• USA (capitalisme, OTAN)
• URSS (communisme, Pacte de Varsovie)

Étapes :
• 1947 : doctrine Truman
• 1948-49 : blocus de Berlin
• 1962 : crise de Cuba
• 1989 : chute du mur de Berlin
• 1991 : disparition de l'URSS

Conflits périphériques : Corée, Vietnam, Afghanistan.`,
      exercices:["Expliquer la doctrine Truman","Analyser la crise de Cuba"] },

    // ============ Terminale ============
    { id:"term-math-1", classe:"Terminale", matiere:"Mathématiques", titre:"Calcul intégral",
      description:"Primitives et intégrales.",
      contenu:`Primitive : F' = f → ∫f = F + k.

Newton-Leibniz : ∫ₐᵇ f(x)dx = F(b) - F(a).

Primitives usuelles :
• ∫x^n dx = x^(n+1)/(n+1) + k
• ∫1/x dx = ln|x| + k
• ∫e^x dx = e^x + k

Ex : ∫₀¹ (2x+1)dx = [x²+x]₀¹ = 2.

Applications : aires, volumes, moyennes.`,
      exercices:["Calculer ∫₀¹ (2x+1)dx","Aire entre y=x² et Ox sur [0,2]"] },
    { id:"term-math-2", classe:"Terminale", matiere:"Mathématiques", titre:"Nombres complexes",
      description:"Formes algébrique, trigonométrique, exponentielle.",
      contenu:`z = a + ib (i² = -1).

Module : |z| = √(a²+b²)
Argument : θ tel que a=|z|cosθ, b=|z|sinθ

Forme trigo : z = |z|(cosθ + i sinθ)
Forme expo : z = |z|e^(iθ)

Moivre : (cosθ+i sinθ)^n = cos(nθ)+i sin(nθ)

Équation z²+1=0 → z=±i.`,
      exercices:["Calculer |3+4i|","Résoudre z²+1=0"] },
    { id:"term-math-3", classe:"Terminale", matiere:"Mathématiques", titre:"Fonctions logarithme et exponentielle",
      description:"Propriétés et dérivées.",
      contenu:`ln : ]0,+∞[ → ℝ
• ln(ab) = ln a + ln b
• ln(a/b) = ln a - ln b
• ln(a^n) = n ln a
• (ln x)' = 1/x

exp : ℝ → ]0,+∞[
• e^(a+b) = e^a × e^b
• (e^x)' = e^x
• e^0 = 1, e^1 ≈ 2,718

ln et exp sont réciproques : ln(e^x) = x.`,
      exercices:["Calculer ln(e²)","Dériver f(x)=x·ln(x)"] },
    { id:"term-math-4", classe:"Terminale", matiere:"Mathématiques", titre:"Probabilités",
      description:"Probabilités conditionnelles et lois.",
      contenu:`Probabilité : P(A) ∈ [0,1]

P(A∪B) = P(A)+P(B)-P(A∩B)
P(A∩B) = P(A)×P(B|A)

Loi binomiale : B(n,p)
P(X=k) = C(n,k) × p^k × (1-p)^(n-k)

Espérance : E(X) = np
Variance : V(X) = np(1-p)

Loi normale : N(μ, σ).`,
      exercices:["Calculer P(A∩B)","Loi binomiale : P(X=2)"] },
    { id:"term-svt-1", classe:"Terminale", matiere:"SVT", titre:"Génétique - Transmission",
      description:"ADN, ARN, réplication, traduction.",
      contenu:`ADN : double hélice, bases A-T, G-C.

Étapes :
1. Réplication (avant mitose)
2. Transcription (noyau) : ADN → ARNm
3. Traduction (cytoplasme) : ARNm → protéine

Code génétique : triplet = 1 acide aminé.

Méiose : 2 divisions, brassages :
• Interchromosomique (1ère)
• Intrachromosomique (crossing-over)

Mutation : changement de séquence → diversité.`,
      exercices:["Décrire la synthèse protéique","Expliquer un brassage"] },
    { id:"term-svt-2", classe:"Terminale", matiere:"SVT", titre:"Immunologie",
      description:"Défenses de l'organisme.",
      contenu:`Immunité innée (rapide, non spécifique) :
• Barrières (peau, muqueuses)
• Phagocytose

Immunité adaptative (lente, spécifique) :
• Humorale : lymphocytes B → anticorps
• Cellulaire : lymphocytes T → destruction cellules infectées

Vaccination : mémoire immunitaire.
VIH : destruction des LT4 → immunodéficience.`,
      exercices:["Comparer immunité innée/adaptative","Rôle des anticorps"] },
    { id:"term-pc-1", classe:"Terminale", matiere:"Physique-Chimie", titre:"Ondes et mécanique",
      description:"Ondes progressives.",
      contenu:`Onde : propagation d'une perturbation.

Longueur d'onde : λ = v × T
v : célérité (m/s), T : période (s)

Ondes sonores : mécaniques, besoin d'un milieu.
Ondes lumineuses : électromagnétiques.

Effet Doppler :
f' = f × (v ± vr)/(v ∓ vs)

Réfraction : n₁ sin i₁ = n₂ sin i₂.`,
      exercices:["Calculer λ","Appliquer Doppler"] },
    { id:"term-pc-2", classe:"Terminale", matiere:"Physique-Chimie", titre:"Chimie organique",
      description:"Alcanes, alcènes, fonctions.",
      contenu:`Alcanes : CₙH₂ₙ₊₂ (saturés)
Ex : méthane CH₄, éthane C₂H₆, butane C₄H₁₀.

Alcènes : CₙH₂ₙ (double liaison)
Ex : éthylène C₂H₄.

Alcools : R-OH (éthanol C₂H₅OH)
Acides carboxyliques : R-COOH (acide éthanoïque)
Esters : R-COO-R'

Isomérie : même formule brute, structures différentes.`,
      exercices:["Nommer un alcane","Identifier une fonction"] },
    { id:"term-philo-1", classe:"Terminale", matiere:"Philosophie", titre:"La liberté",
      description:"Concept philosophique.",
      contenu:`Liberté = capacité à se déterminer soi-même.

Auteurs :
• Descartes : liberté infinie en Dieu, bornée en l'homme
• Sartre : "L'homme est condamné à être libre"
• Spinoza : seul le sage est libre
• Kant : autonomie de la volonté

Problématiques :
• La liberté est-elle une illusion ?
• Suis-je responsable de mes actes ?
• Peut-on renoncer à sa liberté ?`,
      exercices:["La liberté est-elle une illusion ?","Suis-je libre ?"] },
    { id:"term-philo-2", classe:"Terminale", matiere:"Philosophie", titre:"La vérité",
      description:"Vérité et connaissance.",
      contenu:`Vérité : adéquation entre pensée et réalité.

Types :
• Vérité de fait (empirique)
• Vérité de raison (logique, math)
• Vérité révélée (foi)

Auteurs :
• Platon : vérité = monde des Idées
• Descartes : évidence, cogito
• Nietzsche : perspectivisme

Problématique : Peut-on tout dire ?`,
      exercices:["La vérité est-elle relative ?","Peut-on douter de tout ?"] },
    { id:"term-eco-1", classe:"Terminale", matiere:"Économie", titre:"Le marché",
      description:"Offre, demande, équilibre.",
      contenu:`Marché = rencontre offre et demande.

Loi de l'offre : prix ↑ → offre ↑
Loi de la demande : prix ↑ → demande ↓

Équilibre : offre = demande.

Types :
• Concurrence pure et parfaite
• Monopole
• Oligopole
• Concurrence monopolistique

Le Gabon : économie pétrolière dépendante des marchés mondiaux.`,
      exercices:["Représenter un équilibre","Impact d'une taxe"] },
    { id:"term-eco-2", classe:"Terminale", matiere:"Économie", titre:"Croissance et développement",
      description:"Indicateurs et théories.",
      contenu:`Croissance : augmentation du PIB.
Développement : amélioration du bien-être (IDH).

Indicateurs :
• PIB (Produit Intérieur Brut)
• IDH (Indice de Développement Humain)
• Taux de pauvreté

Théories :
• Smith : main invisible
• Keynes : intervention de l'État
• Rostow : 5 étapes du développement

Gabon : PIB élevé mais inégalités fortes.`,
      exercices:["Différencier croissance et développement","Analyser l'IDH du Gabon"] },
    { id:"term-fr-1", classe:"Terminale", matiere:"Français", titre:"La dissertation littéraire",
      description:"Méthodologie complète.",
      contenu:`Structure :
1. Introduction : amener le sujet, problématique, plan
2. Développement : 3 parties (thèse/antithèse/synthèse)
3. Conclusion : bilan + ouverture

Types de plans :
• Dialectique
• Thématique
• Analytique

Ex : "La littérature africaine est-elle engagée ?"
I. Oui (Césaire, Senghor)
II. Non (esthétique pure)
III. Synthèse (les deux).`,
      exercices:["Littérature africaine engagée ?","Le roman doit-il être réaliste ?"] }
];

// ================== EXERCICES ==================
const EXERCICES = [
    { id:"ex-m1", classe:"3ème", matiere:"Mathématiques", titre:"Théorème de Thalès",
      enonce:"ABC, M∈[AB], N∈[AC], (MN)//(BC). AM=3, AB=7,5, MN=4. Calculer BC.",
      solution:"3/7,5 = 4/BC → BC = (4×7,5)/3 = 10 cm.",
      explication:"Thalès : les rapports sont égaux dans une configuration de parallèles." },
    { id:"ex-m2", classe:"3ème", matiere:"Mathématiques", titre:"Pythagore",
      enonce:"Triangle rectangle, côtés 6 et 8. Calculer l'hypoténuse.",
      solution:"BC² = 36+64 = 100 → BC = 10 cm.",
      explication:"Le carré de l'hypoténuse = somme des carrés des 2 autres côtés." },
    { id:"ex-m3", classe:"2nde", matiere:"Mathématiques", titre:"Équation 2nd degré",
      enonce:"Résoudre x² - 5x + 6 = 0.",
      solution:"Δ = 1 > 0. x₁=2, x₂=3. S={2;3}.",
      explication:"Δ>0 → 2 solutions." },
    { id:"ex-m4", classe:"1ère", matiere:"Mathématiques", titre:"Dérivée",
      enonce:"Dériver f(x) = (3x²+1)/(x-2).",
      solution:"f'(x) = (3x²-12x-1)/(x-2)².",
      explication:"Formule (u/v)' = (u'v-uv')/v²." },
    { id:"ex-m5", classe:"Terminale", matiere:"Mathématiques", titre:"Intégrale",
      enonce:"Calculer ∫₀¹ (2x+1)dx.",
      solution:"[x²+x]₀¹ = 2.",
      explication:"On utilise Newton-Leibniz." },
    { id:"ex-m6", classe:"Terminale", matiere:"Mathématiques", titre:"Complexes",
      enonce:"Calculer |3+4i|.",
      solution:"√(9+16) = 5.",
      explication:"|z| = √(a²+b²)." },
    { id:"ex-m7", classe:"Terminale", matiere:"Mathématiques", titre:"Logarithme",
      enonce:"Calculer ln(e²) + ln(1).",
      solution:"2 + 0 = 2.",
      explication:"ln(e^x) = x et ln(1) = 0." },
    { id:"ex-m8", classe:"1ère", matiere:"Mathématiques", titre:"Suite arithmétique",
      enonce:"u(0)=2, r=3. Calculer u(10).",
      solution:"u(10) = 2 + 10×3 = 32.",
      explication:"u(n) = u(0) + n×r." },
    { id:"ex-p1", classe:"3ème", matiere:"Physique-Chimie", titre:"Loi d'Ohm",
      enonce:"R=50 Ω, I=0,2 A. Calculer U.",
      solution:"U = R×I = 10 V.",
      explication:"U = R·I." },
    { id:"ex-p2", classe:"1ère", matiere:"Physique-Chimie", titre:"Vitesse",
      enonce:"200 m en 10 s. Calculer v en m/s et km/h.",
      solution:"v = 20 m/s = 72 km/h.",
      explication:"×3,6 pour convertir m/s → km/h." },
    { id:"ex-p3", classe:"Terminale", matiere:"Physique-Chimie", titre:"Mole",
      enonce:"Calculer n pour 36 g d'eau (M=18 g/mol).",
      solution:"n = 36/18 = 2 mol.",
      explication:"n = m/M." },
    { id:"ex-p4", classe:"2nde", matiere:"Physique-Chimie", titre:"Réfraction",
      enonce:"n₁=1, i₁=30°, n₂=1,5. Calculer i₂.",
      solution:"sin i₂ = sin30°/1,5 = 0,333 → i₂ ≈ 19,5°.",
      explication:"Loi de Snell-Descartes." },
    { id:"ex-s1", classe:"Terminale", matiere:"SVT", titre:"Génétique",
      enonce:"Expliquer la transmission de l'information génétique.",
      solution:"Réplication → transcription → traduction.",
      explication:"ADN → ARNm → protéine." },
    { id:"ex-s2", classe:"2nde", matiere:"SVT", titre:"Cellule",
      enonce:"Citer 4 organites et leur rôle.",
      solution:"Noyau (ADN), mitochondrie (énergie), RE (protéines), Golgi (maturation).",
      explication:"Chaque organite a une fonction précise." },
    { id:"ex-s3", classe:"3ème", matiere:"SVT", titre:"Digestion",
      enonce:"Trajet d'un aliment dans le tube digestif.",
      solution:"Bouche → œsophage → estomac → intestin grêle → gros intestin → anus.",
      explication:"Chaque étape transforme les aliments." },
    { id:"ex-f1", classe:"1ère", matiere:"Français", titre:"Commentaire composé",
      enonce:"Commentaire du poème 'Le Lac' de Lamartine.",
      solution:"I. Intro. II. Fuite du temps. III. Souffrance amoureuse. IV. Conclusion.",
      explication:"Structure + citations analysées." },
    { id:"ex-f2", classe:"Terminale", matiere:"Français", titre:"Dissertation",
      enonce:"'La littérature africaine est-elle engagée ?'",
      solution:"I. Oui. II. Non. III. Synthèse.",
      explication:"Plan dialectique classique." },
    { id:"ex-ph1", classe:"Terminale", matiere:"Philosophie", titre:"La liberté",
      enonce:"La liberté est-elle une illusion ?",
      solution:"I. Déterminisme. II. Conscience. III. Conquête.",
      explication:"Dialectique : thèse/antithèse/synthèse." },
    { id:"ex-ec1", classe:"Terminale", matiere:"Économie", titre:"Marché",
      enonce:"Comment se forme le prix d'équilibre ?",
      solution:"Confrontation offre/demande.",
      explication:"Prix tel que O = D." }
];

// ================== ANNALES DU BAC (9 par série) ==================
const BACS = [
    { id:"bac-a1", serie:"Série A1", nom:"Lettres",
      matieres:["Philosophie","Français","Histoire-Géographie","Anglais","Littérature africaine"],
      annales:[
        { annee:"2025", sujets:["Dissertation : La poésie doit-elle être engagée ?","Commentaire : extrait de 'Crépuscule des temps anciens'"] },
        { annee:"2024", sujets:["Dissertation : Le roman est-il le miroir de la société ?","Résumé + discussion d'un texte de Mbolo"] },
        { annee:"2023", sujets:["Dissertation : La littérature africaine face à la colonisation","Commentaire de Senghor"] },
        { annee:"2022", sujets:["Dissertation : L'écrivain a-t-il un rôle social ?","Commentaire de 'L'Enfant noir'"] },
        { annee:"2021", sujets:["Dissertation : Le théâtre africain est-il politique ?","Commentaire de Sony Labou Tansi"] },
        { annee:"2020", sujets:["Dissertation : La femme dans la littérature africaine","Commentaire de Mariama Bâ"] },
        { annee:"2019", sujets:["Dissertation : Poésie et engagement","Commentaire de Césaire"] },
        { annee:"2018", sujets:["Dissertation : Le conte traditionnel a-t-il sa place ?","Commentaire d'un conte gabonais"] },
        { annee:"2017", sujets:["Dissertation : Roman et histoire","Commentaire de 'Batouala'"] }
      ]},
    { id:"bac-a2", serie:"Série A2", nom:"Langues",
      matieres:["Philosophie","Français","Anglais renforcé","Espagnol/Allemand","Histoire-Géographie"],
      annales:[
        { annee:"2025", sujets:["Philo : Le langage trahit-il la pensée ?","Anglais : Essay on African identity"] },
        { annee:"2024", sujets:["Philo : La culture est-elle un héritage ?","Espagnol : Comprensión de texto"] },
        { annee:"2023", sujets:["Philo : Peut-on tout dire ?","Anglais : Translation exercise"] },
        { annee:"2022", sujets:["Philo : L'homme est-il un animal politique ?","Allemand : Textverständnis"] },
        { annee:"2021", sujets:["Philo : Le travail libère-t-il ?","Anglais : Essay on education"] },
        { annee:"2020", sujets:["Philo : La technique est-elle neutre ?","Espagnol : Redacción"] },
        { annee:"2019", sujets:["Philo : L'art est-il utile ?","Anglais : Comprehension"] },
        { annee:"2018", sujets:["Philo : La vérité est-elle relative ?","Allemand : Übersetzung"] },
        { annee:"2017", sujets:["Philo : Faut-il craindre la science ?","Anglais : Essay on tradition"] }
      ]},
    { id:"bac-b", serie:"Série B", nom:"Économique",
      matieres:["Économie","Maths appliquées","Philosophie","Histoire-Géographie","Droit"],
      annales:[
        { annee:"2025", sujets:["Économie : Le Gabon face à la dépendance pétrolière","Maths : Statistiques descriptives"] },
        { annee:"2024", sujets:["Économie : Croissance et développement","Droit : Le contrat de travail"] },
        { annee:"2023", sujets:["Économie : L'inflation et ses conséquences","Maths : Fonctions linéaires"] },
        { annee:"2022", sujets:["Économie : Le commerce international","Droit : La propriété"] },
        { annee:"2021", sujets:["Économie : Chômage et politiques publiques","Maths : Suites"] },
        { annee:"2020", sujets:["Économie : La mondialisation","Droit : Les obligations"] },
        { annee:"2019", sujets:["Économie : Le marché et l'État","Maths : Intérêts composés"] },
        { annee:"2018", sujets:["Économie : Le développement durable","Droit : Le mariage"] },
        { annee:"2017", sujets:["Économie : Monnaie et banque","Maths : Probabilités"] }
      ]},
    { id:"bac-c", serie:"Série C", nom:"Mathématiques",
      matieres:["Mathématiques","Physique-Chimie","SVT","Philosophie","Anglais"],
      annales:[
        { annee:"2025", sujets:["Maths : Étude de f(x)=(2x+1)e^(-x)","PC : Mouvement dans un champ électrique"] },
        { annee:"2024", sujets:["Maths : Nombres complexes + intégrales","PC : Ondes mécaniques"] },
        { annee:"2023", sujets:["Maths : Suites + probabilités","PC : Chimie organique"] },
        { annee:"2022", sujets:["Maths : Fonctions logarithme","PC : Électricité"] },
        { annee:"2021", sujets:["Maths : Équations différentielles","PC : Radioactivité"] },
        { annee:"2020", sujets:["Maths : Géométrie dans l'espace","PC : Thermodynamique"] },
        { annee:"2019", sujets:["Maths : Arithmétique","PC : Optique"] },
        { annee:"2018", sujets:["Maths : Fonctions trigonométriques","PC : Mécanique"] },
        { annee:"2017", sujets:["Maths : Intégrales multiples","PC : Chimie des solutions"] }
      ]},
    { id:"bac-d", serie:"Série D", nom:"Sciences",
      matieres:["SVT","Mathématiques","Physique-Chimie","Philosophie","Anglais"],
      annales:[
        { annee:"2025", sujets:["SVT : Génétique humaine et hérédité","Maths : Analyse"] },
        { annee:"2024", sujets:["SVT : Immunologie et vaccination","PC : Radioactivité"] },
        { annee:"2023", sujets:["SVT : Reproduction et hormones","Maths : Probabilités"] },
        { annee:"2022", sujets:["SVT : Neurophysiologie","PC : Ondes"] },
        { annee:"2021", sujets:["SVT : Génétique mendélienne","Maths : Fonctions"] },
        { annee:"2020", sujets:["SVT : Écosystèmes","PC : Électricité"] },
        { annee:"2019", sujets:["SVT : Digestion et nutrition","Maths : Suites"] },
        { annee:"2018", sujets:["SVT : Respiration cellulaire","PC : Mécanique"] },
        { annee:"2017", sujets:["SVT : Reproduction humaine","Maths : Statistiques"] }
      ]},
    { id:"bac-e", serie:"Série E", nom:"Technique",
      matieres:["Maths techniques","Physique appliquée","Construction","Électrotechnique","Philosophie"],
      annales:[
        { annee:"2025", sujets:["Maths : Équations différentielles","Électrotechnique : Moteur asynchrone"] },
        { annee:"2024", sujets:["Construction : Béton armé","Physique : Thermodynamique"] },
        { annee:"2023", sujets:["Électrotechnique : Transformateur","Maths : Statistiques"] },
        { annee:"2022", sujets:["Construction : Fondations","Physique : Mécanique des fluides"] },
        { annee:"2021", sujets:["Électrotechnique : Circuits triphasés","Maths : Fonctions"] },
        { annee:"2020", sujets:["Construction : Poutres","Physique : Résistance des matériaux"] },
        { annee:"2019", sujets:["Électrotechnique : Alternateur","Maths : Intégrales"] },
        { annee:"2018", sujets:["Construction : Plans","Physique : Électricité"] },
        { annee:"2017", sujets:["Électrotechnique : Moteur DC","Maths : Suites"] }
      ]}
];// ================== COURS INFORMATIQUE SAKAMOTO Dev ==================
const COURS_INFO = [
    { id:"info-1", niveau:"Débutant", duree:"2h", auteur:"SAKAMOTO Dev",
      titre:"Introduction à l'informatique",
      description:"Découvrir l'ordinateur, ses composants et périphériques.",
      contenu:`Un ordinateur est une machine qui traite des informations.
COMPOSANTS : Processeur (CPU), RAM, disque dur, carte mère.
PÉRIPHÉRIQUES : Entrée (clavier, souris), Sortie (écran, imprimante).
UNITÉS : 1 Ko = 1024 o, 1 Mo = 1024 Ko, 1 Go = 1024 Mo.`,
      exercices:["Citer 3 périphériques d'entrée","Convertir 2 Go en Mo"] },
    { id:"info-2", niveau:"Débutant", duree:"3h", auteur:"SAKAMOTO Dev",
      titre:"Système d'exploitation",
      description:"Windows, Linux, macOS : rôles et utilisation.",
      contenu:`RÔLE DE L'OS : gérer fichiers, mémoire, applications.
PRINCIPAUX OS : Windows, Linux, macOS, Android.
RACCOURCIS : Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z, Ctrl+S.`,
      exercices:["Créer une arborescence","Maîtriser les raccourcis"] },
    { id:"info-3", niveau:"Débutant", duree:"2h", auteur:"SAKAMOTO Dev",
      titre:"Internet et navigation web",
      description:"Comprendre le web et la sécurité.",
      contenu:`Internet = réseau mondial ; Web = service sur Internet.
NAVIGATEURS : Chrome, Firefox, Edge, Safari.
SÉCURITÉ : mots de passe forts, HTTPS, attention au phishing.`,
      exercices:["Créer un mot de passe fort","Reconnaître HTTPS"] },
    { id:"info-4", niveau:"Débutant", duree:"4h", auteur:"SAKAMOTO Dev",
      titre:"Bureautique : Word, Excel, PowerPoint",
      description:"Maîtriser les logiciels de bureau.",
      contenu:`WORD : mise en forme, styles, export PDF.
EXCEL : formules =SOMME, MOYENNE, SI ; graphiques.
POWERPOINT : diapositives, animations.`,
      exercices:["Tableau Excel","Présentation 5 diapositives"] },
    { id:"info-5", niveau:"Intermédiaire", duree:"6h", auteur:"SAKAMOTO Dev",
      titre:"Algorithmique et logique",
      description:"Penser comme un programmeur.",
      contenu:`Un algorithme = suite finie d'instructions.
STRUCTURE : déclaration → saisie → traitement → affichage.
STRUCTURES DE CONTRÔLE : SI...SINON, POUR, TANT QUE.`,
      exercices:["Algo moyenne de 3 notes","Algo plus grand de 2 nombres"] },
    { id:"info-6", niveau:"Intermédiaire", duree:"8h", auteur:"SAKAMOTO Dev",
      titre:"Programmation Python (partie 1)",
      description:"Premiers pas avec Python.",
      contenu:`print("Bonjour")
VARIABLES : nom = "Sakamoto", age = 25
CONDITIONS : if/else
BOUCLES : for i in range(10)`,
      exercices:["Afficher 'Bonjour' 10 fois","Somme de 1 à 100"] },
    { id:"info-7", niveau:"Intermédiaire", duree:"8h", auteur:"SAKAMOTO Dev",
      titre:"Programmation Python (partie 2)",
      description:"Fonctions, listes, dictionnaires, fichiers.",
      contenu:`FONCTIONS : def saluer(nom): return ...
LISTES : fruits = ["mangue", "banane"]
DICTIONNAIRES : {"nom": "Biyoghe"}
FICHIERS : open("notes.txt", "w")`,
      exercices:["Fonction moyenne","Gestion de notes"] },
    { id:"info-8", niveau:"Intermédiaire", duree:"6h", auteur:"SAKAMOTO Dev",
      titre:"HTML et CSS : créer un site web",
      description:"Bases du développement web front-end.",
      contenu:`HTML = structure, CSS = style.
<body><h1>Titre</h1><p>Paragraphe.</p></body>
body { font-family: Arial; }
RESPONSIVE : @media (max-width: 768px)`,
      exercices:["Page personnelle","Styliser un formulaire"] },
    { id:"info-9", niveau:"Avancé", duree:"10h", auteur:"SAKAMOTO Dev",
      titre:"JavaScript et bases de données",
      description:"Rendre le web interactif et stocker des données.",
      contenu:`JS : document.getElementById("titre").textContent = "Nouveau";
SQL : CREATE TABLE, INSERT, SELECT.
SGBD : MySQL, PostgreSQL, SQLite.`,
      exercices:["Calculatrice simple","Créer une base d'élèves"] }
];

window.COURS_INFO = COURS_INFO;
