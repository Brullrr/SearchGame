import { createSlice} from '@reduxjs/toolkit';


const initialState = {playerName: ''}

const playerNameSlice = createSlice({
    name: 'playerNameState',
    initialState: initialState,
    reducers: {
        changePlayerName(state, action) {
            state.playerName = action.payload
        }

    }
});

export const playerNameSliceActions = playerNameSlice.actions


export default playerNameSlice.reducer