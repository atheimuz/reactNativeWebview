import React from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import ScreenHeader from './base/ScreenHeader';

const WebviewScreen = () => {
  const {params} = useRoute();

  return (
    <>
      <ScreenHeader title={params.title} />
      <WebView source={{uri: params.url}} />
    </>
  );
};

export default WebviewScreen;
