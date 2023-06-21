import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  SettingsScreen,
  UserScreen,
} from '../screens';
import {RootStackParamList} from './interface/RootParams';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: '#171919',
          shadowColor: 'transparent',
        },
        headerBackTitle: 'Back',
        headerTintColor: 'white',
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
