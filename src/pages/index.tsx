import React, { useState, useEffect } from 'react'
import { Header, Info, Board } from '@/components'
import { boardGen } from '@/utils/boardGen'
import io from 'socket.io-client'

let socket;
const boardInit = boardGen()
const App = () => {

  const [board, setBoard] = useState(boardInit)
  const [info, setInfo] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [gameEvent, setGameEvent] = useState([]);
  const [showSocketTools, setShowSocketTools] = useState(false); // ctrl + alt + click to show

  useEffect(() => { socketInitializer() }, [])

  const socketInitializer = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      setIsConnected(true)
      console.log('Client Connected to Socket')
    })

    socket.on('disconnect', () => {
      setIsConnected(false)
      console.log('Client Disconnected from Socket')
    })

    socket.on('gameEvent', (data) => {
      setBoard(data)
    })
  }

  const boardChangeHandler = (board) => {
    socket.emit('gameEvent', board)
  }

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

      <Board board={board} setBoard={setBoard} boardChangeHandler={boardChangeHandler}/>
    </section>
  )
}

export default App