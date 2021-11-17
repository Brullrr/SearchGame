import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FirstTimeReducer from './FirstTimeSlice';
import backdropReducer from './backdropSlice';
import levelSelectReducer from './levelSelectSlice';
import gameOngoingReducer from './gameOngoingSlice';
import wellDoneReducer from './wellDoneSlice';
import playerNameReducer from './playerNameSlice';
import highScoresReducer from './highScoresSlice';

const reducers = combineReducers({
    FirstTimeSlice: FirstTimeReducer,
    backdropSlice: backdropReducer,
    levelSelectSlice: levelSelectReducer,
    gameOngoingSlice: gameOngoingReducer,
    wellDoneSlice: wellDoneReducer,
    playerNameSlice: playerNameReducer,
    highScoresSlice: highScoresReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
        
    reducer:  persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],

});

export default store;