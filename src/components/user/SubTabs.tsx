import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Tabs from '../common/Tabs';

const SubTabs = ({
  navigationState,
  jumpTo,
}: {
  navigationState: object;
  jumpTo: (key: string) => void;
}) => {
  const {index, routes} = navigationState;

  return (
    <SafeAreaView style={styles.wrapper}>
      <Tabs
        data={routes}
        value={routes[index].key}
        onChange={value => jumpTo(value)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
});

export default SubTabs;
