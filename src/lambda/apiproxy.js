const axios = require("axios")

export function handler(event, context, callback) {
  // Let's log some stuff we already have.
  console.log("logging event.....", event)
  // Get env var values
  const { API_KEY, API_URL, API_KEY_PARAM, API_KEY_HEADER } = process.env
  // If API_KEY_PARAM, add the API_KEY to that parameter
  let params = event.queryStringParameters
  if (API_KEY_PARAM) {
    console.log("adding api key to params...")
    params[API_KEY_PARAM] = API_KEY
  }
  // If API_KEY_HEADER, add the API_KEY to that header
  let headers= {}
  if (API_KEY_HEADER) {
    console.log("adding api key to header...")
    headers[API_KEY_HEADER] = API_KEY
  }
   // Here's a function we'll use to define how our response will look like when we call callback
  const pass = (body) => {callback( null, {
    statusCode: 200,
    headers: {"content-type": "application/json"},
    body: JSON.stringify(body)
  })}

  // Perform the API call.
  const get = () => {
    axios.get(API_URL, {
      params,
      headers
    })
    .then((response) =>
      {
        console.log(response.data)
        pass(response.data)
      }
    )
    .catch(err => pass(err))
  }
  if(event.httpMethod == 'GET'){
    get()
  }
}
