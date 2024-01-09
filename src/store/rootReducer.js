//tüm statelerin toplandığı yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    //cartReducer i cart nesnesine ata ve onu kullan
    cart : cartReducer
})

export default rootReducer;