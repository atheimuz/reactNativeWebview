import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {BOTTOM_TAB_BAR_ICON} from '../schemes/menu';

const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.menu}>
              <FontAwesomeIcon
                icon={BOTTOM_TAB_BAR_ICON[route.name]}
                size={20}
                style={{...(isFocused && styles.activeColor)}}
              />
              <Text
                style={[
                  styles.menuText,
                  {...(isFocused && styles.activeColor)},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
  },
  inner: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeColor: {
    color: '#1E90FF',
  },
  menuText: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default BottomTabBar;
