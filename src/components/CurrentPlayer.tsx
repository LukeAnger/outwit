export const CurrentPlayer = ({ turn }: { turn: number }) => {
  const player = turn % 2 === 0 ? 'Player 1' : 'Player 2';
  return (
    <div id='currentPlayer'>
      <h3>Current Player:</h3>

    </div>
  );
}