import React, { useState, useEffect } from 'react';



function Calendar() {
  const [events, setEvents] = useState([]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextRaces = events.filter(event => new Date(event.date) >= today);
  const nextRace = nextRaces[0];
  useEffect(() => {
    fetch('https://ergast.com/api/f1/current.json')
      .then(response => response.json())
      .then(data => setEvents(data.MRData.RaceTable.Races));
  }, []);

const time = nextRace ? new Date(`2000-01-01T${nextRace.time}`) : null;
const formattedStartTime = time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false}) : null;

console.log(nextRace)
  return (
    <div>
      <h2>F1 Calendar</h2>
      {nextRace && (
           <div key={nextRace.id}>
            <h3>{nextRace.raceName}</h3>
            <p>Circuit: {nextRace.Circuit.circuitName}</p>
            <p>Location: {nextRace.Circuit.Location.locality}, {nextRace.Circuit.Location.country}</p>
            <p>Date: {nextRace.date}</p>
            <p>Time: {formattedStartTime}</p>
          </div>
      )
        
        }
    </div>
  );
}

export default Calendar;