import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../";
import { localizer, getMessagesES } from '../../helpers';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';


export const CalendarPage = () => {

  const { user } = useAuthStore();
  const { openDateModal } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');



  const eventStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);


    const style = {
      backgroundColor: isMyEvent ? '#008000' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { style }
  }


  const onSelect = (e) => {
    setActiveEvent(e);
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e);
    setLastView(e);
  }

  useEffect(() => {
    startLoadingEvents();
  }, [])

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={openDateModal}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal />
      <FabAddNew />
      <FabDelete />

    </>
  );
}

