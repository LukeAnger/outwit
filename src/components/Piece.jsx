import React, { useState } from 'react'

const Piece = ( { obj, pathFinder, clearHighlights, changeCurrentPiece } ) => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
    pathFinder(obj)
    changeCurrentPiece(obj)
    // isClicked ? clearHighlights() : null

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