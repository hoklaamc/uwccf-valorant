// import React, { useState } from 'react';
// import { Bracket, BracketGame } from 'react-tournament-bracket';
// import { games } from '../data';

// function BracketPage() {
//   const [hoveredTeamId, setHoveredTeamId] = useState(null);
//   const gameComponent = props => {
//     return (
//       <BracketGame
//         {...props}
//         onHoveredTeamIdChange={setHoveredTeamId}
//         onClick={game => {
//           alert('clicked game: ', game.name);
//         }}
//         hoveredTeamId={hoveredTeamId}
//       />
//     );
//   };

//   return <Bracket game={games[0]} GameComponent={gameComponent} />;
// }

// export default BracketPage;
