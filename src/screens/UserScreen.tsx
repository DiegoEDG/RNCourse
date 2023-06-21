import React from 'react';
import {Text} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/interface/RootParams';

export interface Props extends StackScreenProps<RootStackParamList, 'User'> {}

const UserScreen = ({route}: Props) => {
  return <Text>{JSON.stringify(route.params, null, 2)}</Text>;
};

export default UserScreen;
