import React, { useState } from 'react';
//import './App.css';

function Cricket() {
  const [players, setPlayers] = useState([
    { Name: "Player1", Runs: 0, Wickets: 0 },
    { Name: "Player2", Runs: 0, Wickets: 0 },
    { Name: "Player3", Runs: 0, Wickets: 0 },
    { Name: "Player4", Runs: 0, Wickets: 0 },
    { Name: "Player5", Runs: 0, Wickets: 0 },
  ]);

  // Function to update runs
  const updateRuns = (index) => {
    const runs1 = window.prompt("Enter the runs...");
    const runs = parseInt(runs1);
    if (!isNaN(runs)) {
      const updatedPlayers = [...players];
      updatedPlayers[index].Runs += runs;
      setPlayers(updatedPlayers);
    }
  };

  // Function to update wickets
  const updateWickets = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].Wickets += 1;
    setPlayers(updatedPlayers);
  };

  return (
    <div className="container">
      <h1>Player ScoreBoard</h1>

      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Runs</th>
            <th>Wickets</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.Name}</td>
              <td>{player.Runs}</td>
              <td>{player.Wickets}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="button-container">
        {players.map((player, index) => (
          <div key={index} className="button-pair">
            <button onClick={() => updateRuns(index)}>Add Run to {player.Name}</button>
            <button onClick={() => updateWickets(index)}>Wicket for {player.Name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cricket;
