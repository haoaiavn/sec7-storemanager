import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import {
  FETCH_ORDER_LIST,
  REFRESH_ORDER_LIST,
} from '../redux/actions/constants.js';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GlobalInput from '../components/global/Input.js';
import { Ionicons } from '@expo/vector-icons';
import LoadingScreen from './common/Loading.js';
import OrderFilter from '../components/order/Filter.js';
import OrderList from '../components/order/List.js';
import { getListFilter } from '../utils/order/getListFilter';
import { useNavigation } from '@react-navigation/native';

const OrdersScreen = () => {
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [currentOption, setCurrentOption] = useState({
    key: 'All',
    value: 'All Orders',
  });
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const orderListState = useSelector((state) => state.orderList);
  const dispatch = useDispatch();
  const handleOption = (selected) => {
    setCurrentOption({ ...selected });
  };
  const refreshList = () => {
    dispatch({ type: REFRESH_ORDER_LIST });
  };
  const loadList = () => {
    dispatch({ type: FETCH_ORDER_LIST, nextPage: orderListState.nextPage });
  };
  useEffect(() => {
    loadList();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={styles.filterButon}
          onPress={() => setVisibleFilter(true)}
        >
          <Ionicons name="options" color="gray" size={24} />
        </Pressable>
      ),
    });
  }, [navigation]);

  if (orderListState.isLoading && orderListState.nextPage == 1) {
    return <LoadingScreen />;
  }
  return (
    <View style={styles.container}>
      <GlobalInput
        style={styles.searchBox}
        maxLength={64}
        placeholder="Search Order"
        getText={setSearchText}
      />
      <OrderList
        list={getListFilter(currentOption, orderListState.list)}
        refreshList={refreshList}
        onEndReached={loadList}
      >
        {orderListState.isLoading && orderListState.nextPage >= 2 && (
          <View style={styles.activityIndicatorView}>
            <ActivityIndicator />
          </View>
        )}
      </OrderList>
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
  activityIndicatorView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default OrdersScreen;
