import axios from 'axios';
import { 
    CREATE_USER_REQUEST, 
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE,
    GET_ACTIVE_PROPERTIES_FOR_SALE_REQUEST,
    GET_ACTIVE_PROPERTIES_FOR_SALE_SUCCESS,
    GET_ACTIVE_PROPERTIES_FOR_SALE_FAILURE,
    GET_ACTIVE_PROPERTIES_FOR_RENT_REQUEST,
    GET_ACTIVE_PROPERTIES_FOR_RENT_SUCCESS,
    GET_ACTIVE_PROPERTIES_FOR_RENT_FAILURE
} from './actionTypes';

export const createUserRequest = () => ({
    type: CREATE_USER_REQUEST
});

export const createUserSuccess = () => ({
    type: CREATE_USER_SUCCESS
});

export const createUserFailure = (error) => ({
    type: CREATE_USER_FAILURE,
    error
});

export const createUser = (userData) => {
    return async (dispatch) => {
        dispatch(createUserRequest());
        try {
            const response = await axios.post('/user', userData);
            dispatch(createUserSuccess());
            // Puedes realizar alguna acción adicional aquí después del éxito
        } catch (error) {
            dispatch(createUserFailure(error));
        }
    };
};

export const getActivePropertiesForSaleRequest = () => ({
    type: GET_ACTIVE_PROPERTIES_FOR_SALE_REQUEST,
  });
  
  export const getActivePropertiesForSaleSuccess = (properties) => ({
    type: GET_ACTIVE_PROPERTIES_FOR_SALE_SUCCESS,
    payload: properties,
  });
  
  export const getActivePropertiesForSaleFailure = (error) => ({
    type: GET_ACTIVE_PROPERTIES_FOR_SALE_FAILURE,
    payload: error,
  });
  
  // Thunk to fetch active properties for sale
  export const fetchActivePropertiesForSale = () => async (dispatch) => {
    dispatch(getActivePropertiesForSaleRequest());
    try {
      const response = await axios.get('/properties/active/sale'); 
      dispatch(getActivePropertiesForSaleSuccess(response.data));
    } catch (error) {
      dispatch(getActivePropertiesForSaleFailure(error.message));
    }
  };

  export const fetchActivePropertiesForRent = () => async (dispatch) => {
    dispatch({ type: GET_ACTIVE_PROPERTIES_FOR_RENT_REQUEST });
    
    try {
      const response = await axios.get('/properties/active/rent');
      dispatch({
        type: GET_ACTIVE_PROPERTIES_FOR_RENT_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: GET_ACTIVE_PROPERTIES_FOR_RENT_FAILURE,
        payload: error.message
      });
    }
  };
