import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/reduxPersist/store';
import EpisodesList from './src/components/tvEpisodes';

const App = () => (
  <Provider store={store}> {/* Wrap the app with Provider */}
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <AppNavigator />
        {/* <TodoApp/> */}
        {/* <EpisodesList/> */}
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

export default App;
