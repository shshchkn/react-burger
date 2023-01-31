import React, {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {loginRequest} from "../services/actions/login";
import {useForm} from "../hooks/useForm";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {loginFailed} = useAppSelector(store => store.user);
  const dispatch = useAppDispatch();

  const {values, handleChange} = useForm({});

  const onLoginSubmit: React.FormEventHandler<HTMLFormElement> = useCallback((e) => {
    e.preventDefault();
    values.email && values.password && dispatch(loginRequest(values.email, values.password));
    !loginFailed && navigate('/');
  }, [dispatch, values, loginFailed, navigate]);

  const formContent = (
    <form className="form mb-20" onSubmit={onLoginSubmit}>
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={handleChange}
          value={values?.email || ''}
          name={'email'}
          error={loginFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          onChange={handleChange}
          value={values?.password || ''}
          name={'password'} />
      </div>
      <Button type="primary" data-signin size="medium" htmlType="submit">
        Войти
      </Button>
    </form>
  );

  return (
    <div className="form-block">
      <p className="text text_type_main-medium mb-6">Вход</p>
      {formContent}
      <div className="text text_type_main-default mb-4">
        <span className="text_color_inactive">Вы — новый пользователь?</span>
        <Link className="text_color_accent ml-2" to="/register">Зарегистрироваться</Link>
      </div>
      <div className="text text_type_main-default">
        <span className="text_color_inactive">Забыли пароль?</span>
        <Link className="text_color_accent ml-2" to="/forgot-password">Восстановить пароль</Link>
      </div>
    </div>
  );
}