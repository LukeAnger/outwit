import React, { useState, useEffect } from 'react'
import { socket } from './socket'
import { ConnectionManager, ConnectionState, Events, Header, Info, Board } from './components'
import { boardGen } from './utils/boardGen.js'
const boardInit = boardGen()

const App = () => {

  const [board, setBoard] = useState(boardInit)
  const [info, setInfo] = useState(true);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [gameEvent, setGameEvent] = useState([]);
  const [showSocketTools, setShowSocketTools] = useState(false); // ctrl + alt + click to show

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

  const handleShowSocketTools = (e) => {
    e.stopPropagation();
    if (e.ctrlKey && e.altKey) { setShowSocketTools(!showSocketTools) }
  }
  return (
    <section id='app' onClick={handleShowSocketTools}>
      <Header handleInfo={handleInfo} />
      {!info ? <Info handleInfo={handleInfo} info={info} /> : null}
      { showSocketTools ? <div style={{position: 'absolute', top: '11%', left: '5%'}}>
        <ConnectionState isConnected={isConnected}/>
        <ConnectionManager/>
      </div> :
      null}

      <Board board={board} setBoard={setBoard}/>
    </section>
  )
}

export default App