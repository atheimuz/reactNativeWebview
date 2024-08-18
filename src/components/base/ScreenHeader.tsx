import React from 'react';
import {StyleSheet, View, Pressable, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ScreenHeader = ({
  title,
  backVisible = true,
}: {
  title: string;
  backVisible?: boolean;
}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[styles.wrapper, {paddingTop: insets.top}]}>
      <View style={styles.inner}>
        {backVisible && (
          <Pressable style={styles.backBtn} onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} size={18} />
          </Pressable>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
  },
  inner: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 16,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    marginLeft: -10,
    padding: 10,
  },
});

export default ScreenHeader;
