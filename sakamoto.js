// ==================================================
// COURS D'INFORMATIQUE — by SAKAMOTO Dev
// Programme conforme au Gabon + initiation au code
// ==================================================

const COURS_INFO = [
    // ============ DÉBUTANT ============
    {
        id:"info-1", niveau:"Débutant", duree:"2h", auteur:"SAKAMOTO Dev",
        titre:"Introduction à l'informatique",
        description:"Découvrir l'ordinateur, son fonctionnement et ses composants.",
        contenu:`🖥️ QU'EST-CE QU'UN ORDINATEUR ?
Un ordinateur est une machine qui traite des informations selon des instructions (programmes).

📦 COMPOSANTS PRINCIPAUX :
• Processeur (CPU) : cerveau, exécute les instructions
• RAM : mémoire vive (temporaire)
• Disque dur / SSD : stockage permanent
• Carte mère : relie tous les composants
• Alimentation : fournit l'énergie

⌨️ PÉRIPHÉRIQUES :
• Entrée : clavier, souris, scanner
• Sortie : écran, imprimante, haut-parleurs
• Entrée/Sortie : écran tactile, modem

💾 UNITÉS DE MESURE :
• 1 octet (o) = 8 bits
• 1 Ko = 1024 octets
• 1 Mo = 1024 Ko
• 1 Go = 1024 Mo
• 1 To = 1024 Go`,
        exercices:["Citer 3 périphériques d'entrée","Convertir 2 Go en Mo"]
    },
    {
        id:"info-2", niveau:"Débutant", duree:"3h", auteur:"SAKAMOTO Dev",
        titre:"Système d'exploitation",
        description:"Windows, Linux, macOS : rôles et utilisation.",
        contenu:`⚙️ RÔLE DU SYSTÈME D'EXPLOITATION :
• Gérer les fichiers et dossiers
• Gérer la mémoire
• Gérer les périphériques
• Lancer les applications

🪟 PRINCIPAUX OS :
• Windows (Microsoft)
• Linux (Ubuntu, Debian, Fedora)
• macOS (Apple)
• Android (mobile)

📁 GESTION DES FICHIERS :
• Dossier = répertoire
• Fichier = document
• Chemin absolu : C:\\Users\\Nom\\Documents
• Chemin relatif : ./Documents

⌨️ RACCOURCIS UTILES :
• Ctrl+C : copier
• Ctrl+V : coller
• Ctrl+X : couper
• Ctrl+Z : annuler
• Ctrl+S : enregistrer`,
        exercices:["Créer une arborescence de dossiers","Maîtriser les raccourcis clavier"]
    },
    {
        id:"info-3", niveau:"Débutant", duree:"2h", auteur:"SAKAMOTO Dev",
        titre:"Internet et navigation web",
        description:"Comprendre le web, les navigateurs et la sécurité.",
        contenu:`🌐 INTERNET vs WEB :
• Internet = réseau mondial
• Web = service sur Internet (pages)

🔍 NAVIGATEURS :
• Chrome, Firefox, Edge, Safari, Opera
• Rôle : afficher les pages HTML

📧 SERVICES INTERNET :
• Email (Gmail, Outlook)
• Réseaux sociaux
• Cloud (Drive, Dropbox)
• Streaming (YouTube, Netflix)

🔒 SÉCURITÉ :
• Mot de passe fort : 12+ caractères, maj, min, chiffres, symboles
• HTTPS = connexion sécurisée
• Attention au phishing !
• Antivirus et mises à jour

💡 AU GABON : les FAI principaux sont Airtel, Moov, Canalbox.`,
        exercices:["Créer un mot de passe fort","Reconnaître un site sécurisé (HTTPS)"]
    },
    {
        id:"info-4", niveau:"Débutant", duree:"4h", auteur:"SAKAMOTO Dev",
        titre:"Bureautique : Word, Excel, PowerPoint",
        description:"Maîtriser les logiciels de bureau essentiels.",
        contenu:`📝 WORD (traitement de texte) :
• Mise en forme (gras, italique, souligné)
• Styles et titres
• Insertion d'images, tableaux
• Enregistrer en .docx ou .pdf

📊 EXCEL (tableur) :
• Cellules (A1, B2...)
• Formules : =A1+B1, =SOMME(A1:A10)
• Fonctions : MOYENNE, SI, RECHERCHEV
• Graphiques

📽️ POWERPOINT (présentation) :
• Diapositives
• Animations et transitions
• Insertion multimédia

🎯 LOGICIELS LIBRES :
• LibreOffice (Writer, Calc, Impress)
• Google Docs, Sheets, Slides`,
        exercices:["Créer un tableau Excel avec formules","Faire une présentation de 5 diapositives"]
    },

    // ============ INTERMÉDIAIRE ============
    {
        id:"info-5", niveau:"Intermédiaire", duree:"6h", auteur:"SAKAMOTO Dev",
        titre:"Algorithmique et logique",
        description:"Apprendre à penser comme un programmeur.",
        contenu:`🧠 QU'EST-CE QU'UN ALGORITHME ?
Une suite finie d'instructions pour résoudre un problème.

📋 STRUCTURE D'UN ALGORITHME :
1. Déclaration des variables
2. Saisie des données
3. Traitement
4. Affichage du résultat

🔤 PSEUDO-CODE :
