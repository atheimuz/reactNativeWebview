import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Menu1Screen from './Menu1Screen';
import Menu2Screen from './Menu2Screen';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Menu1"
          component={Menu1Screen}
          options={({navigation}) => ({
            title: '메뉴1',
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log(navigation)}>
                <Text>이전</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Menu2"
          component={Menu2Screen}
          options={({navigation}) => ({
            title: '메뉴2',
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log(navigation)}>
                <Text>이전</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuIcon: {
    width: '100%', //가로비율
    height: '100%', //세로비율
    alignItems: 'center', //중간정렬
    justifyContent: 'center',
  },
});

export default Navigator;
