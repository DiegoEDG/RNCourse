import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <StackNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
