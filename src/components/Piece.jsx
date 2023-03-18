import React, { useState } from 'react'

const Piece = ( { obj, pathFinder, clearHighlights, changeCurrentPiece, turn } ) => {

  const [isClicked, setIsClicked] = useState(false)
  let type = obj.occupied


  const handleClick = () => {
    pathFinder(obj)
    if (turn === 1 && (type === 1 || type === 2 || type === 5 || type === 6)) {
      setIsClicked(!isClicked)
      changeCurrentPiece(obj)
      isClicked ? clearHighlights() : null
    } else if (turn === 2 && (type === 3 || type === 4 || type === 7 || type === 8)) {
      setIsClicked(!isClicked)
      changeCurrentPiece(obj)
      isClicked ? clearHighlights() : null
    }

  }

  return (
    <>
      <div
      className={'piece piece' + obj.occupied}
      onClick={() => handleClick()}
      ></div>
    </>
  )
}

export default Piece