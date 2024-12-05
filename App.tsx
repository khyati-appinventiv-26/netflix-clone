import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { store } from './src/redux/store'; 
import TodoApp from './src/todio';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/reduxPersist/store';

const App = () => (
  <Provider store={store}> {/* Wrap the app with Provider */}
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <AppNavigator />
        {/* <TodoApp/> */}
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
