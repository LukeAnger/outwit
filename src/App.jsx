import React, { useState, useEffect } from 'react'
import { socket } from './socket'
import { LoginButton, LogoutButton, Profile } from './auth'
import { ConnectionManager, ConnectionState, Events, Header, Info, Board } from './components'
import { boardGen } from './utils/boardGen.js'
const boardInit = boardGen()

const App = () => {

  const [board, setBoard] = useState(boardInit)
  const [info, setInfo] = useState(true);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameEvent, setGameEvent] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      console.log('Connected!');
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log('Disconnected!');
    }

    function onGameEvent(newBoard) {
      setBoard(newBoard)
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('gameEvent', onGameEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('gameEvent', onGameEvent);
    }
  }, [])

  const handleInfo = () => {
    setInfo(!info);
  };

  return (
    <section id='app'>
      <Header handleInfo={handleInfo} />
      <LoginButton />
      <LogoutButton />
      <Profile />
      {info ? <Info handleInfo={handleInfo} info={info} /> : null}
      <ConnectionState isConnected={isConnected}/>
      <ConnectionManager/>
      <Board board={board} setBoard={setBoard}/>
    </section>
  )
}

export default App