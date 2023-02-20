export const ShrtcodeApi = (url) => {

  const handleError = (response) => {
    if (!response.ok) throw Error(response.status);
    return response;
  }
  
  const handledFetch = (request) => {
    return fetch(request)
    .then(handleError)
  }

  const request = `${"https://api.shrtco.de/v2/shorten?url="}${url}`; 


  return handledFetch ( request )
  .then(response => response.json())
};