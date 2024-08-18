import React from 'react';
import {Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import SideScreen from './SideScreen';
import Menu1Screen from './Menu1Screen';
import Menu2Screen from './Menu2Screen';
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

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{tabBarLabel: '홈'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Menu"
        options={{tabBarLabel: '메뉴'}}
        component={Menu1Screen}
      />
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
        <Stack.Screen
          name="Side"
          component={SideScreen}
          options={{title: 'Side'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
