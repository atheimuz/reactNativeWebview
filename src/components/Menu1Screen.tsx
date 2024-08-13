import React from 'react';
import WebView from 'react-native-webview';

const Menu1Screen = ({navigation}) => {
  return (
    <WebView
      source={{uri: 'https://naver.com'}}
      onShouldStartLoadWithRequest={e => {
        if (e.url === 'https://m.naver.com/aside/') {
          navigation.navigate('Side');
          return false;
        }

        return true;
      }}
    />
  );
};

export default Menu1Screen;
