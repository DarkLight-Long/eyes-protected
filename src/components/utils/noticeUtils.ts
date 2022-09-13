import { Notification } from 'electron'
/**
 * 系统通知
 * @param title 标题
 * @param body 消息内容
 * @param silent 是否提示音
 * @param timeoutType 超时类型
 */
export default function (title: string, body: string, silent: boolean = false, timeoutType?: 'never' | 'default') :void {
  const notification = new Notification({
    title: title,
    body: body,
    silent,
    timeoutType
  })
  notification.show()
}