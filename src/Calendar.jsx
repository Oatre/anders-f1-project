import React, { useState, useEffect } from "react";
import "./calendar.scss";

function Calendar() {
  const [events, setEvents] = useState([]);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const nextRaces = events.filter((event) => new Date(event.date) >= today);
  const nextRace = nextRaces[0];
  const [countdown, setCountdown] = useState(null);
  useEffect(() => {
    fetch("https://ergast.com/api/f1/current.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.MRData.RaceTable.Races));
  }, []);

  const time = nextRace ? new Date(`2000-01-01T${nextRace.time}`) : null;
  const formattedStartTime = time
    ? time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    : null;
  useEffect(() => {
    // Check if there is a next race
    if (nextRace) {
      // Set up an interval to update the countdown every second
      const countdownInterval = setInterval(() => {
        // Get the current time
        const now = new Date();
        // Combine the date and time of the next race
        const eventDate = new Date(nextRace.date + "T" + nextRace.time);
        // Calculate the difference between the event date and the current time
        const diff = eventDate - now;

        // Calculate the days, hours, minutes, and seconds remaining until the event
        const days = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        // Format the countdown string
        setCountdown(
          `${days}d ${hours.toString().padStart(2, "0")}h ${minutes
            .toString()
            .padStart(2, "0")}m ${seconds.toString().padStart(2, "0")}s`
        );
      }, 1000);

      // Clean up the interval when the component unmounts or when the next race changes
      return () => clearInterval(countdownInterval);
    }
  }, [nextRace]);

  console.log(nextRace);
  return (
    <>
      <div className="calendar-event-wrapper">
        <h2>F1 Calendar</h2>
        {nextRace && (
          <div key={nextRace.id}>
            <h3>{nextRace.raceName}</h3>
            <p className="curcuit">Circuit: {nextRace.Circuit.circuitName}</p>
            <p>
              Location: {nextRace.Circuit.Location.locality},{" "}
              {nextRace.Circuit.Location.country}
            </p>
            <p>Date: {nextRace.date}</p>
            <p>Time: {formattedStartTime}</p>
            <p>Time until lights out: {countdown}</p>
          </div>
        )}
      </div>{" "}
      {/* {nextRace && ( //
        <div className="calendar-item" key={nextRace.id}>
          <h3>{nextRace.raceName}</h3>
          <p>Circuit: {nextRace.Circuit.circuitName}</p>
          <p>
            Location: {nextRace.Circuit.Location.locality},{" "}
            {nextRace.Circuit.Location.country}
          </p>
          <p>Date: {nextRace.date}</p>
          <p>Time: {formattedStartTime}</p>
        </div>
      )} */}
    </>
  );
}

export default Calendar;
