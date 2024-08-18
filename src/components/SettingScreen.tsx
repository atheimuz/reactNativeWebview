import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {SETTING_MENU} from '../schemes/menu';
import ScreenHeader from './base/ScreenHeader';
import ScreenLayout from './base/ScreenLayout';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScreenHeader title="설정" backVisible={false} />
      <ScreenLayout>
        <View style={styles.linkBox}>
          {SETTING_MENU.map((item, index) => (
            <Pressable
              style={styles.link}
              key={item.key}
              onPress={() => navigation.navigate('Web', item.params)}>
              <View
                style={[
                  styles.linkInner,
                  {...(index === 0 && styles.borderTopNone)},
                ]}>
                <Text>{item.title}</Text>
                <FontAwesomeIcon icon={faAngleRight} size={16} />
              </View>
            </Pressable>
          ))}
        </View>
      </ScreenLayout>
    </>
  );
};

const styles = StyleSheet.create({
  linkBox: {
    overflow: 'hidden',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  link: {
    paddingHorizontal: 16,
  },
  linkInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#ebebeb',
  },
  borderTopNone: {
    borderTopWidth: 0,
  },
});

export default SettingScreen;
