import Image from "next/image";
import Navbar from "./components/navbar";
import ProductItem from "./components/productsItem";
import ProductList from "./components/productList";

export default function Home() {
  return (
    <>
    <Navbar/>
    <ProductList/>
    </>
  );
}
