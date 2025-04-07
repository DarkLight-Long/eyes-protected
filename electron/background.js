const path = require('path')
const { app, BrowserWindow, Menu, ipcMain, Notification } = require('electron')

const isDev = process.env.IS_DEV === 'true' ? true : false

// 创建主窗口
const createMainWindows = () => {
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

// 创建副窗口（TODO 待修改）
const createOtherWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false //处理加载本地文件问题
    }
  })

  if (isDev) {
    // win.loadURL('http://127.0.0.1:3000/otherWin/Live2dCartoon')
    win.loadURL('http://127.0.0.1:3000?otherWin=Live2dCartoon')
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'), {search: 'otherWin=Live2dCartoon'})
  }
  // if (isDev) {
    win.webContents.openDevTools()
  // }
  return win
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  const win = createMainWindows()
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

// 消息通讯
const notification = (title, body = '', silent = false, timeoutType = 'default') => {
  new Notification({title, body, silent, timeoutType}).show()
}

ipcMain.on('port', (event) => {
  event.ports[0].on('message', (msg) => {
    console.log(msg.data)// log在控制台
    if (msg && msg.data) {
      switch(msg.data.flag) {
        case 'close':
          handleClose()
          break
        case 'welcome':
          notification('应用启动', '欢迎使用本应用')
          break
        case 'normal':
          notification(msg.data.msg.title, msg.data.msg.body, true, 'never')
          break
        case 'newWin':
          handleNewWin()
          break
        default:
          notification('未知')
      }
    } else {
      notification('错误')
    }
  })

  event.ports[0].start()
})

// 副窗口初始化
function handleNewWin() {
  if (BrowserWindow.getAllWindows().length === 1) {
    const newWin = createOtherWindow()
    handleTransferWin('newWin')
  } else {
    notification('提醒', '窗口数量已达最大值')
  }
  
}
// 处理切换窗口
function handleTransferWin(flag = null) {
  let isHide = false
  BrowserWindow.getAllWindows().forEach(item => {
    if (item.isVisible() && !isHide ) {
      item.hide()
      isHide = true
      if (flag === null) {
        item.close()
      }
    } else {
      item.show()
    }
  })
}
// 关闭窗口逻辑
function handleClose() {
  if (BrowserWindow.getAllWindows().length === 2) {
    handleTransferWin()
  } else {
    notification('应用退出提醒', '应用3s后退出')
    setTimeout(() => { app.quit() }, 3000)
  }
}