import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching Chuck Norris joke:', error);
    }
  };

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      <button onClick={fetchJoke}>Get Joke</button>
      {joke && <p>{joke}</p>}
    </div>
  );
}

export default App;
