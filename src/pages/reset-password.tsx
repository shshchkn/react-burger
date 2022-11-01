import React, {useCallback, useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {handleChangeInput} from "../utils/helpers";
import {Link} from "react-router-dom";
import {AppDispatch, RootState} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordRequest} from "../services/actions/reset-password";

export const ResetPasswordPage = () => {
  const {resetPasswordFailed} = useSelector((store: RootState) => store.user)
  const dispatch: AppDispatch = useDispatch();
  const [reset, setReset] = useState({
    password: '',
    token: ''
  });

  const onResetPasswordSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    reset.password &&
    reset.token &&
    dispatch(resetPasswordRequest(reset));
  }, [dispatch, reset]);

  console.log(reset)

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <PasswordInput
          placeholder="Введите новый пароль"
          onChange={e => handleChangeInput(e, reset, setReset)}
          value={reset.password}
          name={'password'} />
      </div>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => handleChangeInput(e, reset, setReset)}
          value={reset.token}
          name={'token'}
          error={resetPasswordFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <Button type="primary" size="medium" htmlType="button" onClick={onResetPasswordSubmit}>
        Сохранить
      </Button>
    </form>
  )

  return (
    <div className="form-block">
      <p className="text text_type_main-medium mb-6">Восстановление пароля</p>
      {formContent}
      <div className="text text_type_main-default mb-4">
        <span className="text_color_inactive">Вспомнили пароль?</span>
        <Link className="text_color_accent ml-2" to="/login">Войти</Link>
      </div>
    </div>
  );
}