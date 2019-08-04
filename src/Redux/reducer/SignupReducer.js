/* istanbul ignore next */
const initialState = {
    loading: false,
    error: [],
    response: ""
}

  /* istanbul ignore next */
  const SignupReducer = (state = initialState, action) => {
    switch(action.type){
        case 'STARTED':
          return {
              ...state,
              loading: true
          }
        case 'SUCCESSFUL':
         return {
             ...state,
             loading: false,
             response: action.payload
         }
        case 'FAILED':
          return {
              ...state,
              loading: false,
              error: action.payload
          }
        default:
          return state;
    }
}

export default SignupReducer;