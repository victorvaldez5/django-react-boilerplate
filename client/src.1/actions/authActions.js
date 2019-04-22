import * as types from './authTypes'

export const registerUserAction = (user) => {
  return {
    type: types.REGISTER_REQUEST,
    user
  }
}

function requestLogin(creds) {
  return {
	type: types.LOGIN_REQUEST,
	isFetching: true,
	isAuthenticated: false,
	creds
  }
}

function recieveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message){
	return {
		type: types.LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export function loginUser(creds) {
	let config = {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `username=${creds.username}&password=${creds.password}`
  }

	return dispatch => {
		dispatch(requestLogin(creds))

		return fetch('http://localhost:8000/sessions/create', config)
			.then(response => 
				response.json().then(user => ({ user, response }))
					).then(({user, response }) => {
						if (!response.ok) {
							dispatch(loginError(user.message))
							return Promise.reject(user)
						} else {
							localStorage.setItem('id_token', user.id_token)
							localStorage.setItem('id_token', user.access_token)

							dispatch(recieveLoginuser)
						}
					}).catch(err => console.log("Error: ", err))
	}
}


function requestLogout() {
	return {
		type: types.LOGOUT_REQUEST,
		isFetching: true,
		isAuthenticated: true
	}
}

function receiveLogout() {
	return {
		type: types.LOGOUT_SUCCESS,
		isFetching: false,
		isAuthenticated: false
	}
}

export function logoutUser() {
	return dispatch => {
		dispatch(requestLogout())
		localStorage.removeItem('id_token')
		localStorage.removeItem('access_token')
		dispatch(receiveLogout())
	}
}
