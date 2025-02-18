import { combineReducers } from "redux";
//aca importamos todos los reducers
import defaultReducer from "./default/defaultReducers";

const rootReducer=combineReducers({
    default: defaultReducer,
    //producto:defaultProducto,
    //venta:defaultVenta,
    //producto:defaultProducto,
    //etc.
})
export default rootReducer;