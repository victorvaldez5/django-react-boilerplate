export async function registerUserService(request) {
  const REGISTER_API_ENDPOINT = `${process.env.API_URL}/auth/register`
  const grant_type = 'grant_type=password'
  const credentials = `&username=${request.username}&password=${request.password}`
  const client = `&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: grant_type + credentials + client
  }
  try {
    const response = await fetch(REGISTER_API_ENDPOINT, parameters)
    return response
  } catch(err) {
    return err
  }   
}

export function setUserToken(response) {
  localStorage.setItem('id_token', user.id_token)
  localStorage.setItem('id_token', user.access_token)
  return Promise.resolve()
}