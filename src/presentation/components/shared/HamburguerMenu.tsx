/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {IonIcon} from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <IonIcon name="menu-outline" />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
