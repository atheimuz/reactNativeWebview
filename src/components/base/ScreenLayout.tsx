import React from 'react';
import {StyleSheet, View} from 'react-native';

const ScreenLayout = ({children}: {children: React.JSX.Element}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});
export default ScreenLayout;
