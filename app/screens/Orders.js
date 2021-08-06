import { Pressable, StyleSheet, View } from 'react-native';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import GlobalInput from '../components/global/Input.js';
import { Ionicons } from '@expo/vector-icons';
import OrderFilter from '../components/order/Filter.js';
import OrderList from '../components/order/List.js';
import LoadingScreen from './common/Loading.js';
import { getOrderListData } from '../apiFaker';
import { getListFilter } from '../utils/order/getListFilter';
import { useNavigation } from '@react-navigation/native';

let list = [];
let currentOption = { key: 'All', value: 'All Orders' };

const OrdersScreen = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const navigation = useNavigation();
  const [searchOrder, setSearchOrder] = useState('');
  const [listFilter, setListFilter] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const handleOption = (selected) => {
    currentOption = selected;
    setListFilter(getListFilter(selected, list));
  };
  const loadList = async () => {
    list = await getOrderListData();
    setListFilter(getListFilter(currentOption, list));
  };
  useEffect(() => {
    const firstLoad = async () => {
      await loadList();
      setLoading(false);
    };
    firstLoad();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={styles.filterButon}
          onPress={() => setVisibleFilter(true)}>
          <Ionicons name="options" color="gray" size={24} />
        </Pressable>
      ),
    });
  }, [navigation]);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <GlobalInput
        style={styles.searchBox}
        maxLength={64}
        placeholder="Search Order"
        getText={setSearchOrder}
      />
      <OrderList list={listFilter ? listFilter : list} refreshList={loadList} />
      <OrderFilter
        currentOption={currentOption}
        handleOption={(selected) => handleOption(selected)}
        visible={visibleFilter}
        setVisible={setVisibleFilter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
  searchBox: {
    alignSelf: 'center',
    borderRadius: 5,
    width: '90%',
  },
  filterButon: {
    marginHorizontal: 10,
  },
});

export default OrdersScreen;
