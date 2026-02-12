import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import type { FullCalendarEvent } from '../data/program-schedule';

declare global {
  interface Window {
    __WART_SCHEDULE_EVENTS__?: FullCalendarEvent[];
  }
}

export default function ScheduleCalendar() {
  const [events, setEvents] = useState<FullCalendarEvent[] | null>(null);

  useEffect(() => {
    const loaded = window.__WART_SCHEDULE_EVENTS__;
    setEvents(Array.isArray(loaded) ? loaded : []);
  }, []);

  if (events === null) {
    return <div className="schedule-calendar-wrapper"><p>Loading schedule…</p></div>;
  }

  return (
    <div className="schedule-calendar-wrapper">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: '',
        }}
        slotMinTime="05:00:00"
        slotMaxTime="02:00:00"
        slotDuration="00:30:00"
        allDaySlot={false}
        height="auto"
        events={events ?? []}
        editable={false}
        selectable={false}
        weekends={true}
        firstDay={0}
        nowIndicator={true}
        dayHeaderFormat={{ weekday: 'short' }}
      />
    </div>
  );
}
