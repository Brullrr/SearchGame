import { createSlice} from '@reduxjs/toolkit';


const initialState = {currentLevel: 'none'}

const levelSelectSlice = createSlice({
    name: 'levelSelectState',
    initialState: initialState,
    reducers: {
        selectLevelEasy(state) {
            state.currentLevel = 'Easy'
        },
        selectLevelNormal(state) {
            state.currentLevel = 'Normal'
        },
        selectLevelHard(state) {
            state.currentLevel = 'Hard'
        }

    }
});

export const levelSelectSliceActions = levelSelectSlice.actions


export default levelSelectSlice.reducer