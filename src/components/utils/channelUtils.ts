// 提供页面与electron主进程交流
// electron 暂时只可这样用
const { ipcRenderer } = require('electron')
const { port1, port2 } = new MessageChannel()
ipcRenderer.postMessage('port', null, [port2])

/**
 * 发送消息
 * @param flag 操作标识 
 */
export const sendChannelMsg = (flag: string) => {
  port1.postMessage(flag)
}