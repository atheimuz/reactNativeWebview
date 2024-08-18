import React, {useMemo} from 'react';
import {StyleSheet, Pressable, Text, FlatList} from 'react-native';

interface itemProps {
  value: string;
  title: string;
}
const Tabs = ({
  data,
  value,
  onChange,
}: {
  data: itemProps[];
  value: string;
  onChange: (val: string) => void;
}) => {
  return (
    <>
      <FlatList
        style={styles.tabs}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={props => (
          <TabItem
            activeValue={value}
            onChange={val => onChange(val)}
            {...props}
          />
        )}
        keyExtractor={item => item.value}
        extraData={value}
      />
    </>
  );
};

export const TabItem = ({
  item,
  activeValue,
  onChange,
}: {
  item: itemProps;
  activeValue: string;
  onChange: (value: string) => void;
}) => {
  const isActive = useMemo(
    () => item.value === activeValue,
    [item.value, activeValue],
  );

  return (
    <Pressable
      style={[styles.tabItem, {...(isActive && styles.active)}]}
      onPress={() => onChange(item.value)}>
      <Text style={[styles.title, {...(isActive && styles.active)}]}>
        {item.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabs: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ebebeb',
  },
  tabItem: {
    justifyContent: 'center',
    height: 60,
    paddingHorizontal: 12,
    borderBottomWidth: 4,
    borderBottomColor: 'transparent',
  },
  active: {
    borderBottomColor: '#000',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Tabs;
