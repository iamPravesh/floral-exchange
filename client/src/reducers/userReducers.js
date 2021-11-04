import * as userActions from '../actions/userActions'

let token = localStorage.getItem('jwtToken')

//Initial state of user
const INITIAL_STATE = {
  user: null,
  isAuthenticated: token ? true : false,
  loginMessage: null,
  isCalling: false,
  error: null
}

function userReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case userActions.REGISTER_REQUEST:
      return { ...state, isCalling: true }

    case userActions.REGISTER_SUCCESS:
      return {
        ...state,
        isCalling: false,
        loginMessage: action.payload.message,
      }

    case userActions.REGISTER_FAILURE:
      return {
        ...state,
        isCalling: false,
        loginMessage: action.payload.message,
        error: action.payload
      }

    case userActions.LOGIN_REQUEST:
      return { ...state, isCalling: true }

    case userActions.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: action.payload.token ? true : false,
        isCalling: false,
        loginMessage: action.payload.message,
      }

      case userActions.LOGIN_FAILURE:
        return {
          ...state,
          isCalling: false,
          loginMessage: action.payload.message,
          error: action.payload
        }

    default:
      return state
  }
}

export default userReducers
