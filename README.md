# Prompteur de poche

Un prompteur (téléprompteur) qui tient dans une page web, à poser sur le téléphone
pendant que vous vous enregistrez. Rien à installer depuis un magasin d'applications,
pas de compte, pas d'abonnement, pas de filigrane.

**→ [Ouvrir le prompteur](https://nitrorodeo.github.io/prompteur/)**

Sur le téléphone : ouvrez ce lien, puis *Partager → Ajouter à l'écran d'accueil*.
Il s'installe comme une application et fonctionne ensuite sans connexion.

## Ce qu'il fait

- **Vitesse en mots par minute**, l'unité des plateaux de tournage. Entre 130 et 160
  pour un débit naturel face caméra.
- **Durée annoncée** pour chaque texte à la vitesse choisie : vous savez avant de
  tourner si votre script fait 40 secondes ou 3 minutes.
- **Un seul geste** : à l'ouverture, l'application reprend votre dernier texte avec la
  caméra déjà prête. Vous touchez *Lire*, le décompte 3-2-1 tourne, et la prise démarre
  en même temps que le défilement. Vous touchez *Pause*, elle s'arrête et s'affiche.
- **Vidéo prête à publier, sans compresseur** : format vertical 1080 × 1920 par défaut
  (Reels, TikTok, Shorts), ou portrait 4:5, carré, paysage. L'encodage se règle tout seul —
  codec le plus efficace que sait écrire le téléphone, débit calculé pour un plan fixe —
  autour de 20 Mo par minute. Le cadre réellement filmé est matérialisé à l'écran.
- **Mode caméra** : votre visage en plein écran, le texte qui défile par-dessus, et
  l'enregistrement vidéo intégré. Le texte n'apparaît pas dans la vidéo enregistrée.
- **Repère de regard** réglable en hauteur, à placer au plus près de l'objectif.
- **Toucher pour lire ou mettre en pause**, **glisser pour se repositionner**.
- Décompte 3-2-1, miroir horizontal et vertical pour les montages à miroir sans tain,
  taille, interligne, largeur de colonne, assombrissement de l'image.
- **Écran maintenu allumé** pendant la lecture.
- **Bibliothèque de textes** et import de fichiers `.txt`.
- Télécommande Bluetooth de type clavier : espace lit et met en pause, flèches
  haut et bas règlent la vitesse.

## Vie privée

Vos textes et vos réglages restent dans le navigateur du téléphone. Rien n'est envoyé
nulle part : il n'y a ni serveur, ni compte, ni statistiques. Les vidéos enregistrées
sont écrites directement dans les téléchargements de votre téléphone.

## Limite connue

La caméra n'est accessible qu'à une page servie en **https** — d'où cet hébergement.
Un fichier ouvert depuis les fichiers du téléphone affiche bien le texte, mais la
caméra y est bloquée, surtout sur iPhone.

Afficher un prompteur *par-dessus l'application caméra du téléphone* est impossible
depuis une page web : seule une application Android native avec la permission de
surimpression le permet.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | tout le logiciel : interface, défilement, caméra, enregistrement |
| `manifest.webmanifest` | installation sur l'écran d'accueil |
| `sw.js` | fonctionnement hors ligne |

Aucune dépendance, aucune compilation. Pour le modifier, ouvrez `index.html`.
