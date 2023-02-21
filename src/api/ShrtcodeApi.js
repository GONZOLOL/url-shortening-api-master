export const ShrtcodeApi = (url) => {

  const request = `${"https://api.shrtco.de/v2/shorten?url="}${url}`; 

  const handleResponse = (response) => {
    if (!response.ok) throw Error(response.status);
    return response;
  }
  
  const handledFetch = () => {
    return fetch(request)
    .then(handleResponse)
    .then(data => data.json())
  }

  return handledFetch();
};