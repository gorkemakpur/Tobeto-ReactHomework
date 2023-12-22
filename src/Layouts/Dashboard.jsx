//rfc ile direkt snippet geliyor
//burada buttonu semantic ui dan import ettik app.js içerisinde ise semantic.css i import ettik
//import { Button } from "semantic-ui-react";
import React from "react";
import Categories from "./Categories";
import ProductList from "../Pages/ProductList";
import { GridColumn } from "semantic-ui-react";
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (
    <div>
    <Grid>
      <GridColumn  width={4}>
          <Categories></Categories>
      </GridColumn>
      <GridColumn width={12}>
            <ProductList ProductList></ProductList>
      </GridColumn>
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