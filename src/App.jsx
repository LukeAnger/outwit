import React, { useState, useEffect } from 'react'
import { socket } from './socket'
import { ConnectionManager, ConnectionState, Events, Header, Info, Board } from './components'

const App = () => {

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

    function onGameEvent(event) {
      setGameEvent(previous => [...previous, event]);
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
      {info ? <Info handleInfo={handleInfo} info={info} /> : null}
      <ConnectionState isConnected={isConnected}/>
      <Events events={gameEvent} />
      <ConnectionManager/>
      <Board />
    </section>
  )
}

export default App