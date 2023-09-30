// reducers/dataSaveReducer.js
import { SET_DATA_SAVE, COUNT } from "./receipeAction";

const initialState ={
  receipe:[],
  count:[]
  
}
  



const dataSaveReducer = (state = initialState, action) => {
  console.log("payload",action.payload)
  switch (action.type) {
    case SET_DATA_SAVE:
      return {
        ...state,
        receipe: action.payload
      }
      case COUNT:
        return {
          ...state,
          count: action.payload
        }
     
    default:
      return state;
  }
};

export default dataSaveReducer;

  