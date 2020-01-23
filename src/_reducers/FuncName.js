// const initialState = {
//     fetching : false,
//     error : null,
//     data: []
// }


// const funcName = (state=initialState, action) => {
//     switch (action.type) {
//         case 'GET_FUNCNAME_PENDING' :
//             return {
//                 ...state,
//                 fetching :true,
//             };
//         case 'GET_FUNCNAME_FULFILLED':
//             return {
//                 ...state,
//                 fetching:false,
//                 data : action.payload.data
//             }
//         case 'GET_FUNCNAME_REJECTED':
//             return {
//                 ...state,
//                 fetching:false,
//                 error:action.payload
//             }
//         default: 
//         return state;
//     }
// }

// export default funcName;