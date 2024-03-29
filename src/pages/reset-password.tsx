import React, {useCallback, useEffect} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {resetPasswordRequest} from "../services/actions/reset-password";
import {useForm} from "../hooks/useForm";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const {forgotPasswordSuccess, resetPasswordSuccess} = useAppSelector(store => store.user)
  const dispatch = useAppDispatch();

  const {values, handleChange} = useForm({});

  useEffect(() => {
    (!forgotPasswordSuccess || resetPasswordSuccess) && navigate('/login');
  }, [forgotPasswordSuccess, resetPasswordSuccess, navigate]);

  const onResetPasswordSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    values.password && values.token && dispatch(resetPasswordRequest(values.password, values.token));
  }, [dispatch, values]);

  const formContent = (
    <form className="form mb-20" onSubmit={onResetPasswordSubmit}>
      <div className="mb-6">
        <PasswordInput
          placeholder="Введите новый пароль"
          onChange={handleChange}
          value={values.password || ''}
          name={'password'} />
      </div>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={handleChange}
          value={values.token || ''}
          name={'token'}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <Button type="primary" size="medium" htmlType="submit">
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