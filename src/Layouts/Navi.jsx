import React from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            <CartSummary />

            <SignedIn />
            <SignOut/>
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
