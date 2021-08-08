import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

import OrderItem from './Item.js';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const OrderList = ({ list, refreshList, onEndReached }) => {
  const refreshing = useSelector((state) => state.orderList.refreshing);
  const navigation = useNavigation();
  const showItemDetail = (id) => {
    navigation.navigate('OrderDetailScreen', {
      id: id,
    });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => showItemDetail(item.id)}
    >
      <OrderItem item={item} />
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={list}
      initialNumToRender={6}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={100}
      keyExtractor={(item) => item['id']}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={refreshList} />
      }
      onEndReached={onEndReached}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
});

export default React.memo(OrderList);
