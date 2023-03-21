import React, { useState } from 'react'
import Tile from './Tile.jsx'
import { boardGen } from '../utils/boardGen.js'
const boardInit = boardGen()

export const Board = () => {

  const [board, setBoard] = useState(boardInit)
  const [highlighted, setHighlighted] = useState([])
  const [currentPiece, setCurrentPiece] = useState({})
  const [isClicked, setIsClicked] = useState(false)
  const [score, setScore] = useState({ player1: 0, player2: 0 })

  const [turn, setTurn] = useState(1)

  if (score.player1 === 9 || score.player2 === 9) {
    score.player1 === 9 ? alert('Player 1 Wins!') : alert('Player 2 Wins!')
  }

  const changeCurrentPiece = (obj) => {
    setCurrentPiece(obj)
  }


  const pathFinder = (obj) => {
    const path = {
      N: [],
      S: [],
      E: [],
      W: [],
      NW: [],
      NE: [],
      SW: [],
      SE: []
    }

    const dfs = (i, dir, type) => {
      if (i > 90 || i < 0) return
      let edge = "edge" + dir
      if (!board[i].occupied) {
        if ((type === 1 || type === 2) && board[i].zone !== 2) {
            path[dir].push(i)
            return dfs(board[i][edge] - 1, dir, type)

        } else if ((type === 3 || type === 4) && board[i].zone !== 3) {
            path[dir].push(i)
            return dfs(board[i][edge] - 1, dir, type)

        } else if ((type === 5 || type === 6) && board[i].zone === 3) {
            path[dir].push(i)
            return dfs(board[i][edge] - 1, dir, type)

        } else if ((type === 7 || type === 8) && board[i].zone === 2) {
            path[dir].push(i)
            return dfs(board[i][edge] - 1, dir, type)

        }
      }
    }

    if (obj.occupied === 1 || obj.occupied === 3 || obj.occupied === 5 || obj.occupied === 7) {

      dfs(obj.edgeN - 1, "N", obj.occupied)
      dfs(obj.edgeS - 1, "S", obj.occupied)
      dfs(obj.edgeE - 1, "E", obj.occupied)
      dfs(obj.edgeW - 1, "W", obj.occupied)
    } else if (obj.occupied === 2 || obj.occupied === 4 || obj.occupied === 6 || obj.occupied === 8) {
      dfs(obj.edgeN - 1, "N", obj.occupied)
      dfs(obj.edgeS - 1, "S", obj.occupied)
      dfs(obj.edgeE - 1, "E", obj.occupied)
      dfs(obj.edgeW - 1, "W", obj.occupied)
      dfs(obj.edgeNW - 1, "NW", obj.occupied)
      dfs(obj.edgeNE - 1, "NE", obj.occupied)
      dfs(obj.edgeSW - 1, "SW", obj.occupied)
      dfs(obj.edgeSE - 1, "SE", obj.occupied)
    }
    if (obj.occupied === 1 || obj.occupied === 3 || obj.occupied === 5 || obj.occupied === 7) {
      setBoard(board => {
        for (let key in path) {
            if (path[key].length > 0) {
              board[path[key][path[key].length - 1]].highlight = true
            }

        }
        return board
      })
    } else if (obj.occupied === 2 || obj.occupied === 4 || obj.occupied === 6 || obj.occupied === 8) {
      setBoard(board => {
        for (let key in path) {
          for (let i = 0; i < path[key].length; i++) {
            board[path[key][i]].highlight = true
          }
        }
        return board
      })
    }


    if (obj.occupied === 1 || obj.occupied === 3 || obj.occupied === 5 || obj.occupied === 7) {
      for (let key in path) {
        setHighlighted(highlighted => [...highlighted, path[key].pop() + 1])
      }
    } else if (obj.occupied === 2 || obj.occupied === 4 || obj.occupied === 6 || obj.occupied === 8) {
      for (let key in path) {
        for (let i = 0; i < path[key].length; i++) {
          setHighlighted(highlighted => [...highlighted, path[key][i] + 1])
        }
      }
    }


  }

  const movePiece = (obj) => {
    // turn handling is also handled in Piece.jsx in handleClick function
    if (!currentPiece.pos) return // check if there is a piece selected

    let i = board[obj.pos - 1] // assign board index
    let type = currentPiece.occupied // assign piece type


    turn === 1 ? setTurn(turn => turn + 1) : setTurn(turn => turn - 1)

    setBoard(board => {
      board[currentPiece.pos - 1].occupied = null;
      board[obj.pos - 1].occupied = type
      if (obj.zone !== 1 && type < 5) {
        if (obj.zone === 3) {
          setScore(score => ({...score, player1: score.player1 + 1}))
        } else if (obj.zone === 2) {
          setScore(score => ({...score, player2: score.player2 + 1}))
        }
        board[obj.pos - 1].occupied = type + 4
      }
      return board
    })

  }

  const clearHighlights = () => {
    setBoard(board => {
      for (let i = 0; i < board.length; i++) {
        board[i].highlight = false
      }
      return board
    })
    setHighlighted([])
  }


  let highSet = new Set(highlighted)
  return (
    <section id='game'>
      <div className="score">
        <div className="player">
          <div className='playerScore'>
            <h2>Player 1</h2>
            <h3>{score.player1}</h3>
          </div>
          { turn % 2 !==0 ? <div className='piece piece1'></div> : null}

        </div>
        <div className="player">
          { turn % 2 === 0 ? <div className='piece piece3'></div> : null }
          <div className='playerScore'>
            <h2>Player 2</h2>
            <h3>{score.player2}</h3>
          </div>

        </div>
      </div>

      <div className="board">
        {board.map((obj) => (
          <Tile
          obj={obj}
          key={obj.pos}
          board={board}
          turn={turn}
          pathFinder={pathFinder}
          highlighted={highSet}
          movePiece={movePiece}
          currentPiece={currentPiece}
          changeCurrentPiece={changeCurrentPiece}
          clearHighlights={clearHighlights} />
        ))}
      </div>
    </section>
  )
}

export default Board