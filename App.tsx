import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigation, BottomTabs, StackNavigation} from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
      {/* <DrawerNavigation /> */}
      {/* <StackNavigation /> */}
    </NavigationContainer>
  );
};

export default App;
