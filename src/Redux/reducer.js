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
  GET_DEVELOPMENT_PROPERTIES_FAILURE,
  GET_LUXURY_PROPERTIES_REQUEST,
  GET_LUXURY_PROPERTIES_SUCCESS,
  GET_LUXURY_PROPERTIES_FAILURE, 
  GET_ALL_SELLERS_SUCCESS,
  GET_ALL_SELLERS_FAIL,
  GET_ALL_MARTILLERS_SUCCESS,
  GET_ALL_MARTILLERS_FAIL,
} from './Actions/actionTypes';

const initialState = {
    properties: [],
    totalPages: 0, // Total de páginas
  currentPage: 1, // Página actual
    propertiesForRent: [],
    developmentProperties: [],
    luxuryProperties: [],
  createUserLoading: false,
  createUserError: null,
  loading: false, 
  error: null, 
  sellers: [],
  martillers: []
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
              properties: action.payload, // Propiedades actuales
              totalPages: action.payload.totalPages, // Total de páginas desde el backend
              currentPage: action.payload.currentPage, // Página actual desde el backend
              loading: false,
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
                  ...state,
                  propertiesForRent: action.payload.properties || [], // Aseguramos que sea un array de propiedades
                  totalPages: action.payload.totalPages || 1,
                  currentPage: action.payload.currentPage || 1,
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
                  case GET_LUXURY_PROPERTIES_REQUEST:
                    return {
                      ...state,
                      loading: true,
                      error: null,
                    };
                  case GET_LUXURY_PROPERTIES_SUCCESS:
                    return {
                      ...state,
                      luxuryProperties: action.payload,
                      loading: false,
                      error: null,
                    };
                  case GET_LUXURY_PROPERTIES_FAILURE:
                    return {
                      ...state,
                      loading: false,
                      error: action.payload,
                    };
                    case GET_ALL_SELLERS_SUCCESS:
                      return {
                        ...state,
                        sellers: action.payload, // Guarda la lista de vendedores en el estado
                        error: null
                      };
                    case GET_ALL_SELLERS_FAIL:
                      return {
                        ...state,
                        sellers: [], // Limpia la lista de vendedores en caso de fallo
                        error: action.payload
                      };
                      case GET_ALL_MARTILLERS_SUCCESS:
                        return {
                          ...state,
                          martillers: action.payload, // Guarda la lista de martilleros en el estado
                          error: null,
                        };
                      case GET_ALL_MARTILLERS_FAIL:
                        return {
                          ...state,
                          martillers: [], // Limpia la lista de martilleros en caso de fallo
                          error: action.payload,
                        };
      default:
          return state;
  }
};

export default rootReducer;
