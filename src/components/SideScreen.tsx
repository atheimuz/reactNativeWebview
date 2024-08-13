import React from 'react';
import WebView from 'react-native-webview';

const sideUrl = 'https://m.naver.com/aside/';
const SideScreen = () => {
  return <WebView source={{uri: sideUrl}} />;
};

export default SideScreen;
