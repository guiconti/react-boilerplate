import { FUNDS } from '../types/wallet';
import { retrieveFunds } from '../services/walletServices';

// example of a thunk using the redux-thunk middleware
export function getFunds() {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: FUNDS,
      // value: 13.37,
      value: await retrieveFunds(),
    });
  };
}

// export function anotherExample(fieldName, value) {
//   return {
//     type: FOO_ANOTHER_EXAMPLE,
//     fieldName,
//     value,
//   };
// }
