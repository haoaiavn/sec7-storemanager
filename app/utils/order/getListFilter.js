export const getListFilter = (option, list) => {
  let newList = list;
  switch (option['key']) {
    case 'All':
      return newList;
    case 'Completed':
      return newList.filter((order) => order.status.key == 'Completed');
    case 'Pending':
      return newList.filter((order) => order.status.key == 'Pending');
    case 'Processing':
      return newList.filter((order) => order.status.key == 'Processing');
    case 'On Hold':
      return newList.filter((order) => order.status.key == 'On Hold');
    case 'Cancelled':
      return newList.filter((order) => order.status.key == 'Cancelled');
    case 'Refunded':
      return newList.filter((order) => order.status.key == 'Refunded');
  }
};
