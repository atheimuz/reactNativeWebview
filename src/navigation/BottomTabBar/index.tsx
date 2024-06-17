import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <View>
    <Text>홈</Text>
  </View>
);

const Menu1Screen = () => (
  <View>
    <Text>메뉴1</Text>
  </View>
);

function BottomTabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Menu1Screen}
          options={{
            title: '설정',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default BottomTabBar;
