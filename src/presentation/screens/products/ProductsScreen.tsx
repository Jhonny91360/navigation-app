import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Producto1'},
  {id: 2, name: 'Producto2'},
  {id: 3, name: 'Producto3'},
  {id: 4, name: 'Producto4'},
  {id: 5, name: 'Producto5'},
  {id: 6, name: 'Producto6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{fontSize: 20}}>ProductsScreen</Text>
      <FlatList
        data={products}
        // eslint-disable-next-line react/no-unstable-nested-components, react-native/no-inline-styles
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        renderItem={data => (
          <PrimaryButton
            label={data.item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: data.item.id,
                name: data.item.name,
              })
            }
          />
        )}
      />
      <Text style={{fontSize: 20}}>Ajustes</Text>
      <PrimaryButton
        label={'Ajustes'}
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
