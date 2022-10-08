import { authSlice, onLogin, onLogout, clearErrorMessage } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authStates"
import { testUserCredentials } from "../../fixtures/testUser"


describe('Pruebas en authSlice', () => {

    test('debe de regresar el estado inicial', () => {
          expect(authSlice.getInitialState()).toEqual(initialState)
    })

    test('debe de realizar un login', () => {

        const state = authSlice.reducer(initialState, onLogin(testUserCredentials)) ;
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined
        });
        
    })

    test('debe de realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout('error'));
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: 'error'
        });
    })

    test('debe de limpiar el errorMessage', () => {
        
        let state = authSlice.reducer(authenticatedState, onLogout('error'));
        state = authSlice.reducer(state, clearErrorMessage());
        expect(state.errorMessage).toBe(undefined);
    })
    

})
