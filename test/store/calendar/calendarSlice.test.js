import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { calendarWithActiveEventsState, calendarWithEventsState, events, initialState } from "../../fixtures/calendarStates";

describe('Pruebas en el calendarSlice', () => {
    test('debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);
    })
    
    test('onSetActiveEvent debe de activar el evento', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onSetActiveEvent(events[0]));
        expect(state.activeEvent).toEqual(events[0]);

        const newState = calendarSlice.reducer(state, onSetActiveEvent(events[0]));
        expect(newState.events.length).toBe(events.length);
    })

    test('onAddNewEvent debe de agregar el evento ', () => {
        const newEvent = {
            id: "3",
            title: "Fiesta primo",
            notes: "Hay que comprar el pastel",
            start: new Date("2021-10-30 15:00:00"),
            end: new Date("2021-10-30 17:00:00"),
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
        expect(state.events).toEqual([...events, newEvent])
    })

    test('onUpdatedEvent debe de actualizar el evento ', () => {
        const updatedEvent = {
            id: "1",
            title: "Fiesta bro",
            notes: "Hay que comprar el pastel actualizado",
            start: new Date("2022-10-30 15:00:00"),
            end: new Date("2022-10-30 17:00:00"),
        };

        const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
        expect(state.events).toContain(updatedEvent);
    })

    test('onDeleteEvent debe de borrar el evento activo', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onDeleteEvent());
        expect(state.activeEvent).toBe(null);
        expect(state.events).not.toContain(events[0]);
    })

    test('onLoadEvents debe de establecer los eventos', () => {
        const state = calendarSlice.reducer(initialState, onLoadEvents(events[0]));
        expect(state.events).toContain(events[0])
    })

    test('onLogoutCalendar debe de limpiar el estado', () => {
        const state = calendarSlice.reducer(calendarWithActiveEventsState, onLogoutCalendar());
        expect(state).toEqual(initialState);
    })
    
    


    
    
    
})
