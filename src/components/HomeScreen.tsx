import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenLayout from './base/ScreenLayout';
import ScreenHeader from './base/ScreenHeader';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScreenHeader title="홈" backVisible={false} />
      <ScreenLayout>
        <Pressable onPress={() => navigation.navigate('Side')}>
          <Text style={styles.btnText}>이동</Text>
        </Pressable>
      </ScreenLayout>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
