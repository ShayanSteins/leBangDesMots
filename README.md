# Le Bang des Mots

Jeu éducatif d'aide à l'apprentissage de la lecture.

## Table des matières 
1. [Informations générales](#informations-générales)
2. [Technologies](#technologies)
3. [Paramétrage](#paramétrage)
4. [Fonctionnement](#fonctionnement)
5. [Legal](#legal)


### Informations générales

Ce projet est disponible en deux versions : 
- en site web, disponible sur la branche *master*
- en Electron, disponible sur la branche *electron*

Il aide à l'apprentissage de la lecture pour les primaires. Il nécessite l'utilisation d'un casque ou de haut-parleurs.


### Technologies

- HTML 5
- CSS 3
- Javascript (ECMAScript 6)


### Paramétrage

L'application est paramétrable via le fichier [words.js](assets/words.js). Il s'agit de JSON contenant le descriptif de chaque niveau de jeu (liste de mots et classes).
Il se présente sous la forme suivante :

```json
   {
       "name": "Nom",
       "group": "Classe / niveau",
       "mots": ["mot 1", "mot 2", "mot 3", "mot 4", "..."]
   }
```


### Fonctionnement

En ce qui concerne la **version site web**, il suffit de lancer le fichier [index.html](index.html). 
1. L'élève choisi sa classe/groupe puis le niveau de son choix sur l'affichage principal.
2. Le jeu commence et affiche le premier mot (qui peut être une simple lettre ou une phrase). 
3. L'élève lit le mot puis clique dessus pour obtenir une correction vocale. Le mot suivant s'affiche tout seul.

Pour la version **Electron**, celle-ci n'est pas finalisée pour le moment.


### Legal

Cette application est sous license MIT.
Les polices d'écritures utilisées sont : 
- Comic sans ms
- [Police de caractères cursives A](#https://eduscol.education.fr/204/polices-de-caracteres-cursives-pour-l-enseignement-de-l-ecriture) : Mise à disposition par le ministère de l'éducation nationale.

Le son de sorcière utilisé est disponible [ici](#https://lasonotheque.org/). Il a été réalisé par Joseph SARDIN, sous licence Creative Commons. Il s'agit du son 0489.

L'image de la sorcière provient de [Pixabay](#https://pixabay.com/fr/vectors/des-animaux-dessin-anim%C3%A9-cat-2027045/).