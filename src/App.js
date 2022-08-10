import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './redux/store/Store';
import Example from './components/Example';
import ExampleFun from './components/ExampleFun';
import Nothing from './components/Nothing';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import CartProvider from './redux/CartProvider';
import Checkout from './components/checkout/Checkout';
import CheckOutProvider from './redux/CheckOutProvider';
import OrderPlaced from './components/orderPlace/OrderPlaced';

function App() {
  return (
    <Provider store={store}>
    <CartProvider>
    <CheckOutProvider>
    <Router>
    <Switch>
      <Route exact path="/venia/" component={Home}  />
      <Route exact path="/venia/products" component={Products}  />
      <Route exact path="/venia/products/ProductDetails/:id" component={Product} />
      <Route exact path="/venia/products/cart" component={Cart} />
      <Route exact path="/venia/products/checkout" component={Checkout} />
      <Route exact path="/venia/orderPlaced" component={OrderPlaced} />
      <Route exact path="/venia/example" component={Example}  />
      <Route exact path="/venia/exampleFun" component={ExampleFun}  /> 
       <Route exact path="/venia/*" component={Nothing}  />
    </Switch>
    </Router>
    </CheckOutProvider>
    </CartProvider>  
    </Provider>
  );
}

export default App;
