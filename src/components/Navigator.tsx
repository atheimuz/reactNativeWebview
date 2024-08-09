import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faHouse,
  faGear,
  faBars,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './HomeScreen';
import Menu1Screen from './Menu1Screen';
import Menu2Screen from './Menu2Screen';

const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;

const config = {
  screens: {
    Search: 'search',
    Setting: 'setting',
    Menu: 'menu',
  },
};
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
      <Tab.Navigator
        initialRouteName="Home"
        options={{headerTitleAlign: 'center'}}>
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
          name="Search"
          component={HomeScreen}
          options={({navigation}) => ({
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color={color}
                size={size}
              />
            ),
            headerTitle: () => (
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="검색" />
              </View>
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen
          name="Setting"
          component={Menu2Screen}
          options={({navigation}) => ({
            title: '설정',
            headerBackVisible: false,
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faGear} color={color} size={size} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
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
            headerTitleAlign: 'center',
            headerBackVisible: false,
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBars} color={color} size={size} />
            ),
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </TouchableOpacity>
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: windowWidth - 50,
    height: '70%',
    // backgroundColor: 'gray',
  },
  input: {
    flex: 1,
    height: 16,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
  },
});

export default Navigator;
