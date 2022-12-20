import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

const STATUS = Object.freeze({
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
});

// STATUS.ERROR = "kdmkm"
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    status: STATUS.SUCCESS,
    token: "",
    isAuth: false,
  },
  reducers: {
    setStatus: function (state, action) {
      state.status = action.payload;
    },
    setToken: function (state, action) {
      //console.log(action.payload)
      state.token = action.payload;
    },
    setIsAuth: function (state, action) {
      state.isAuth = action.payload;
    },
  },
});

const { setStatus, setToken, setIsAuth } = authenticationSlice.actions;

export default authenticationSlice.reducer;

export const userRegister = (obj) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));

      const { data } = await axios(
        `https://shy-tan-coypu-garb.cyclic.app/api/v1/register`,
        {
          method: "post",
          data: {
            ...obj,
          },
        }
      );

      if (data?.success) {
        //console.log(data);
        // dispatch(setToken(data?.token));
        // dispatch(setIsAuth(true));
      }

      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
export const userLogin = (val) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setStatus(STATUS.LOADING));

      const { data } = await axios(
        `https://shy-tan-coypu-garb.cyclic.app/api/v1/login`,
        {
          method: "post",
          data: {
            ...val,
          },
        }
      );

      if (data?.success) {
        console.log(data.status);

        dispatch(setToken(data.token));
        dispatch(setIsAuth(true));
      }

      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};

export const userLogout = () => {
  return async function (dispatch, getState) {
    try {
      dispatch(setStatus(STATUS.LOADING));
      dispatch(setToken(""));
      dispatch(setIsAuth(false));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUS.ERROR));
    }
  };
};
