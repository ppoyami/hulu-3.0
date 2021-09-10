import React, { useCallback, useReducer, useEffect } from 'react';

// 초기상태
const initialState = {
  loading: true,
  data: null,
  error: null,
};

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

// 리듀서
function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error('reducer error');
  }
}

export default function useAsync(callback) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    try {
      dispatch({ type: LOADING });

      const response = await callback();
      dispatch({ type: SUCCESS, data: response });
    } catch (e) {
      dispatch({ type: ERROR, error: e });
    }
  }, [callback]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [state, fetchData];
}
