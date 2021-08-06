import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const StatusItem = ({ status }) => {
  switch (status.key) {
    case 'Completed':
      return (
        <Text style={[styles.orderStatus, styles.statusCompleted]}>
          {status.value}
        </Text>
      );
    case 'Pending':
      return (
        <Text style={[styles.orderStatus, styles.statusPending]}>
          {status.value}
        </Text>
      );
    case 'Processing':
      return (
        <Text style={[styles.orderStatus, styles.statusProcessing]}>
          {status.value}
        </Text>
      );
    case 'On Hold':
      return (
        <Text style={[styles.orderStatus, styles.statusOnHold]}>
          {status.value}
        </Text>
      );
    case 'Cancelled':
      return (
        <Text style={[styles.orderStatus, styles.statusCancelled]}>
          {status.value}
        </Text>
      );
    case 'Refunded':
      return (
        <Text style={[styles.orderStatus, styles.statusRefunded]}>
          {status.value}
        </Text>
      );
  }
};
const styles = StyleSheet.create({
  orderStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    color: 'white',
  },
  statusCompleted: {
    backgroundColor: '#00ad43',
  },
  statusPending: {
    backgroundColor: '#dd9400',
  },
  statusProcessing: {
    backgroundColor: '#8000ff',
  },
  statusOnHold: {
    backgroundColor: '#f89f65',
  },
  statusCancelled: {
    backgroundColor: '#d9253f',
  },
  statusRefunded: {
    backgroundColor: '#2acaea',
  },
});

export default StatusItem;
