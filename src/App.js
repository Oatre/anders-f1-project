import React from 'react';
import './App.css';
import Calendar from './Components/Calendar/Calendar.jsx';
import f1Font from './Fonts/Formula1-Regular-1.ttf';
import HeroBanner from './Components/HeroBanner/HeroBanner.jsx';
import BingoTile from './Components/BingoTile/BingoTile.jsx';


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
        <Calendar />
        <HeroBanner />
        <BingoTile />
      </header>
    </div>
  );
}

export default App;
