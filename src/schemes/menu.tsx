import {
  faUser,
  faHouse,
  faGear,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const BOTTOM_TAB_BAR_MENU: {
  value: string;
  title: string;
}[] = [
  {value: 'Home', title: '홈'},
  {value: 'User', title: '마이페이지'},
  {value: 'Setting', title: '설정'},
];

export const BOTTOM_TAB_BAR_ICON: {[key: string]: IconDefinition} = {
  Home: faHouse,
  User: faUser,
  Setting: faGear,
};

export const SETTING_MENU: {
  key: string;
  route: string;
  params: object | undefined;
  title: string;
}[] = [
  {
    key: 'setting1',
    route: 'Setting',
    params: {
      title: '이용약관',
      url: 'https://policy.naver.com/policy/service.html',
    },
    title: '이용약관',
  },
  {
    key: 'setting2',
    route: 'Setting',
    params: {
      title: '개인정보처리방침',
      url: 'https://policy.naver.com/policy/privacy.html',
    },
    title: '개인정보처리방침',
  },
];

export const USER_SUB_MENU: {
  key: string;
  title: string;
}[] = [
  {key: 'profile', title: '프로필'},
  {key: 'activity', title: '활동'},
];
