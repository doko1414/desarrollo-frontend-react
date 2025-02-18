import {SET_NAME_MODULE, CLEAN_NAME_MODULE} from './defaultTypes' //en default reducer se importan las variables golobales que se van a usar de defaultTypes
// en las llaves van los nombres de las variables que se exportarán  
//luego definimos aqui nuestras variables globales que compartiran nuestros componentes
const initialState={  //declaramos nuestras variables global
    name:"Desarrollo frontend con react",
    //age:0
};

const defaultReducer=(state= initialState,action)=>{
    switch(action.type){
        case SET_NAME_MODULE:{
            return{
                ...state,
                name:action.payload,
            }
        }
        default:
            return state;
    }
};

export default defaultReducer;