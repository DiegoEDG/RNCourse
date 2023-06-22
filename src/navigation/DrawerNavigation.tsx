import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import {PaycheckScreen} from '../screens';
import {Image, SafeAreaView, Text, View} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigation" component={StackNavigation} />
      <Drawer.Screen name="PaycheckScreen" component={PaycheckScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
