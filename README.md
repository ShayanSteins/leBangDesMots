# leBangDesMots

Jeu éducatif pour l'apprentissage de la lecture.

## Table des matières 
1. [Informations générales](#informations-générales)
2. [Technologies](#technologies)
3. [Fonctionnement](#fonctionnement)


### Informations générales

Ce projet est disponible est deux versions : 
- en site web, disponible sur la branche master
- en Electron, disponible sur la branche electron

Il aide à l'apprentissage de la lecture pour les primaires.


### Technologies

- HTML 5
- CSS 3
- Javascript (ECMAScript 6)


### Fonctionnement

En ce qui concerne la **version site web**, il suffit de lancer le fichier [index.html](index.html). 
L'application est paramétrable via le fichier [words.js](assets/words.js). Il s'agit de JSON contenant le descriptif de chaque niveau de jeu (liste de mots et classes).
Il se présente sous la forme suivante :

```json
   {
       "name": "Nom",
       "group": "Classe / niveau",
       "mots": ["mot 1", "mot 2", "mot 3", "mot 4", "..."]
   }
```

Pour la version **Electron**, celle-ci n'est pas finalisée pour le moment.
