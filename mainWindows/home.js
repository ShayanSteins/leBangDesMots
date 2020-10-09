const gameDiv = document.getElementById('gameDiv')
const menuDiv = document.getElementById('menuDiv')
const menuLvlOne = document.getElementById('menuLvlOne')
const menuLvlTwo = document.getElementById('menuLvlTwo')
const backButton = document.getElementById('backButton')

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('backButton').addEventListener('click', () => changeWindow(false))
  initMenu()
})

/**
 * Initialise l'affichage du menu principal à partir du contenu du fichier JSON
 */
function initMenu() {
  groupList = new Set(window.datas.map(elem => elem.group))

  for (let group of groupList) {
    const groupButton = html`<button class="menuButton">${group}</button>`
    groupButton.addEventListener('click', () => changeGroup(group))

    menuLvlOne.appendChild(groupButton)

    const divGroup = html`<div data-group="${group}" class="groupMenu"></div>`
    let lvlList = window.datas.filter(el => el.group === group)

    lvlList.forEach(function (jsonEl) {
      const div = document.createElement('div')
      const lvlSpan = html`<span>${jsonEl.name}</span>`
      const lvlButton = html`<button class="playButton">Jouer</button>`
      lvlButton.addEventListener('click', () => startGame(jsonEl.mots))

      div.appendChild(lvlSpan)
      div.appendChild(lvlButton)
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
 * Change l'affichage des niveaux pour le groupe donné
 * @param {String} newGroup : nom du groupe
 */
function changeGroup(newGroup) {
  let visible = document.querySelector('.groupVisible')
  if (visible != null) visible.classList.remove('groupVisible')
  document.querySelector(`div[data-group="${newGroup}"]`).classList.add('groupVisible')
}

