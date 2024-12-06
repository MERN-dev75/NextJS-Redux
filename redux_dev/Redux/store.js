import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import reducer from "./rootReducer";
import { configureStore } from '@reduxjs/toolkit';

export const axiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/`,
    headers: {
      "Content-Type": "application/json",
    },
  });

  const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: axiosInstance,
        },
      }),
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development mode
  });

  // const enhancers = compose(
  //   composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
  // );
  // let store = createStore(reducer, enhancers);

  export default store;
