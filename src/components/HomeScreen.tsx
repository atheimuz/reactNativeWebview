import React, {useState} from 'react';
import {StyleSheet, View, Text, Alert, Pressable} from 'react-native';

import ExampleModal from './example/ExampleModal';

const showAlert = () =>
  Alert.alert(
    'Alert',
    'alert 띄우기',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('alert cancel'),
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );

const HomeScreen = () => {
  const [modalStatus, setModalStatus] = useState(false);

  return (
    <View>
      <Pressable style={styles.box} onPress={showAlert}>
        <Text style={styles.btnText}>Alert</Text>
      </Pressable>
      <ExampleModal status={modalStatus} setStatus={setModalStatus} />
      <Pressable style={styles.box} onPress={() => setModalStatus(true)}>
        <Text style={styles.btnText}>Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  btnText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeScreen;
