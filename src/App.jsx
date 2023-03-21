import React, {useState} from 'react'
import Board from './components/Board.jsx'
import Header from './components/Header.jsx'
import Info from './components/Info.jsx'

const App = () => {

  const [info, setInfo] = useState(true);

  const handleInfo = () => {
    setInfo(!info);
  };

  return (
    <section id='app'>
      <Header handleInfo={handleInfo} />
      {info ? <Info handleInfo={handleInfo} info={info} /> : null}
      <Board />
    </section>
  )
}

export default App