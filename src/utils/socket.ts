import io from 'socket.io-client'

const url = process.env.NODE_ENV === 'development' ? ('http://localhost:3001') : (process.env.SOCKET_URL)

export const socket = io(url)