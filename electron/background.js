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

const notification = (title, body = '', silent = false, timeoutType = 'default') => {
  new Notification({title, body, silent, timeoutType}).show()
}

ipcMain.on('port', (event) => {
  event.ports[0].on('message', (msg) => {
    console.log(msg.data)// log在控制台
    if (msg && msg.data) {
      switch(msg.data.flag) {
        case 'close':
          notification('应用退出提醒', '应用3s后退出')
          setTimeout(() => { app.quit() }, 3000)
          break
        case 'welcome':
          notification('应用启动', '应用启动')
          break
        case 'normal':
          notification(msg.data.msg.title, msg.data.msg.body, true, 'never')
        default:
          notification('未知')
      }
    } else {
      notification('错误')
    }
  })

  event.ports[0].start()
})