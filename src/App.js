import React from 'react';
import './App.css';
import Calendar from './calendar.js'; // Import the Calendar component
import f1Font from './Fonts/Formula1-Regular-1.ttf'; // Import the custom F1 font

function App() {
  React.useEffect(() => {
    const f1FontFace = new FontFace('Formula 1', `url(${f1Font})`);
    f1FontFace.load().then(loadedFace => {
      document.fonts.add(loadedFace);
    });
  } , []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to DOWN THE STRAIGHT
          <br />
          a fun and interactive Formula 1 dashboard!
        </p>
        <Calendar /> {/* Use the Calendar component */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
