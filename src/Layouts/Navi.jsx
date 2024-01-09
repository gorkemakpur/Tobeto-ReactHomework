import React,{useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignOut from "./SignOut";
import SignedIn from "./SignedIn";
import { useSelector } from "react-redux";

export default function Navi() {

  const {cartItems} = useSelector((state)=>state.cart)
  

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut (){
    setIsAuthenticated(false);
  }

  function handleSignIn (){
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Container>
      <Menu inverted fixed="top">
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            
            {cartItems.length > 0 && <CartSummary />}
            {
              isAuthenticated ? 
              <SignedIn signOut = {handleSignOut}/> 
              : 
              <SignOut signIn = {handleSignIn}/>
            }
          </Menu.Menu>
      </Menu>
      </Container>
    </div>
  )
}
