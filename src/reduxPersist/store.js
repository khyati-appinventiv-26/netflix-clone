import { configureStore, combineReducers, MiddlewareArray } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tutorialReducer from './tutorialSlice'
import authReducer from './authSlice';
import profileReducer from './profileSlice';
import logger from 'redux-logger'
import contentReducer from './contentSlice';
import downloadReducer from './downloadReducer';

const rootReducer = combineReducers({
    tutorial: tutorialReducer,
    auth: authReducer,
    profiles: profileReducer,
    content: contentReducer,
    downloads: downloadReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };
