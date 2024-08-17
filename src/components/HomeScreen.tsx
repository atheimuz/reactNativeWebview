import React from 'react';
import {StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ScreenLayout from './common/ScreenLayout';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <ScrollView style={styles.wrapper}>
        <Pressable onPress={() => navigation.navigate('Side')}>
          <Text style={styles.btnText}>이동</Text>
        </Pressable>
      </ScrollView>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  btnText: {
    fontWeight: 'bold',
  },
});

export default HomeScreen;
