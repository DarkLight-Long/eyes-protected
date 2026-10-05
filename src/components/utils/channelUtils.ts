// 提供页面与electron主进程交流
// electron 暂时只可这样用
const { ipcRenderer } = require('electron')
const { port1, port2 } = new MessageChannel()
ipcRenderer.postMessage('port', null, [port2])

/**
 * 发送消息
 * @param flag 操作标识 
 */
export const sendChannelMsg = (flag: ChannelMsgFlag, msg: ChannelMsg = new ChannelMsg()) => {
  port1.postMessage({ flag, msg })
  console.log(msg.toString());
  
}

/**
 * 消息标志
 */
export enum ChannelMsgFlag {
  CLOSE = 'close',
  WELCOME = 'welcome',
  NORMAL = 'normal',
  TIP = 'tip',
  NEW_WIN = 'newWin'
}
/**
 * 消息体
 */
export class ChannelMsg {
  title: string = ''
  body: string = ''
  constructor() {}
  toString() {
    let str = ''
    if (this.title != '') {
      str += this.title
    }
    if (this.body != '') {
      str += this.body
    }
    return str
  }
}