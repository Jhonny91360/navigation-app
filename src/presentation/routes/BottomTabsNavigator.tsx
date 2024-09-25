/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
//import {Tab2Screen} from '../screens/tabs/Tab2Screen';
//import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
//import {Text} from 'react-native';
import {TopTapNavigator} from './TopTapNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: globalColors.background}}
      screenOptions={{
        //headerShown: false,
        tabBarActiveTintColor: globalColors.primary,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => (
            <IonIcon name="game-controller-outline" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcon name="earth-outline" color={color} />
          ),
        }}
        component={TopTapNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => (
            <IonIcon name="git-compare-outline" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
