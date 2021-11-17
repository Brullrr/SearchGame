import { createSlice} from '@reduxjs/toolkit';


const initialState = {backdrop: true}

const backdropSlice = createSlice({
    name: 'backdropState',
    initialState: initialState,
    reducers: {
        turnOffBackdrop(state) {
            state.backdrop = false
        },
        turnOnBackdrop(state) {
            state.backdrop = true
        },

    }
});

export const backdropSliceActions = backdropSlice.actions


export default backdropSlice.reducer