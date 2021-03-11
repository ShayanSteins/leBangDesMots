# Le Bang des Mots

Version française [ici](README.md).

Serious game to help the learning of reading.

## Table of Content 
1. [Summary](#summary)
2. [Technologies](#technologies)
3. [Configuration](#configuration)
4. [Use](#use)
5. [Legal](#legal)


### Summary

This project is available in two versions:
- a website, on *master* branch
- an Electron app, on *eletron* branch

It is made to help primary school students who's learning how to read. You'll need headphone or speakers.


### Technologies

- HTML 5
- CSS 3
- Javascript (ECMAScript 6)


### Configuration

The application can be configure via [words.js](assets/words.js) file. It's a JSON file containing each level and their description (words lists and classes).
It is structured like this: 

```json
   {
       "name": "Name",
       "group": "Class / level",
       "mots": ["word 1", "word 2", "word 3", "word 4", "..."]
   }
```


### Use

For the **website version**, you'll just need to launch the [index.html](index.html) file.
1. The student choose his class/group, then the level he wants to practice
2. The game start and display the first word (it could be a word, a letter or a whole sentence, depend on the level selected)
3. The student read the word and click on it to obtain the vocal correction. The next word is automatically display.

For the **Electron** version, it's not released yet.


### Legal

This application is under MIT license.
The fonts used are : 
- Comic sans ms
- [Police de caractères cursives A](https://eduscol.education.fr/204/polices-de-caracteres-cursives-pour-l-enseignement-de-l-ecriture) : made available by ministry of national french education.

The witch's sound is available [here](https://lasonotheque.org/). It has been made by Joseph SARDIN, under Creative Commons license. It's the 0489 sound.

The witch's image comes from [Pixabay](https://pixabay.com/fr/vectors/des-animaux-dessin-anim%C3%A9-cat-2027045/).
