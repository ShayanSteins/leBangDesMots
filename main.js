const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindows() {
  const win = new BrowserWindow({
    frame: true,
    width: 1080,
    minWidth: 680,
    height: 840,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  //degug
  win.webContents.openDevTools()

  win.removeMenu()
  win.loadFile('./index.html')
  win.webContents.on('did-finish-load', () => {
    win.webContents.send('ping', 'whoooooooh!')
  })
}

app.whenReady().then(createWindows)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})