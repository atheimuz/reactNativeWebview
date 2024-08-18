import React from 'react';
import WebView from 'react-native-webview';
import ScreenLayout from './base/ScreenLayout';

const sideUrl = 'https://m.naver.com/aside/';
const SideScreen = () => {
  return (
    <ScreenLayout>
      <WebView source={{uri: sideUrl}} />
    </ScreenLayout>
  );
};

export default SideScreen;
