
// import axios from "axios";
export const SET_DATA_SAVE = 'SET_DATA_SAVE';
export const COUNT= 'COUNT';

// export const DETA = 'DETA';
// export const ADD_USER_DATA_LOGIN = 'ADD_USER_DATA_LOGIN';
// export const ADD_USER_DATA_LOGIN_FAIL= 'ADD_USER_DATA_LOGIN_FAIL';



export const setDataSave = (data) => {
  console.log("actionData",data)
  return {
    type: SET_DATA_SAVE,
    payload: data,
  };
};

export const countAction = (data) => {
  console.log("countData",data)
  return {
    type: COUNT,
    payload: data,
  };
};


// export const detailsAction = (data) => {
//   console.log("detailsAction",data)
//   return {
//     type: DETA,
//     payload: data,
//   };
// };

// export const detailsFun=(id)=>{
//   return (dispatch)=>{
//       axios.get(`http://localhost:8080/search/recipes/${id}/information`)
//       .then((res)=> {
//           return dispatch(detailsAction(res.data))
          
//       })
    
//   }
// }


// export const getUser = (inputValues) => {
//   return function (dispatch, getState) {
//     axios
//       .post("http://localhost:8080/api/auth/login", inputValues)
//       .then((res) => {
//         dispatch({
//           type: ADD_USER_DATA_LOGIN,
//           payload: res.data,
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: ADD_USER_DATA_LOGIN_FAIL,
//         });
//       });
//   };
// };

