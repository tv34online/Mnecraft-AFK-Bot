const bedrock = require('bedrock-protocol')

function start() {
  const client = bedrock.createClient({
    host: 'timfamily.aternos.me',
    port: 19132,
    username: 'AFK_Bot',
    offline: true
  })

  client.on('join', () => console.log('Зашёл на сервер'))
  client.on('spawn', () => console.log('Заспавнился, стою'))
  client.on('disconnect', (p) => console.log('Кикнут:', p.reason || p))
  client.on('error', (e) => console.log('Ошибка:', e.message))
  client.on('close', () => {
    console.log('Отключился, перезаход через 15 сек...')
    setTimeout(start, 15000)
  })
}

start()
