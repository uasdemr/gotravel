import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import offerReducer from '../offer-reducer';

type Reducer = ReturnType<typeof offerReducer>;

export const redirect: Middleware<unknown, Reducer>=
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'app/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
