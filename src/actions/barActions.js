import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';
import { retrieveExample } from '../services/barServices';

// example of a thunk using the redux-thunk middleware
export function getExample(value) {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    const example = await retrieveExample(value);
    return dispatch({
      type: BAR_EXAMPLE,
      payload: {
        value: example,
      },
    });
  };
}

export function getAnotherExample(fieldName, value) {
  return {
    type: BAR_ANOTHER_EXAMPLE,
    payload: {
      fieldName,
      value
    }
  };
}
