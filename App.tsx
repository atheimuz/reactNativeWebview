import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/components/Navigator';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}

export default App;
