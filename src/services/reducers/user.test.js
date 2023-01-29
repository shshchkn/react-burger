import {userReducer} from './user';
import * as userTypes from "../actions/user";
import * as registerTypes from "../actions/register";
import * as loginTypes from "../actions/login";
import * as logoutTypes from "../actions/logout";
import * as forgotPasswordTypes from "../actions/forgot-password";
import * as resetPasswordTypes from "../actions/reset-password";
import {
  RESET_PASSWORD_USER_FAILED,
  RESET_PASSWORD_USER_REQUEST,
  RESET_PASSWORD_USER_SUCCESS
} from "../actions/reset-password";

const initialState = {
  user: null,
  isLoggedIn: false,

  userRequest: false,
  userFailed: false,

  registerRequest: false,
  registerSuccess: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordFailed: false,

  resetPasswordRequest: false,
  resetPasswordSuccess: false,
  resetPasswordFailed: false,
}

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: userTypes.GET_USER_REQUEST,
      })
    ).toEqual({
      ...initialState,
      userRequest: true,
      userFailed: false
    })
  })

  it('should handle GET_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: userTypes.GET_USER_SUCCESS,
        user: {
          email: 'practicum@yandex.ru',
          name: 'Test'
        }
      })
    ).toEqual({
      ...initialState,
      user: {
        email: 'practicum@yandex.ru',
        name: 'Test'
      },
      userRequest: false,
      isLoggedIn: true,
      userFailed: false
    })
  })

  it('should handle GET_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: userTypes.GET_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      isLoggedIn: false,
      userRequest: false,
      userFailed: true
    })
  })

  it('should handle REGISTER_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: registerTypes.REGISTER_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false
    })
  })

  it('should handle REGISTER_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: registerTypes.REGISTER_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false
    })
  })

  it('should handle REGISTER_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: registerTypes.REGISTER_USER_SUCCESS
      })
    ).toEqual({
      ...initialState,
      registerRequest: false,
      registerSuccess: true,
      registerFailed: false
    })
  })

  it('should handle REGISTER_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: registerTypes.REGISTER_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true
    })
  })

  it('should handle LOGIN_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: loginTypes.LOGIN_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false
    })
  })

  it('should handle LOGIN_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: loginTypes.LOGIN_USER_SUCCESS,
        user: {
          email: 'practicum@yandex.ru',
          name: 'Test'
        }
      })
    ).toEqual({
      ...initialState,
      user: {
        email: 'practicum@yandex.ru',
        name: 'Test'
      },
      loginRequest: false,
      isLoggedIn: true,
      loginFailed: false
    })
  })

  it('should handle LOGIN_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: loginTypes.LOGIN_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      loginRequest: false,
      isLoggedIn: false,
      loginFailed: true
    })
  })

  it('should handle LOGOUT_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: logoutTypes.LOGOUT_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      logoutRequest: true,
      logoutFailed: false
    })
  })

  it('should handle LOGOUT_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: logoutTypes.LOGOUT_USER_SUCCESS
      })
    ).toEqual({
      ...initialState,
      logoutRequest: false,
      isLoggedIn: false,
      user: null,
      logoutFailed: false
    })
  })

  it('should handle LOGOUT_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: logoutTypes.LOGOUT_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true
    })
  })

  it('should handle FORGOT_PASSWORD_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: forgotPasswordTypes.FORGOT_PASSWORD_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordSuccess: false,
      forgotPasswordFailed: false
    })
  })

  it('should handle FORGOT_PASSWORD_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: forgotPasswordTypes.FORGOT_PASSWORD_USER_SUCCESS
      })
    ).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordSuccess: true,
      forgotPasswordFailed: false
    })
  })

  it('should handle FORGOT_PASSWORD_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: forgotPasswordTypes.FORGOT_PASSWORD_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordSuccess: false,
      forgotPasswordFailed: true
    })
  })

  it('should handle RESET_PASSWORD_USER_REQUEST', () => {
    expect(
      userReducer(initialState, {
        type: resetPasswordTypes.RESET_PASSWORD_USER_REQUEST
      })
    ).toEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false
    })
  })

  it('should handle RESET_PASSWORD_USER_SUCCESS', () => {
    expect(
      userReducer(initialState, {
        type: resetPasswordTypes.RESET_PASSWORD_USER_SUCCESS
      })
    ).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordSuccess: true,
      resetPasswordFailed: false
    })
  })

  it('should handle RESET_PASSWORD_USER_FAILED', () => {
    expect(
      userReducer(initialState, {
        type: resetPasswordTypes.RESET_PASSWORD_USER_FAILED
      })
    ).toEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true
    })
  })
})