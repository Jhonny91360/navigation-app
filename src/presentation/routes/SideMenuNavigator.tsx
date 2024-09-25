/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import BottomTabsNavigator from './BottomTabsNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

function SideMenuNavigator() {
  const dimentions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: dimentions.width > 500 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="game-controller-outline" color={color} />
          ),
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-outline" color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default SideMenuNavigator;
