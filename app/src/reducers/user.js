const initialState = {
  users: [],
  loading: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return Object.assign({}, state, { loading: true })
    case 'RECEIVE_DATA':
      return Object.assign({}, state, {
        loading: false,
        users: action.users
      })
    default:
      return state
  }
}

export default user
