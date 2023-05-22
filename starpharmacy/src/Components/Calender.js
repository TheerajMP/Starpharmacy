import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
function Calender() {
  const [events, setEvents] = useState([
    { id: '1', title: 'Event 1', start: '2023-04-10' },
    { id: '2', title: 'Event 2', start: '2023-04-15', end: '2023-04-17' }
  ]);

  const handleEventClick = (info) => {
    alert(`Event ${info.event.title} clicked!`);
  };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
      initialView="dayGridMonth"
      weekends={true}
      events={events}
      eventClick={handleEventClick}
    />
  );
}
export default Calender