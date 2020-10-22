const gameDiv = document.getElementById('gameDiv')
const menuDiv = document.getElementById('menuDiv')
const menuLvlOne = document.getElementById('menuLvlOne')
const menuLvlTwo = document.getElementById('menuLvlTwo')
const backButton = document.getElementById('backButton')
const wordToRead = document.getElementById('wordToRead')
const audioElement = new Audio('./assets/sound/laugh.wav');
let wordList = []

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backButton').addEventListener('click', () => changeWindow(false))
  initMenu()
  wordToRead.addEventListener('click', readWord)
})

/**
 * Initialisation de l'IHM de menu
 */
function initMenu() {
  groupList = new Set(window.jsonDatas.map(elem => elem.group))

  for (let group of groupList) {
    const el = document.createElement('button')
    el.textContent = group
    el.classList.add('menuButton')
    el.addEventListener('click', function () {
      changeGroup(group)
    })
    menuLvlOne.appendChild(el)

    const divGroup = document.createElement('div')
    divGroup.classList.add('groupMenu')
    divGroup.dataset.group = group
    let lvlList = window.jsonDatas.filter(el => el.group === group)

    lvlList.forEach(function (jsonEl) {
      const div = document.createElement('div')
      const el = document.createElement('span')
      el.textContent = jsonEl.name
      const but = document.createElement('button')
      but.textContent = 'Jouer'
      but.classList.add('playButton')
      but.addEventListener('click', function () {
        startGame(jsonEl.mots)
      })

      div.appendChild(el)
      div.appendChild(but)
      divGroup.appendChild(div)
    })
    menuLvlTwo.appendChild(divGroup)
  }
}


/**
 * Gère le changement d'écran entre le menu principal et la fenêtre de jeu
 * @param {Boolean} newGame : true => affiche la fenêtre de jeu ; false => affiche le menu principal
 */
function changeWindow(newGame) {
  if (newGame) {
    gameDiv.classList.add('visible')
    menuDiv.classList.remove('visible')
    backButton.classList.add('visible')
  }
  else {
    gameDiv.classList.remove('visible')
    menuDiv.classList.add('visible')
    backButton.classList.remove('visible')
  }
}

/**
 * Change l'affichage du groupe de niveau
 * @param {String} newGroup : nom du groupe de niveau à afficher
 */
function changeGroup(newGroup) {
  let visible = document.querySelector('.groupVisible')
  if (visible != null) visible.classList.remove('groupVisible')
  document.querySelector(`div[data-group="${newGroup}"]`).classList.add('groupVisible')
}


/**
 * Lancement du niveau sélectionné
 * @param {Array} arr : contient la liste des mots 
 */
function startGame(arr) {
  wordList = [...arr]
  wordList.push('!witch!')
  wordList.shuffle()
  while (wordList[0] === '!witch!')
    wordList.shuffle()
  wordToRead.innerHTML = wordList[0]
  wordToRead.style.font = randomFont()
  wordToRead.setAttribute('name', wordList[0])
  wordToRead.addEventListener('click', readWord)
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
  // const nextIdx = actualIdx === wordList.length - 1 ? -1 : actualIdx + 1

  if (actualIdx < wordList.length - 1) {
    const nextIdx = actualIdx + 1
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
  else {
    alert('Félicitation tu as finis la partie !')
    changeWindow(false)
  }
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
