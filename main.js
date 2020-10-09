const { app, BrowserWindow } = require('electron')

function createWindows() {
  const win = new BrowserWindow({
    frame: false,
    width: 1080,
    minWidth: 680,
    height: 840,
    webPreferences: {
      nodeIntegration: true
    }
  })
  //degug
  win.webContents.openDevTools()
  win.maximize()

  win.on('close', () => { win = null })

  win.loadFile('./index.html')
}

app.whenReady().then(createWindows)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})