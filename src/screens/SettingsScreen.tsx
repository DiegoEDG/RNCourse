import React from 'react';
import {Text, SafeAreaView, View, Button} from 'react-native';
import {Props} from '../interfaces/Props';
import {globalStl} from '../styles/global';

const SettingsScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={globalStl.containers}>
      <View>
        <Text style={globalStl.headers}>Settings</Text>
        <Button
          title="Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <Button title="Home" onPress={() => navigation.popToTop()} />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
