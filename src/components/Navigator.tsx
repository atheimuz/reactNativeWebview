import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const Menu1Screen = () => (
  <View>
    <Text>메뉴1</Text>
  </View>
);

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            // headerShown: false,
          }
        }>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            title: '홈',
          })}
        />
        <Tab.Screen
          name="Settings"
          component={Menu1Screen}
          options={({navigation}) => ({
            title: '설정',
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
