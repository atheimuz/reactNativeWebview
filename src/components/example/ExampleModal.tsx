import React, {PropsWithChildren} from 'react';
import {StyleSheet, View, Text, Modal, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

type Props = PropsWithChildren<{
  status: boolean;
  setStatus: (value: boolean) => void;
}>;
const HomeScreen = ({status, setStatus}: Props) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={status}
        onRequestClose={() => setStatus(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>모달 띄우기</Text>
            <Pressable style={styles.closeBtn} onPress={() => setStatus(false)}>
              <FontAwesomeIcon icon={faXmark} size={24} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    position: 'relative',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default HomeScreen;
