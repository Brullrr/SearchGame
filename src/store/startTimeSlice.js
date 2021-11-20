import { createSlice} from '@reduxjs/toolkit';


const initialState = {startTime: true}

const startTimeSlice = createSlice({
    name: 'startTimeState',
    initialState: initialState,
    reducers: {
        addStartTime(state, action) {
            state.startTime = action.payload
        }

    }
});

export const startTimeSliceActions = startTimeSlice.actions


export default startTimeSlice.reducer