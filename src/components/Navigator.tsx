import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faGear,
  faBars,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

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
            title: '홈',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faHouse} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Menu2Screen}
          options={({navigation}) => ({
            title: '설정',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faGear} color={color} size={size} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log(navigation)}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Menu"
          component={Menu1Screen}
          options={({navigation}) => ({
            title: '메뉴',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBars} color={color} size={size} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log(navigation)}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </TouchableOpacity>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
