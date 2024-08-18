import React from 'react';
import ScreenHeader from './base/ScreenHeader';
import ScreenLayout from './base/ScreenLayout';
import LinkList from './setting/LinkList';

const SettingScreen = () => {
  return (
    <>
      <ScreenHeader title="설정" backVisible={false} />
      <ScreenLayout>
        <LinkList />
      </ScreenLayout>
    </>
  );
};

export default SettingScreen;
