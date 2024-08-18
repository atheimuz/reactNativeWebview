import React, {useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Tabs from '../common/Tabs';

import {USER_SUB_MENU} from '../../schemes/menu';

const SubTabs = () => {
  const [tab, setTab] = useState<string>(USER_SUB_MENU[0].value);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Tabs
        data={USER_SUB_MENU}
        value={tab}
        onChange={value => setTab(value)}
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
