import { createSlice} from '@reduxjs/toolkit';


const initialState = {gameOngoing: false}

const gameOngoingSlice = createSlice({
    name: 'gameOngoingState',
    initialState: initialState,
    reducers: {
        turnOffGameOngoing(state) {
            state.gameOngoing = false
        },
        turnOnGameOngoing(state) {
            state.gameOngoing = true
        },

    }
});

export const gameOngoingSliceActions = gameOngoingSlice.actions


export default gameOngoingSlice.reducer