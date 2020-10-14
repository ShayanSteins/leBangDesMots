const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindows() {
  const win = new BrowserWindow({
    frame: true,
    width: 1080,
    minWidth: 680,
    height: 840,
    icon: path.join(app.getAppPath(), 'assets/img/icon.ico'),
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  win.removeMenu()
  win.loadFile('./index.html')
}

app.whenReady().then(createWindows)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})