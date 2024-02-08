import axios from 'axios';
import { 
    CREATE_USER_REQUEST, 
    CREATE_USER_SUCCESS, 
    CREATE_USER_FAILURE 
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
