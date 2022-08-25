const path = require('path')
const { app, BrowserWindow } = require('electron')

const isDev = process.env.IS_DEV === 'true' ? true : false

const createWindows = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })
  // win.loadURL('http://127.0.0.1:3000')
  // win.webContents.openDevTools()
  if (isDev) {
    win.loadURL('http://127.0.0.1:3000')
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
  if (isDev) {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindows()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindows()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})