let ws = new WebSocket('ws://localhost:8001/mydemo/webSocket/mingjielong')

ws.onopen = (event) => {
  console.log('连接', event)
}

ws.onclose = (event) => {
  console.log('关闭连接', event)
}

ws.onerror = (event) => {
  console.log('连接异常', event)

  const func = setInterval(() => {
    if (ws.readyState !== 0 && ws.readyState !== 1) {
      ws.close()
      ws = new WebSocket('ws://localhost:8001/mydemo/webSocket/mingjielong')
    } else {
      clearInterval(func)
    }
  }, 3000)
}
export default ws