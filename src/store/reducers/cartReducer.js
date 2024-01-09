import { ADD_TO_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    //başlangıçda olacak şeyler
    cartItems: cartItems
}
//                                  başlangıç değeri , {cart actions ve içine alınacak değer}
export default function cartReducer(state=initialState , {type,payload}){
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c=>c.product.id=payload.id)

            if (product) {
                product.quantity++
                return {
                    //elemanları yeniden gönderir (...)
                    ...state
                }
            }

            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,payload]
                }
            }

        default:
            break;
    }
}