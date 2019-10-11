import { webSocket } from 'rxjs/webSocket'

const webSocketInstance = (protocol) => webSocket({url: process.env.REACT_APP_WS_ENDPOINT, protocol: protocol})

export { webSocketInstance }