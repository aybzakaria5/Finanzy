import Nav from "./NavBar/Nav";
import Cart from "./Cart/Cart";
import Body from "./Home/Body";
import Footer from './Footer/Footer';
import Currency from './Currency/Currency';

function App() {
  return (
    <>
      <Nav />
      <Currency />
      <Body />
      {/* <Cart /> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;
