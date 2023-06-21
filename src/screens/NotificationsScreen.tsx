import React from 'react';
import {Text, SafeAreaView, View, Button} from 'react-native';
import {Props} from '../interfaces/Props';
import {globalStl} from '../styles/global';

const NotificationsScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={globalStl.containers}>
      <View>
        <Text style={globalStl.headers}>Notifications</Text>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
