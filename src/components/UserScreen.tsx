import React from 'react';
import {Text} from 'react-native';
import ScreenLayout from './base/ScreenLayout';
import SubTabs from './user/SubTabs';

const UserScreen = () => {
  return (
    <>
      <SubTabs />
      <ScreenLayout>
        <Text>heyyy</Text>
      </ScreenLayout>
    </>
  );
};

export default UserScreen;
