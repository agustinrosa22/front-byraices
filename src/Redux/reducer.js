import { 
  CREATE_USER_REQUEST, 
  CREATE_USER_SUCCESS, 
  CREATE_USER_FAILURE 
} from './Actions/actionTypes';

const initialState = {
  propertyList: [],
  createUserLoading: false,
  createUserError: null
};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
      case CREATE_USER_REQUEST:
          return {
              ...state,
              createUserLoading: true,
              createUserError: null
          };
      case CREATE_USER_SUCCESS:
          return {
              ...state,
              createUserLoading: false,
              createUserError: null
          };
      case CREATE_USER_FAILURE:
          return {
              ...state,
              createUserLoading: false,
              createUserError: action.error
          };
      default:
          return state;
  }
};

export default rootReducer;
