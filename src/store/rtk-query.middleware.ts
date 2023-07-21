import { Middleware, isRejectedWithValue } from '@reduxjs/toolkit';

/* const rtkQueryMiddleware: Middleware = (store: MiddlewareAPI) => (next) => (action) => { */
const rtkQueryMiddleware: Middleware = () => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		/* eslint-disable-next-line no-console */
		console.log('We got a rejected action!', { action });

		switch (action.payload?.status) {
			// *** Server error ***
			case 500:
				break;

			// *** Role error ***
			case 403:
				break;

			// *** Auth error ***
			case 401:
				break;

			default:
				break;
		}
	}

	return next(action);
};

export default rtkQueryMiddleware;
