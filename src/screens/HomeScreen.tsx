import {
  SafeAreaView,
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
} from 'react-native';
import {Props} from '../interfaces/Props';
import {globalStl} from '../styles/global';

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <View style={globalStl.containers}>
        <Text style={globalStl.headers}>Home</Text>
        <Button
          title="Notifications"
          onPress={() => navigation.navigate('Notifications')}
        />
        <View>
          <Pressable
            onPress={() => navigation.navigate('User', {id: 1, name: 'Diego'})}>
            <Text style={globalStl.PressableText}>Diego</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('User', {id: 2, name: 'Yun'})}>
            <Text style={globalStl.PressableText}>Yun</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
