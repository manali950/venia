import { useReducer } from 'react';

import CheckOutContext from './checkout-context';

const defaultCheckOutState = {
    items: {} ,
};


const checkOutReducer = (state, action) => {
    if (action.type === 'ADD') {
        // alert("On Update checkOutReducer");
        // alert(action.item.fName);
        // alert(action.item.lName);
        //  console.log(action.item,"formData");
        
        const existingCartItem = state.items;

        let updatedItems;
        if (existingCartItem) {
          // alert("on if");
          updatedItems = { ...state.items, ...action.item };

        }else{
          // alert("on else");

          updatedItems = action.item;
        }
        // console.log(updatedItems,"formData");
        
        return {
            items: updatedItems,
          };
    }
    // if (action.type === 'UPDATE') {
        
        
    // }

    // if (action.type === 'REMOVE') {}
    // if (action.type === 'CLEAR') {}

    return defaultCheckOutState;
}
  
  
const CheckOutProvider = (props) => {

    const [cheakOutState, dispatchCheckOutAction] = useReducer(
        checkOutReducer,
        defaultCheckOutState
      );
    const addItemToCartHandler = (item) => {
        dispatchCheckOutAction({ type: 'ADD', item: item });
    };
    // const updateItemFromCartHandler = (item) => {
    //     dispatchCheckOutAction({ type: 'UPDATE', item: item });
    // };
    
    //   const removeItemFromCartHandler = (id) => {
    //     dispatchCheckOutAction({ type: 'REMOVE', id: id });
    //   };

    //   const clearCartHandler = (id) => {
    //     dispatchCheckOutAction({type:'CLEAR' ,id: id }); 
    //   }
    
    const checkOutContext = {
        items: cheakOutState.items,
        addItem: addItemToCartHandler,
        // updateItem: updateItemFromCartHandler,
        // removeItem: removeItemFromCartHandler,
        // clearCart : clearCartHandler, 
      };

    return (
    <CheckOutContext.Provider value={checkOutContext}>
      {props.children}
    </CheckOutContext.Provider>
    );
};

export default CheckOutProvider;


