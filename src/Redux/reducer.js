import { 
  CREATE_USER_REQUEST, 
  CREATE_USER_SUCCESS, 
  CREATE_USER_FAILURE,
  GET_ACTIVE_PROPERTIES_FOR_SALE_REQUEST,
  GET_ACTIVE_PROPERTIES_FOR_SALE_SUCCESS,
  GET_ACTIVE_PROPERTIES_FOR_SALE_FAILURE, 
  GET_ACTIVE_PROPERTIES_FOR_RENT_REQUEST,
  GET_ACTIVE_PROPERTIES_FOR_RENT_SUCCESS,
  GET_ACTIVE_PROPERTIES_FOR_RENT_FAILURE,
  GET_DEVELOPMENT_PROPERTIES_REQUEST,
  GET_DEVELOPMENT_PROPERTIES_SUCCESS,
  GET_DEVELOPMENT_PROPERTIES_FAILURE
} from './Actions/actionTypes';

const initialState = {
    properties: [],
    propertiesForRent: [],
    developmentProperties: [],
  createUserLoading: false,
  createUserError: null,
  loading: false, 
  error: null, 
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
          case GET_ACTIVE_PROPERTIES_FOR_SALE_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
            };
          case GET_ACTIVE_PROPERTIES_FOR_SALE_SUCCESS:
            return {
              ...state,
              properties: action.payload,
              loading: false,
              error: null,
            };
          case GET_ACTIVE_PROPERTIES_FOR_SALE_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            };
            case GET_ACTIVE_PROPERTIES_FOR_RENT_REQUEST:
                return {
                  ...state,
                  loading: true,
                  error: null
                };
              case GET_ACTIVE_PROPERTIES_FOR_RENT_SUCCESS:
                return {
                  ...state,
                  propertiesForRent: action.payload,
                  loading: false,
                  error: null
                };
              case GET_ACTIVE_PROPERTIES_FOR_RENT_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.payload
                };
                case GET_DEVELOPMENT_PROPERTIES_REQUEST:
                  return {
                    ...state,
                    loading: true,
                    error: null,
                  };
                case GET_DEVELOPMENT_PROPERTIES_SUCCESS:
                  return {
                    ...state,
                    developmentProperties: action.payload,
                    loading: false,
                    error: null,
                  };
                case GET_DEVELOPMENT_PROPERTIES_FAILURE:
                  return {
                    ...state,
                    loading: false,
                    error: action.payload,
                  };
      default:
          return state;
  }
};

export default rootReducer;
