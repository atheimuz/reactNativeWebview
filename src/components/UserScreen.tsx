import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import ScreenLayout from './base/ScreenLayout';
import Tabs from './common/Tabs';

import {USER_SUB_MENU} from '../schemes/menu';

const UserScreen = () => {
  const [tab, setTab] = useState<string>(USER_SUB_MENU[0].value);

  return (
    <SafeAreaView>
      <Tabs
        data={USER_SUB_MENU}
        value={tab}
        onChange={value => setTab(value)}
      />
      <ScreenLayout>
        <Text>heyyy</Text>
      </ScreenLayout>
    </SafeAreaView>
  );
};

export default UserScreen;
