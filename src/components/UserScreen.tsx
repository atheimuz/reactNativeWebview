import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import SubTabs from './user/SubTabs';
import UserProfileScreen from './UserProfileScreen';
import UserActivityScreen from './UserActivityScreen';
import {USER_SUB_MENU} from '../schemes/menu';

const renderScene = SceneMap({
  profile: UserProfileScreen,
  activity: UserActivityScreen,
});

const UserScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState(USER_SUB_MENU);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={props => <SubTabs {...props} />}
    />
  );
};

export default UserScreen;
