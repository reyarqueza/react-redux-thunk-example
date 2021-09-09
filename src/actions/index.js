export const IS_LOADING = 'IS_LOADING';
export const HELLO_RESPONSE = 'HELLO_RESPONSE';

export function isLoading(isLoading = false) {
  return {
    type: IS_LOADING,
    isLoading: isLoading
  }
}

function helloResponse(json) {
  return {
    type: HELLO_RESPONSE,
    json: json
  }
}

export function fetchHello() {
  return (dispatch) => {
    dispatch(isLoading(true));
    fetch('http://5afa7456edf5520014cbd352.mockapi.io/hello-world')
      .then( (response) => {
        return response;
      })
      .then((response) => response.json())
      .then( (json) => {
        dispatch(isLoading(false));
        dispatch(helloResponse(json));
      });
  }
}