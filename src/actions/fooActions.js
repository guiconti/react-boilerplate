import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import { retrieveExample } from '../services/fooServices'; 

// example of a thunk using the redux-thunk middleware
export function getExample(value) {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: FOO_EXAMPLE,
      payload: {
        value: await retrieveExample(value),
      }
    });
  };
}

export function getAnotherExample(fieldName, value) {
  return {
    type: FOO_ANOTHER_EXAMPLE,
    payload: {
      fieldName,
      value,
    },
  };
}
