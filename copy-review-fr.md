# Revue des textes — `astro/src/i18n/fr.ts`

Feedback marketing/copywriting sur les textes du site Dosimex (version FR).
Date : 2026-03-20.

---

## Verdict global

Le site a un contenu **riche et authentique**, ce qui est rare dans ce marché. La voix est sincère, technique, et crédible. Cependant, le copy oscille entre **ton institutionnel B2B** et **ton conversationnel/personnel** sans vraiment choisir. Plusieurs opportunites de conversion sont sous-exploitees.

---

## 1. Hero — Homepage

```
title: '17 codes de calcul pour la radioprotection'
subtitle: 'Gamma, bêta, neutron, exposition interne, transfert atmosphérique.
           Résultats validés, prise en main immédiate.
           Disponible sous Excel et dans le navigateur.'
```

**Points forts :**
- Le chiffre "17" est concret et differenciateur — bon reflexe
- "Resultats valides" repond a une objection cle (fiabilite)
- "Prise en main immediate" repond a une autre (complexite)

**Points faibles :**
- Le titre est **descriptif mais pas aspirationnel**. Il dit *ce que c'est* mais pas *ce que ca change pour l'utilisateur*. Comparaison marche :
  - Voximetry : "Fighting Cancer. Making it Personal." (emotionnel)
  - Rapid : "Dosimetry Made Simple" (benefice)
  - Dosimex : "17 codes de calcul" (inventaire)
- Le sous-titre empile 3 idees sans hierarchie. L'utilisateur ne sait pas quoi retenir
- "Disponible sous Excel et dans le navigateur" — detail technique qui ne devrait pas etre au meme niveau que la proposition de valeur

**Suggestion :** Separer le *pourquoi* du *comment*. Ex :
- Titre : "La radioprotection, calculee juste" (ou un benefice metier)
- Sous-titre : "17 outils valides MCNP — gamma, beta, neutron, exposition interne. Prise en main immediate."
- Detail technique (Excel/web) en dessous ou dans un badge

---

## 2. Section "Ce que nous proposons" (offers)

```
title: 'Ce que nous proposons'
description: '17 outils couvrant l'essentiel du champ en radioprotection.
              Chaque code est accompagné de sa vidéo explicative
              et de son dossier de validation téléchargeable.'
```

**Probleme :** Le titre est generique. "Ce que nous proposons" pourrait etre sur n'importe quel site. Les concurrents font pareil ("Our Solutions", "What We Do") — c'est un pattern qui fonctionne mais qui ne differencie pas.

**La description est forte** — la mention video + validation telechargeable est un reel differenciateur. Aucun concurrent ne propose ca aussi clairement.

**Les 3 cartes :**
- Card 1 : "Dosimex + Dosismart" — ok mais le titre ne dit pas ce que c'est (un prospect qui decouvre ne comprend pas)
- Card 2 : "Documentation" — sous-utilise. "Valide via MCNP, RayXpert, Microshield et Mercurad" est excellent mais enterre dans la description d'une carte
- Card 3 : "Formations" — "nous adaptant a vos problemes specifiques" est trop vague

---

## 3. Section chiffres (numbers)

```
{ value: '+30 ans', label: "d'expérience" },
{ value: '+1000', label: 'utilisateurs sur le terrain' },
{ value: '17', label: 'codes de calcul' },
```

**Analyse :** C'est exactement le pattern du marche (DOSIsoft fait pareil : 22 ans, 1000+ licences, 600 clients, 60 pays). Ca fonctionne.

**Amelioration possible :**
- "+1000 utilisateurs" est bon. Mais **qui** ? "1000+ utilisateurs dans l'industrie et la sante" serait plus fort
- Ajouter un 4e chiffre geographique ("X pays" ou "X sites nucleaires") si les donnees existent — c'est un standard du marche

---

## 4. Temoignage (opinion)

```
name: 'Jean-Lionel Trolet'
job: 'EAMEA'
text: "J'utilise DOSIMEX, qui me donne totalement satisfaction..."
```

**Point fort :** C'est un vrai temoignage detaille, avec un nom et un poste. Le contenu est specifique ("formations du personnel du ministere des armees", "PCR medicaux"). C'est mieux que ce que font la plupart des concurrents.

**Point faible :** Il n'y a qu'un seul temoignage. DOSIsoft en affiche 3-4 en carrousel. IBA mentionne des logos clients.

**"EAMEA" comme job title** — un acronyme que la plupart des visiteurs ne comprendront pas. Devrait etre developpe ("EAMEA — Ecole des Applications Militaires de l'Energie Atomique").

---

## 5. Section produit / prix (product.pricing)

```
annual: { title: 'Licence annuelle', price: '500€ HT', duration: 'par an' }
triennial: { title: 'Licence 3 ans', price: '1 000€ HT', duration: 'pour 3 ans' }
```

**C'est un enorme differenciateur.** Aucun concurrent n'affiche ses prix. Grove Software a un "Buy Now" mais pas de prix visibles. Afficher 500EUR/an est un geste de transparence rare qui inspire confiance.

**Ameliorations :**
- L'economie "500EUR sur 3 ans" est bien mise en avant
- Mais il manque une **ancre de comparaison**. Le prospect ne sait pas si 500EUR/an c'est cher ou pas. Un concurrent comme Microshield coute ~2000-5000$ pour une licence. Meme une phrase comme "moins de 42EUR/mois" aiderait
- Les features sont identiques entre les deux plans sauf la duree — ca rend le choix trop simple. C'est bien pour la conversion, mais pourrait laisser le prospect se demander s'il manque quelque chose

---

## 6. FAQ (product.faq)

Les questions sont pertinentes mais les reponses sont **trop courtes**. Exemples :

```
question: 'Comment fonctionne l'essai gratuit ?'
answer: 'Essai Dosismart 14 jours, sans engagement, sans carte bancaire.
         Accès à tous les outils de calcul.'
```

C'est factuel mais ca ne rassure pas. Un prospect qui hesite a besoin de savoir :
- Que se passe-t-il apres 14 jours ? (les donnees sont-elles conservees ?)
- Dois-je creer un compte ?
- Y a-t-il un accompagnement pendant l'essai ?

---

## 7. Page "Qui sommes-nous" (about)

**C'est le meilleur contenu du site.** Les deux biographies (Gerald, Alain) sont authentiques, detaillees, et racontent une vraie histoire. La progression "probleme terrain → creation d'outils → produit" est convaincante.

**Problemes :**
- C'est **trop long pour le web**. Chaque bio fait 3 paragraphes denses. Sur mobile, c'est un mur de texte
- Le lien entre les histoires personnelles et la **valeur pour le client** n'est pas explicite. L'epilogue d'Alain le fait bien ("j'ai enfin pu avoir une idee du risque radiologique") mais c'est a la fin
- Il manque un **element de structure** : titres, faits saillants, ou une timeline

**Ce qui fonctionne tres bien :**
- Les noms d'institutions (Marine Nationale, CEA, INSTN, Orano la Hague) sont des trust signals puissants
- "Le retour d'experience terrain a permis d'enrichir les codes en continu" — excellente phrase qui justifie la fiabilite
- L'anecdote d'Alain sur le Mirage IV sans outil de calcul — c'est le genre d'histoire qui reste en tete

---

## 8. Descriptions des partenaires (home.partners)

```
'Une entreprise qui aime les projets. Nous aussi'
'Les seuls en France à savoir crypter Excel. Sans eux nous n'existerions simplement pas'
'Utilisent Dosimex à gogo dans leurs calculs'
```

**Ton trop informel pour du B2B.** "A gogo", "Nous aussi", "Merci" — ca donne une impression artisanale. Ce n'est pas forcement mauvais (ca humanise), mais c'est en decalage avec le reste du site qui est technique et serieux.

**Probleme plus grave :** Ces descriptions parlent de la **relation** avec le partenaire, pas de ce que le partenaire **fait** ou **est**. Un visiteur qui ne connait pas ces logos n'en tire aucune information. Comparer avec DOSIsoft qui affiche CNRS, INSERM, Unicancer — des logos qui parlent d'eux-memes.

---

## 9. CTAs — coherence et strategie

Le site a **trop de variantes de CTA** :
- "Essai gratuit" / "Essai gratuit Dosismart" / "Essayer Dosismart" / "Essayer gratuitement" / "Demarrer l'essai"
- "Demander un devis" / "Nous contacter" / "Voir le produit"
- "Voir les outils" / "Voir tous les outils en detail" / "En savoir plus"

**5 formulations differentes pour le meme essai gratuit.** Ca dilue le message et peut creer de la confusion. Les meilleurs sites utilisent 1-2 CTAs maximum, toujours formules de la meme facon.

**Suggestion :** Normaliser sur 3 CTAs :
1. Primaire : "Essai gratuit 14 jours" (toujours identique)
2. Secondaire : "Demander un devis" (toujours identique)
3. Tertiaire : "En savoir plus" (pour le detail)

---

## 10. SEO — meta descriptions

Les meta descriptions sont **techniquement bonnes** (longueur correcte, mots-cles present) mais un peu plates :

```
home: 'Dosimex : 17 outils de calculs pour la radioprotection.
       Dose gamma, bêta, neutron, exposition interne et transfert atmosphérique.'
```

Ca decrit. Ca ne vend pas. Il manque le **declencheur de clic** — la raison pour laquelle quelqu'un choisirait ce resultat plutot qu'un autre. Ex : ajouter "Essai gratuit" ou "A partir de 500EUR/an" ou "Valide MCNP" dans la meta description pour se differencier dans les SERP.

---

## Resume des actions prioritaires

| Priorite | Action | Impact |
|----------|--------|--------|
| Haute | Reformuler le hero : benefice metier avant inventaire technique | Premiere impression |
| Haute | Normaliser les CTAs (1 formulation par action) | Clarte conversion |
| Moyenne | Developper les reponses FAQ (rassurer le prospect hesitant) | Conversion essai |
| Moyenne | Developper "EAMEA" + ajouter 2-3 temoignages | Trust / social proof |
| Moyenne | Reformuler descriptions partenaires (qui ils sont, pas la relation) | Credibilite |
| Basse | Structurer les bios "about" (titres, highlights, plus court) | Lisibilite mobile |
| Basse | Enrichir les meta descriptions avec des declencheurs de clic | SEO CTR |
