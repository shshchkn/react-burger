import React, {useCallback, useEffect} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../services/types";
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordRequest} from "../services/actions/forgot-password";
import {useForm} from "../hooks/useForm";

export const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const {forgotPasswordSuccess, forgotPasswordFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const {values, handleChange} = useForm({});

  const onForgotPasswordSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    values?.email && dispatch(forgotPasswordRequest(values.email));
  }, [dispatch, values]);

  useEffect(() => {
    if (forgotPasswordSuccess) {
      navigate('/reset-password');
    }
  }, [forgotPasswordSuccess, navigate]);

  const formContent = (
    <form className="form mb-20" onSubmit={onForgotPasswordSubmit}>
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={handleChange}
          value={values?.email || ''}
          name={'email'}
          error={forgotPasswordFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <Button type="primary" size="medium" htmlType="submit">
        Восстановить
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