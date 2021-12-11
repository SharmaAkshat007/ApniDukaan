import React from "react";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import Orders from "./Orders";
import Product from "./Product";
import MyProducts from "./MyProducts";
import Paper from "@mui/material/Paper";
import CurrentOrders from "./CurrentOrders";
export default function Wrapper({
  view,
  setView,
  products,
  setProducts,
  myProducts,
  setMyProducts,
  orders,
  setOrders,
  cart,
  setCart,
  currentOrders,
  setCurrentOrders,
}) {
  console.log(orders);
  if (view === 0) {
    return (
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Product products={products} setView={setView} />
      </Paper>
    );
  } else if (view === 1) {
    return <Cart cart={cart} setCart={setCart} />;
  } else if (view === 2) {
    return <Orders orders={orders} setOrders={setOrders} />;
  } else if (view === 3) {
    return (
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <AddProduct
          setView={setView}
          products={products}
          setProducts={setProducts}
          setMyProducts={setMyProducts}
          myProducts={myProducts}
        />
      </Paper>
    );
  } else if (view === 4) {
    return <MyProducts myProducts={myProducts} setMyProducts={setMyProducts} />;
  } else if (view === 5) {
    return <CurrentOrders currentOrders={currentOrders} />;
  } else {
    return (
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Product products={products} />
      </Paper>
    );
  }
}
