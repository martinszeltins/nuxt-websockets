const room = 'ROOM'

export default defineWebSocketHandler({
    open(peer) {
        console.log('opened WS', peer)

        peer.subscribe(room)
        peer.publish(room, 'Another peer joined')
    },

    close(peer) {
        console.log('closed WS', peer)
    },

    error(peer, error) {
        console.error('WS error', peer, error)
    },

    message(peer, message) {
        console.log('received WS message', peer, message)

        peer.publish(room, message.text())
    },
})
