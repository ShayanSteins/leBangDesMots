const fs = require('fs')
require('html-tagged-template')

const gameDiv = document.getElementById('gameDiv')
const menuDiv = document.getElementById('menuDiv')
const menuLvlOne = document.getElementById('menuLvlOne')
const menuLvlTwo = document.getElementById('menuLvlTwo')
const backButton = document.getElementById('backButton')
let jsonDatas = null

getDatasFromJson(initMenu)

/**
 * Initialise l'affichage du menu principal à partir du contenu du fichier JSON
 */
function initMenu() {
  groupList = new Set(jsonDatas.map(elem => elem.group))

  for (let group of groupList) {
    const groupButton = html`<button class="menuButton">${group}</button>`
    
    menuLvlOne.appendChild(groupButton)

    const divGroup = html`<div class=${group}></div>`
    let lvlList = jsonDatas.filter(el => el.group === group)
    
    lvlList.forEach(function (jsonEl) {
      const lvlSpan = html`<span>${jsonEl.name}</span>`
      const lvlButton = html`<button class="playButton">Jouer</button>`
      lvlButton.addEventListener('click', function () {
        startGame(jsonEl.mots)
      })

      divGroup.appendChild(lvlSpan)
      divGroup.appendChild(lvlButton)
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
 * Récupère les données du fichier JSON et exécute la fonction de callback
 * @param {Function} callback : fonction de callback 
 */
function getDatasFromJson(callback) {
  const datas = require('./assets/words.json') 
  jsonDatas = datas
  callback()
}