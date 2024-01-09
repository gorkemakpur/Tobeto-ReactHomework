//rfc ile direkt snippet geliyor
//burada buttonu semantic ui dan import ettik app.js içerisinde ise semantic.css i import ettik
//import { Button } from "semantic-ui-react";
import React from "react";
import Categories from "./Categories";
import ProductList from "../Pages/ProductList";
import { GridColumn } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../Pages/ProductDetail";
import CartDetail from "../Pages/CartDetail";
import { ToastContainer } from "react-toastify";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position='bottom-right'/>
      <Grid>
        <Grid.Row>
          <GridColumn width={4}>
            <Categories></Categories>
          </GridColumn>

          <GridColumn width={12}>

            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
            </Routes>


          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}

/* <Button
        color="red"
        content="Like"
        icon="heart"
        label={{
          basic: true,
          color: "red",
          pointing: "left",
          content: "2,048",
        }}
      />
      <Button
        basic
        color="blue"
        content="Fork"
        icon="fork"
        label={{
          as: "a",
          basic: true,
          color: "blue",
          pointing: "left",
          content: "2,048",
        }}
      />*/
