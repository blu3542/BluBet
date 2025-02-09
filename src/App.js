import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [picks, setPicks] = useState([]);  // State to store picks

  // Function to fetch the picks from the API
  const fetchPicks = async () => {
    try {
      const response = await fetch('https://blubetbackend.onrender.com/api/picks', {
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
    setPicks([["Jayson Tatum", "Under 27.5 Points", "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png"], 
      ["Luka Doncic", "Over 32.5 Points","https://cdn.nba.com/headshots/nba/latest/1040x760/1629029.png"], 
      ["Lebron James", "Over 22.5 Points","https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png" ]])
  }, []);

  //array format: Player name, Player Pick, img link 

  

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Welcome to BluBet!</h1>
            <div class=" top-20 container relative grid grid-cols-3 place-items-center ">
            {picks.map((pick, index) =>(
            
              <div key = {index} className = "card-wrapper w-[320px] h-[450px] overflow-hidden">
                <div className="card-content relative group overflow-hidden w-[320px] h-[450px]">
                    <div className = "absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-500 to-yellow-400-rounded-[20px] opacity-75 group-hover:opacity-100 blur-md transition-opacity duration-700"/>
                    <div className = "absolute top-0 left-0 w-full h-full overflow-hidden">
                      <div className = "absolute top-0 left-0 w-full h-full bg-[#00009C] transition-all duration-500 ease-in-out [clip-path:circle(150px_at_80%_-20%)] group-hover:[clip-path:circle(300px_at_80%_-20%)] group-hover: overflow-hidden"/>
                    </div>
                    <div class="imgContainer absolute group">
                      <img className="translate-y-48 group-hover:translate-y-10 transition-all duration-500"src={pick[2]}/>
                    </div>
                    <div className = "flex flex-col justify-end h-[420px] group">
                      <h2 className = "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">{pick[0]}</h2>
                      <h3 class = "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">Our Pick: {pick[1]}</h3>  
                      <a className = "hidden" href="link to betting platform">Bet Now</a>
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
