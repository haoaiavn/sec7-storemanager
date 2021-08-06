import { StyleSheet, Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import StatusItem from './StatusItem.js';
import { toStringDateTime } from '../../utils/formatDateTime.js';

const OrderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderIcon}>
        <Ionicons name="albums" color="#0080ff" size={24} />
      </View>
      <View style={styles.orderInfor}>
        <View style={styles.statusItem}>
          <Text style={[styles.orderID, styles.textInfor]}>{item.id}</Text>
          <StatusItem status={item.status} />
        </View>
        <Text style={[styles.orderDateTime, styles.textInfor]}>
          {toStringDateTime(item.date)}
        </Text>
        <View>
          <Text style={[styles.orderProduct, styles.textInfor]}>
            ● {item.product.name} {`x${item.amount}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: 'gray',
    borderBottomStartRadius: 72,
    borderBottomEndRadius: 20,
  },
  orderIcon: {
    flex: 1,
  },
  statusItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderInfor: {
    flex: 6,
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
  },
  textInfor: {
    marginVertical: 4,
  },
  orderID: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  orderDateTime: {
    color: 'gray',
    fontSize: 12,
    paddingVertical: 4,
  },
  orderProduct: {
    color: '#626262',
    opacity: 0.8,
    fontSize: 16,
  },
});

export default React.memo(OrderItem);
