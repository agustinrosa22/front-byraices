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
// Thunk para obtener propiedades activas a la venta con filtros opcionales
// actions.js
export const fetchActivePropertiesForSale = (filters = {}, page = 1) => async (dispatch) => {
  dispatch(getActivePropertiesForSaleRequest());

  try {
    let endpoint = '/properties/active/sale';
    const { departments, minPrice, maxPrice, propertyType } = filters;
    const params = new URLSearchParams();

    if (departments) params.append('departments', departments);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (propertyType) params.append('propertyType', propertyType);
    params.append('currency', 'USD');
    params.append('page', page); // Agregar número de página a los parámetros

    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }

    const response = await axios.get(endpoint);
    dispatch(getActivePropertiesForSaleSuccess(response.data));
  } catch (error) {
    dispatch(getActivePropertiesForSaleFailure(error.message));
  }
};


export const fetchActivePropertiesForRent = (filters = {}, page = 1) => async (dispatch) => {
  dispatch({ type: GET_ACTIVE_PROPERTIES_FOR_RENT_REQUEST });

  try {
    let endpoint = '/properties/active/rent';
    const { departments, minPrice, maxPrice, propertyType } = filters;
    const params = new URLSearchParams();

    if (departments) params.append('departments', departments);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    if (propertyType) params.append('propertyType', propertyType);
    params.append('page', page); // Agregar número de página

    if (params.toString()) {
      endpoint += `?${params.toString()}`;
    }

    const response = await axios.get(endpoint);

    console.log("🚀 Respuesta del backend:", response.data);  // 🔍 Verificar la API

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


  export const getDevelopmentPropertiesRequest = () => ({
    type: GET_DEVELOPMENT_PROPERTIES_REQUEST,
  });
  
  export const getDevelopmentPropertiesSuccess = (properties) => ({
    type: GET_DEVELOPMENT_PROPERTIES_SUCCESS,
    payload: properties,
  });
  
  export const getDevelopmentPropertiesFailure = (error) => ({
    type: GET_DEVELOPMENT_PROPERTIES_FAILURE,
    payload: error,
  });
  
  // Thunk to fetch development properties
  export const fetchDevelopmentProperties = () => async (dispatch) => {
    dispatch(getDevelopmentPropertiesRequest());
    try {
      const response = await axios.get('/properties/active/pozo');
      dispatch(getDevelopmentPropertiesSuccess(response.data));
    } catch (error) {
      dispatch(getDevelopmentPropertiesFailure(error.message));
    }
  };

  export const getLuxuryPropertiesRequest = () => ({
    type: GET_LUXURY_PROPERTIES_REQUEST,
  });
  
  export const getLuxuryPropertiesSuccess = (properties) => ({
    type: GET_LUXURY_PROPERTIES_SUCCESS,
    payload: properties,
  });
  
  export const getLuxuryPropertiesFailure = (error) => ({
    type: GET_LUXURY_PROPERTIES_FAILURE,
    payload: error,
  });
  
  // Thunk to fetch development properties
  export const fetchLuxuryProperties = () => async (dispatch) => {
    dispatch(getLuxuryPropertiesRequest());
    try {
      const response = await axios.get('/properties/luxury');
      dispatch(getLuxuryPropertiesSuccess(response.data));
    } catch (error) {
      dispatch(getLuxuryPropertiesFailure(error.message));
    }
  };

// Action para obtener todos los vendedores
export const getAllSellers = () => async (dispatch) => {
  try {
    const response = await axios.get('/sellers/active');

    // Filtrar vendedores para excluir al vendedor con ID 10
    const filteredSellers = response.data.filter(seller => seller.id !== 10);

    dispatch({
      type: GET_ALL_SELLERS_SUCCESS,
      payload: filteredSellers // Envía la lista filtrada de vendedores
    });
  } catch (error) {
    console.error('Error al obtener los vendedores:', error);
    dispatch({
      type: GET_ALL_SELLERS_FAIL,
      payload: error.message || 'Error al obtener los vendedores'
    });
  }
};

export const getActiveMartiller = () => async (dispatch) => {
  try {
    const response = await axios.get('/martillers/active');
    dispatch({
      type: GET_ALL_MARTILLERS_SUCCESS,
      payload: response.data, // Asume que el servidor devuelve una lista de martilleros
    });
  } catch (error) {
    console.error('Error al obtener los martilleros:', error);
    dispatch({
      type: GET_ALL_MARTILLERS_FAIL,
      payload: error.message || 'Error al obtener los martilleros',
    });
  }
};