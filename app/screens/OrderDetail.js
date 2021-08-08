import React, { useEffect, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import GlobalButton from '../components/global/Button.js';
import { Ionicons } from '@expo/vector-icons';
import LoadingScreen from './common/Loading.js';
import StatusItem from '../components/order/StatusItem.js';
import { toStringDateTime } from '../utils/formatDateTime.js';

const OrderDetailScreen = ({ route, navigation }) => {
  const orderDetailState = useSelector((state) => state.orderDetail);
  const dispatch = useDispatch();
  const { id } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Order ' + id,
    });
  }, [navigation]);

  const fetchOrderDetail = () => {
    dispatch({ type: 'FETCH_ORDER_DETAIL', id: id });
  };
  useEffect(() => {
    fetchOrderDetail();
  }, []);
  if (orderDetailState.isLoading) {
    return <LoadingScreen />;
  }
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.headerDetail}>
        <View style={styles.orderIcon}>
          <Ionicons name="albums" color="#0080ff" size={24} />
        </View>
        <View style={styles.orderInfor}>
          <View style={styles.statusItem}>
            <Text style={[styles.orderID, styles.textInfor]}>
              {orderDetailState.detail.id}
            </Text>
            <StatusItem status={{ key: 'Completed', value: 'Completed' }} />
          </View>
          <Text style={[styles.orderDateTime, styles.textInfor]}>
            {toStringDateTime(new Date(orderDetailState.detail.createdAt))}
          </Text>
        </View>
        <View></View>
      </View>
      <View>
        <Text style={styles.titleElement}>Billing Address</Text>
        <View style={styles.frameView}>
          <Text style={styles.nameStyle}>
            Name: {orderDetailState.detail.billingName}
          </Text>
          <Text style={[styles.textFrameStyle, styles.addressStyle]}>
            {orderDetailState.detail.billingAddress}
          </Text>
          <Text style={[styles.textFrameStyle]}>
            Email: {orderDetailState.detail.billingEmail}
          </Text>
          <Text style={[styles.textFrameStyle]}>
            Phone: {orderDetailState.detail.billingPhone}
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.titleElement}>Shipping Address</Text>
        <View style={styles.frameView}>
          <Text style={styles.nameStyle}>
            Name: {orderDetailState.detail.shippingName}
          </Text>
          <Text style={[styles.textFrameStyle, styles.addressStyle]}>
            {orderDetailState.detail.shippingAddress}
          </Text>
          <Text style={[styles.textFrameStyle]}>
            Phone: {orderDetailState.detail.shippingPhone}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.titleElement}>Product Information</Text>
        <View style={styles.frameView}>
          <View style={styles.productInfor}>
            <Text style={[styles.nameStyle, styles.productNameStyle]}>
              Name: {orderDetailState.detail.productName}
            </Text>
            <Text style={styles.nameStyle}>
              ${orderDetailState.detail.productPrice}x
              {orderDetailState.detail.amount}
            </Text>
          </View>
          <Text style={[styles.textFrameStyle, styles.addressStyle]}>
            {orderDetailState.detail.shippingAddress}
          </Text>
          <Text style={[styles.textFrameStyle]}>
            Phone: {orderDetailState.detail.shippingPhone}
          </Text>
        </View>
      </View>
      <View style={[styles.detailPrice]}>
        <View style={styles.subDetailPrice}>
          <Text>Shipping Item</Text>
          <Text>Shipping</Text>
        </View>
        <View style={styles.subDetailPrice}>
          <Text>Payment method</Text>
          <Text>{orderDetailState.detail.method}</Text>
        </View>
        <View style={styles.subDetailPrice}>
          <Text>Tax</Text>
          <Text>{orderDetailState.detail.tax}</Text>
        </View>
        <View style={styles.subDetailPrice}>
          <Text>Shipping</Text>
          <Text>${orderDetailState.detail.shipCost}</Text>
        </View>
        <View style={styles.subDetailPrice}>
          <Text style={styles.textTotal}>Total</Text>
          <Text style={styles.textTotal}>$12</Text>
        </View>
      </View>
      <View>
        <Text style={styles.titleElement}>Change Order Status</Text>
      </View>
      <GlobalButton style={styles.buttonStyle} title="Save Order" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff',
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

  frameView: {
    backgroundColor: '#ececec',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  titleElement: {
    marginVertical: 10,
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textFrameStyle: {
    marginVertical: 8,
    color: 'gray',
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productInfor: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productNameStyle: {
    color: 'blue',
  },
  subDetailPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  detailPrice: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
  textTotal: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttonStyle: {
    alignSelf: 'center',
    width: 120,
    backgroundColor: '#24a0ed',
  },
});
export default OrderDetailScreen;
