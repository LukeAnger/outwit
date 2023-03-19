import React from 'react';

const Info = ({handleInfo}) => {

  return (
    <div id='info'>
      <div id='infoContainer'>
        <button onClick={handleInfo}>X</button>
        <h1>Outwit Rules</h1>
        <ol>
          <li>The first player is assigned randomly.</li>
          <li>A player may move only one chip on a single turn.</li>
          <li>A chip may move in only one direction on a single turn.
            <ul>
              <li>A regular chip must move either horizontally <i>or</i> vertically.</li>
              <li>A power chip may move horizontally, vertically <i>or</i> diagonally.</li>
            </ul>
          </li>
          <li>On a single turn:
            <ul>
              <li>A regular chip must slide <i>as far as it can go.</i> It stops <i>only</i> when it reaches: the edge of the board; another chip of either shade; or the opponent's corner.</li>
              <li>A power chip may slide any number of tiles in one directions. A power chip <i>may</i> stop whenver it wants, but <i>must</i> stop for the same reasons as a regular chip.</li>
            </ul>
          </li>

          <li>No chip, either regular or power may enter their corner.</li>
          <li>Once inside the opponent's corner:
            <ul>
              <li>No chip, either regular or power, may move back into the playing area; and</li>
              <li>Each chip must continue to move as it did before, but remain in the 3 x 3 corner. </li>
            </ul>
          </li>

        </ol>
      </div>
    </div>
  );
}

export default Info;