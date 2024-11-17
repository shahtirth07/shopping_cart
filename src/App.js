import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const productList = [
    {
      price: 120000,
      name: "Laptop",
      qty: 0,
      img: "https://m.media-amazon.com/images/I/61D2Hn3x5yL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      price: 14999,
      name: "Xiaomi Redmi 9A",
      qty: 0,
      img: "https://m.media-amazon.com/images/I/61D2Hn3x5yL._SX300_SY300_QL70_FMwebp_.jpg",
    },
  ];
  return (
    <>
      <Navbar />
      <ProductList productList={productList} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
