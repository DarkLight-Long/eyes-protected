const path = require('path')
const { app, BrowserWindow, Menu, ipcMain, Notification } = require('electron')

const isDev = process.env.IS_DEV === 'true' ? true : false

const createWindows = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  if (isDev) {
    win.loadURL('http://127.0.0.1:3000')
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }
  if (isDev) {
    win.webContents.openDevTools()
  }
  return win
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  const win = createWindows()
  win.once('ready-to-show', () => {
    win.show()
  })
  
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindows()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('port', (event) => {
  event.ports[0].on('message', (msg) => {
    if (msg && msg.data) {
      switch(msg.data) {
        case 'close': 
          app.quit()
          break
        default:
          console.log(msg.data)// log在控制台
          new Notification({
            title: '提示',
            body: '未知标识' + msg.data
          }).show()
      }
    } else {
      new Notification({
        title: '提示',
        body: '未知标识' + msg.data
      }).show()
    }
  })

  event.ports[0].start()
})