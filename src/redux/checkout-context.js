import React from 'react';

const CheckOutContext = React.createContext({
  items: [],
    addItem: (item) => {},
    updateItem: (id) => {},
//  removeItem: (id) => {},
//  clearCart : (id) => {}
});

export default CheckOutContext;