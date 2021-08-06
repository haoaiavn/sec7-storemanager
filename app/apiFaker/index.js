import * as SecureStore from 'expo-secure-store';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isLogined = async () => {
  try {
    await sleep(3000);
    const userToken = await SecureStore.getItemAsync('userToken');
    return userToken != null;
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const logOut = async () => {
  try {
    await sleep(3000);
    await SecureStore.setItemAsync('userToken', null);
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
};

export const logIn = async () => {
  try {
    await sleep(5000);
    await SecureStore.setItemAsync('userToken', { user: 'anonymous' });
    return true;
  } catch (error) {
    console.warn(error);
    return false;
  }
};

const status = [
  { key: 'Completed', value: 'Completed' },
  { key: 'Pending', value: 'Pending Payment' },
  { key: 'Processing', value: 'Processing' },
  { key: 'On Hold', value: 'On Hold' },
  { key: 'Cancelled', value: 'Cancelled' },
  { key: 'Refunded', value: 'Refunded' },
];

export const getOrderListData = async () => {
  try {
    await sleep(500);
    const list = [];
    for (let i = 0; i < 100; i++) {
      list.push({
        id: '#' + parseInt(Math.random() * (999999 - 100000) + 100000),
        date: new Date(),
        product: {
          id: '#' + i,
          name: 'Headphone',
        },
        amount: parseInt(Math.random() * 4 + 1),
        status: status[parseInt(Math.random() * (6 - 0) + 0)],
      });
    }
    return list;
  } catch (error) {
    return [];
  }
};

export const getOrderDetailById = async (id) => {
  await sleep(800);
  return {
    id: id,
    billingAddress: {
      name: 'Le Thanh Hao',
      address: 'Dien Ngoc - Dien Ban - Quang Nam',
      email: 'hao.le@codecomplete.jp',
      phone: '0905573562',
    },
    shippingAddress: {
      name: 'Mentor Thai Le',
      address: 'Da Nang',
      phone: '123456789',
    },
    productInformation: {
      name: 'Headphone',
      price: 2,
    },
    method: 'Cash on delivery',
    tax: 0,
    shipping: 2,
    date: new Date(),
    amount: parseInt(Math.random() * 4 + 1),
    status: status[parseInt(Math.random() * (6 - 0) + 0)],
  };
};
