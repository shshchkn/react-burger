import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED
} from "../actions/user";

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED
} from "../actions/register"

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} from "../actions/login";

import {
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILED
} from "../actions/logout";

import {
  FORGOT_PASSWORD_USER_REQUEST,
  FORGOT_PASSWORD_USER_SUCCESS,
  FORGOT_PASSWORD_USER_FAILED
} from "../actions/forgot-password";

import {
  RESET_PASSWORD_USER_REQUEST,
  RESET_PASSWORD_USER_SUCCESS,
  RESET_PASSWORD_USER_FAILED
} from "../actions/reset-password";

const initialState = {
  user: null,

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

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        userRequest: true,
        userFailed: false
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        userRequest: false,
        user: action.user,
        userFailed: false
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        userRequest: false,
        userFailed: true
      };
    }

    case REGISTER_USER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerRequest: false,
        registerSuccess: true,
        registerFailed: false
      };
    }
    case REGISTER_USER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true
      };
    }

    case LOGIN_USER_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false
      };
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        loginRequest: false,
        user: action.user,
        loginFailed: false
      };
    }
    case LOGIN_USER_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true
      };
    }

    case LOGOUT_USER_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutFailed: false
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        user: null,
        logoutFailed: false
      };
    }
    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutFailed: true
      };
    }

    case FORGOT_PASSWORD_USER_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordSuccess: false,
        forgotPasswordFailed: false
      };
    }
    case FORGOT_PASSWORD_USER_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: true,
        forgotPasswordFailed: false
      };
    }
    case FORGOT_PASSWORD_USER_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordSuccess: false,
        forgotPasswordFailed: true
      };
    }

    case RESET_PASSWORD_USER_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false
      };
    }
    case RESET_PASSWORD_USER_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
        resetPasswordFailed: false
      };
    }
    case RESET_PASSWORD_USER_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true
      };
    }

    default: {
      return state;
    }
  }
}