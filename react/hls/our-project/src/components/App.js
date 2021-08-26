import './App.css';
import Entrance from './entrance';
import Login from './Login';
import Register1 from './register1';
import Register2 from './register2';
import Register3 from './register3';
import Product from './product'
import { connect } from "react-redux";

function App() {
    {/* <Entrance /> */}
    {/* <Login/> */}
    {/* <Register1/> */}

  return (
    <>
    <Product/>
    </>
  );
}

const myMapStateToProps = state => {
  return {
    productsList: state.productArr,
  }
}
export default connect(myMapStateToProps)(App);
