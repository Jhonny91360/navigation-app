import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {globalStyles} from '../../theme/theme';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingScreen = () => {
  const navigator = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text>SettingScreen</Text>
      <PrimaryButton label="Ir atras" onPress={() => navigator.goBack()} />
      <PrimaryButton
        label="Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
