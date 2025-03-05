let ws = new WebSocket('ws://localhost:8001/mydemo/webSocket/mingjielong')

ws.onopen = (event) => {
  console.log('连接', event)
}

ws.onclose = (event) => {
  console.log('关闭连接', event)
}

ws.onerror = (event) => {
  console.log('连接异常', event)

  var errTimes = 0
  const func = setInterval(() => {
    if (ws.readyState !== 0 && ws.readyState !== 1) {
      errTimes++
      ws.close()
      if (errTimes > 5) {
        console.log('重试连接超5次，不再连接')
        clearInterval(func)
        return
      } else {
        console.log(`重试连接第${errTimes}次`)
        ws = new WebSocket('ws://localhost:8001/mydemo/webSocket/mingjielong')
      }
    } else {
      clearInterval(func)
    }
  }, 3000)
}
export default ws