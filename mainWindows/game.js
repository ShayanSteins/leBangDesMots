const audioElement = new Audio('./assets/sound/laugh.wav');
let wordList = []

wordToRead.addEventListener('click', readWord)

/**
 * Lancement du niveau sélectionné
 * @param {Array} arr : contient la liste des mots 
 */
function startGame(arr) {
  wordList = arr
  wordList.push('!witch!')
  wordList.shuffle()
  while (wordList[0] === '!witch!')
    wordList.shuffle()
  wordToRead.innerHTML = wordList[0]
  wordToRead.style.font = randomFont()
  wordToRead.setAttribute('name', wordList[0])
  changeWindow(true)
}

/**
 * Active la lecture vocale du mot puis appelle changeWord()
 */
function readWord() {
  wordToRead.removeEventListener('click', readWord)
  let utterance = new SpeechSynthesisUtterance(wordToRead.getAttribute('name'));
  utterance.pitch = 0.6
  utterance.rate = 0.7

  if (wordToRead.getAttribute('name') === '!witch!') {
    changeWord()
  }
  else {
    speechSynthesis.speak(utterance)
    utterance.onend = function (e) {
      changeWord()
    }
  }
}

/**
 * Affiche le mot suivant dans la liste désordonnées
 * Gère l'affichage de l'image Sorcière au besoin
 */
function changeWord() {
  const actualIdx = wordList.findIndex((word) => word === wordToRead.getAttribute('name'))
  const nextIdx = actualIdx === wordList.length - 1 ? 0 : actualIdx + 1
  wordToRead.setAttribute('name', wordList[nextIdx])
  wordToRead.style.font = randomFont()

  if (wordList[nextIdx] === '!witch!') {
    wordToRead.innerHTML = '<img alt="Sorcière !" src="./assets/img/witch.png">'
    audioElement.play()
  }
  else {
    wordToRead.innerHTML = wordList[nextIdx]
  }

  wordToRead.addEventListener('click', readWord)
}

/**
 * Sélectionne aléatoirement une police d'écriture
 */
function randomFont() {
  const fontChoice = Math.floor(Math.random() * Math.floor(2))
  if (fontChoice)
    return '6em "CursiveFont", sans-serif'
  else
    return '4em "Comic sans ms"'
}

/**
 * Ajoute la fonction shuffle pour les Array : mélange l'ordre des éléments du tableau
 */
Object.defineProperty(Array.prototype, 'shuffle', {
  value: function () {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
  }
})
