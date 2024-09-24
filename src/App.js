import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [picks, setPicks] = useState([]);  // State to store picks

  // Function to fetch the picks from the API
  const fetchPicks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/picks', {
        method: 'GET', // Setting the HTTP method
        mode: 'cors',  // Ensuring CORS is handled
        headers: {
          'Content-Type': 'application/json'  // Defining the content type
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      setPicks(Object.values(data)); // Convert object to array and store in state
    } catch (error) {
      console.error('Error fetching picks:', error);
    }
  };
  

  // Fetch the picks when the component is mounted
  useEffect(() => {
    fetchPicks();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to BluBet</h1>
        <p>Your daily sports picks in one place!</p>

        <div className="picks-container">
          {/* Map over the picks to create a card for each */}
          {picks.map((pick, index) => (
            <div key={index} className="card bg-base-100 w-96 shadow-xl m-4">
              <figure>
                <img
                  src= "/BluBet_Stock_Photo.jpg"
                  alt={pick.home_team + " vs " + pick.away_team}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {pick.home_team} vs {pick.away_team}
                </h2>
                <p>Best Home Bookmaker: {pick.best_home_bookmaker}</p>
                <p>Best Home Odds: {pick.best_home_odds}</p>
                <p>Best Away Bookmaker: {pick.best_away_bookmaker}</p>
                <p>Best Away Odds: {pick.best_away_odds}</p>
                <p>Sport: {pick.sport}</p>
                <div className="card-actions justify-end">
                  
                  < button className="btn btn-primary" onClick = {() => window.location.href = "https://www.oddschecker.com/us/"} >Bet Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
