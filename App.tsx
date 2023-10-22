import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Routes from './Routing/routes';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
};

export default App;
