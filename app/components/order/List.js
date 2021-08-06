import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useCallback, useState } from 'react';

import OrderItem from './Item.js';
import { useNavigation } from '@react-navigation/native';

const OrderList = ({ list, refreshList }) => {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const showItemDetail = (id) => {
    navigation.navigate('OrderDetailScreen', {
      id: id,
    });
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => showItemDetail(item.id)}>
      <OrderItem item={item} />
    </TouchableOpacity>
  );
  const handleRefresh = async () => {
    setRefreshing(true);
    await refreshList();
    setRefreshing(false);
  };
  return (
    <FlatList
      data={list}
      initialNumToRender={10}
      maxToRenderPerBatch={32}
      updateCellsBatchingPeriod={100}
      keyExtractor={(item) => item['id']}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
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
