import fetch from 'isomorphic-fetch'

const requestData = () => {
  return {
    type: 'REQUEST_DATA'
  }
}

const receiveData = (users) => {
  return {
    type: 'RECEIVE_DATA',
    users,
    receivedAt: Date.now()
  }
}

export const fetchData = () => {
  return dispatch => {
    dispatch(requestData())
    return fetch(`https://randomuser.me/api/?results=1000`)
      .then(response => response.json())
      .then(users => dispatch(receiveData(users.results)))
  }
}
