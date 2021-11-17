import { createSlice} from '@reduxjs/toolkit';


const initialState = {wellDone: false}

const wellDoneSlice = createSlice({
    name: 'wellDoneState',
    initialState: initialState,
    reducers: {
        turnOffWellDone(state) {
            state.wellDone = false
        },
        turnOnWellDone(state) {
            state.wellDone = true
        },

    }
});

export const wellDoneSliceActions = wellDoneSlice.actions


export default wellDoneSlice.reducer