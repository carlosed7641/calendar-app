export const events = [
  {
    id: "1",
    title: "Fiesta hermano",
    notes: "Hay que comprar el pastel",
    start: new Date("2022-10-30 15:00:00"),
    end: new Date("2022-10-30 17:00:00"),
  },
  {
    id: "2",
    title: "Graduacion hermano",
    notes: "Hay que comprar el smoking",
    start: new Date("2022-11-03 15:00:00"),
    end: new Date("2022-11-03 17:00:00"),
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null
};

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
};

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
};
