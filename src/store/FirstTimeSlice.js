import { createSlice} from '@reduxjs/toolkit';


const initialState = {firstTime: true}

const FirstTimeStateSlice = createSlice({
    name: 'FirstTimeState',
    initialState: initialState,
    reducers: {
        changeToNotFirstTime(state) {
            state.firstTime = false
        }
    }
});

export const FirstTimeStateSliceActions = FirstTimeStateSlice.actions


export default FirstTimeStateSlice.reducer