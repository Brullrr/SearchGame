import { createSlice} from '@reduxjs/toolkit';


const initialState = {
                        highScores: [],
                        isHighScoresOpen: false
                    }

const highScoresSlice = createSlice({
    name: 'highScoresState',
    initialState: initialState,
    reducers: {
        turnOffhighScores(state) {
            state.isHighScoresOpen = false
        },
        turnOnhighScores(state) {
            state.isHighScoresOpen = true
        },

    }
});

export const highScoresSliceActions = highScoresSlice.actions


export default highScoresSlice.reducer