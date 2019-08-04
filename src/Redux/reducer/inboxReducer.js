import { GET_MESSAGES_START, GET_MESSAGES_SUCCESS, GET_MESSAGES_FAILURE } from '../../types/types.jsx';

const initialState = {
    messages: {},
    isLoading: false,
    errors: {},
  };
 const inboxReducer = (state=initialState, action) => {
     switch(action.type){
        case GET_MESSAGES_START:
            return {
                ...state,
                isLoading: true
            };
        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                messages: action.payload
            };
        case GET_MESSAGES_FAILURE:
            return {
                ...state,
                isLoading: false,
                errors: action.errors
            }
        default:
            return state;
     }
 } 
  export default inboxReducer;
  