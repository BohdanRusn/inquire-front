import { combineReducers } from '@reduxjs/toolkit';

import api from './rtk.config';
import { toastReducer } from "../redux/slices/toast";
import { modalReducer } from "../redux/slices/modal";


const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	toast: toastReducer,
	modal: modalReducer,
});

export default rootReducer;
