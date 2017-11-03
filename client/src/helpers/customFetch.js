export const customFetch = (url, opts) => {
  opts = opts || {}; // initialize opts

  let noop = () => ( true )
  let reject = function() {
    return Promise.reject('Route not found');
  }

  let on404 = opts.on404 || reject;

  let fetchOptions = {
     method: 'get',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('postcardToken')
     }
  }

  let mergedOptions = Object.assign(fetchOptions, opts)

  let handleResponse = (response) => ensureValidResponse(response, on404);

  return fetch(url, mergedOptions)
          .then(handleResponse)
          .then((response) => response.json())
}

let ensureValidResponse = (response, on404) => {
  if (response.status === 200) {
    return response
  } else if (response.status === 401) {
    window.location = "/login/unauthorized"
  } else if (response.status === 404) {
    on404()
  } else if (response.status === 201) {
    // successfully created a record
    return response;
  } else {
    console.log("unkonwn: ", response);
    return response;
  }
}


export default customFetch;
