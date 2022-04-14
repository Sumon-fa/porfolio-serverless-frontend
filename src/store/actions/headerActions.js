import axios from 'axios';
import {
  CLEAR_ERRORS,
  RESUME_DATA_FAIL,
  RESUME_DATA_REQUEST,
  RESUME_DATA_SUCCESS,
} from '../constants/headerConstant';

export const getResumeData = () => async (dispatch) => {
  try {
    dispatch({ type: RESUME_DATA_REQUEST });

    const { data } = await axios.get(
      'https://ffg2t3gh29.execute-api.eu-west-1.amazonaws.com/prod/resume'
    );
    console.log(data);
    dispatch({
      type: RESUME_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESUME_DATA_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
