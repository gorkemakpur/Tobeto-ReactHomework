
import { createStore} from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "@redux-devtools/extension";


export function configureStore(){
    //createstore deprecated yeni kullanımına bakılacak
    return createStore(rootReducer, devToolsEnhancer())

}