import React, {useCallback} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../services/actions/login";
import {AppDispatch, RootState} from "../index";
import {useForm} from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate();
  const {loginFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const {values, handleChange} = useForm({});

  const onLoginSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    values.email && values.password && dispatch(loginRequest(values));
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
      <Button type="primary" size="medium" htmlType="submit">
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