'use client'; // Required for client components

import { Provider } from 'react-redux';
import store from '../Redux/store';

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}