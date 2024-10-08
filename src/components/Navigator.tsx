import React from 'react';
import {Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_BAR_MENU} from '../schemes/menu';

import HomeScreen from './HomeScreen';
import SideScreen from './SideScreen';
import UserScreen from './UserScreen';
import SettingScreen from './SettingScreen';
import WebviewScreen from './WebviewScreen';
import BottomTabBar from './BottomTabBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const config = {
  screens: {
    Search: 'search',
    Setting: 'setting',
    Menu: 'menu',
  },
};

const bottomTabScreens: {[key: string]: () => React.JSX.Element} = {
  Home: HomeScreen,
  User: UserScreen,
  Setting: SettingScreen,
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      {BOTTOM_TAB_BAR_MENU.map(item => (
        <Tab.Screen
          name={item.value}
          options={{tabBarLabel: item.title}}
          component={bottomTabScreens[item.value]}
        />
      ))}
    </Tab.Navigator>
  );
}
function Navigator() {
  const linking = {
    prefixes: ['testdeep://'],
    config,

    async getInitialURL() {
      // 최초 실행 시
      const url = await Linking.getInitialURL();

      if (url) {
        return url;
      }

      return null;
    },

    subscribe(listener: (arg0: string) => any) {
      const onReceiveURL = ({url}: {url: string}) => {
        // 앱이 실행되어 있는 상태에서 요청이 왔을때
        return listener(url);
      };
      Linking.addEventListener('url', onReceiveURL);
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerBackTitle: '이전', headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen
          name="Side"
          component={SideScreen}
          options={{title: 'Side'}}
        />
        <Stack.Screen name="Web" component={WebviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
