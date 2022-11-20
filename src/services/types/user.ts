import * as userTypes from "../actions/user";
import * as registerTypes from "../actions/register";
import * as loginTypes from "../actions/login";
import * as logoutTypes from "../actions/logout";
import * as forgotPasswordTypes from "../actions/forgot-password";
import * as resetPasswordTypes from "../actions/reset-password";
import {TUser} from "./index";
import * as types from "../actions/ingredients";
import {GET_USER_FAILED, GET_USER_REQUEST, GET_USER_SUCCESS} from "../actions/user";
import {REGISTER_USER_REQUEST} from "../actions/register";
import {LOGIN_USER_REQUEST} from "../actions/login";
import {
  FORGOT_PASSWORD_USER_FAILED,
  FORGOT_PASSWORD_USER_REQUEST,
  FORGOT_PASSWORD_USER_SUCCESS
} from "../actions/forgot-password";
import {RESET_PASSWORD_USER_REQUEST} from "../actions/reset-password";

export type userState = {
  user: TUser | null,
  isLoggedIn: boolean,
  userRequest: boolean,
  userFailed: boolean,
  registerRequest: boolean,
  registerSuccess: boolean,
  registerFailed: boolean,
  loginRequest: boolean,
  loginFailed: boolean,
  logoutRequest: boolean,
  logoutFailed: boolean,
  forgotPasswordRequest: boolean,
  forgotPasswordSuccess: boolean,
  forgotPasswordFailed: boolean,
  resetPasswordRequest: boolean,
  resetPasswordSuccess: boolean,
  resetPasswordFailed: boolean
}

type TUserRequest = {
  type: typeof userTypes.GET_USER_REQUEST,
}

type TUserSuccess = {
  type: typeof userTypes.GET_USER_SUCCESS,
  user: TUser | null
}

type TUserFailed = {
  type: typeof userTypes.GET_USER_FAILED,
}

type TRegisterRequest = {
  type: typeof registerTypes.REGISTER_USER_REQUEST,
}

type TRegisterSuccess = {
  type: typeof registerTypes.REGISTER_USER_SUCCESS,
}

type TRegisterFailed = {
  type: typeof registerTypes.REGISTER_USER_FAILED,
}

type TLoginRequest = {
  type: typeof loginTypes.LOGIN_USER_REQUEST,
}

type TLoginSuccess = {
  type: typeof loginTypes.LOGIN_USER_SUCCESS,
  user: TUser | null
}

type TLoginFailed = {
  type: typeof loginTypes.LOGIN_USER_FAILED,
}

type TLogoutRequest = {
  type: typeof logoutTypes.LOGOUT_USER_REQUEST,
}

type TLogoutSuccess = {
  type: typeof logoutTypes.LOGOUT_USER_SUCCESS,
}

type TLogoutFailed = {
  type: typeof logoutTypes.LOGOUT_USER_FAILED,
}

type TForgotPasswordRequest = {
  type: typeof forgotPasswordTypes.FORGOT_PASSWORD_USER_REQUEST,
}

type TForgotPasswordSuccess = {
  type: typeof forgotPasswordTypes.FORGOT_PASSWORD_USER_SUCCESS,
}

type TForgotPasswordFailed = {
  type: typeof forgotPasswordTypes.FORGOT_PASSWORD_USER_FAILED,
}

type TResetPasswordRequest = {
  type: typeof resetPasswordTypes.RESET_PASSWORD_USER_REQUEST,
}

type TResetPasswordSuccess = {
  type: typeof resetPasswordTypes.RESET_PASSWORD_USER_SUCCESS,
}

type TResetPasswordFailed = {
  type: typeof resetPasswordTypes.RESET_PASSWORD_USER_FAILED,
}

export type TUserActions = TUserRequest
  | TUserSuccess
  | TUserFailed
  | TRegisterRequest
  | TRegisterSuccess
  | TRegisterFailed
  | TLoginRequest
  | TLoginSuccess
  | TLoginFailed
  | TLogoutRequest
  | TLogoutSuccess
  | TLogoutFailed
  | TForgotPasswordRequest
  | TForgotPasswordSuccess
  | TForgotPasswordFailed
  | TResetPasswordRequest
  | TResetPasswordSuccess
  | TResetPasswordFailed;