import React, {useCallback, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {getCookie, handleChangeInput} from "../utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest} from "../services/actions/login";
import {AppDispatch, RootState} from "../index";

export const LoginPage = () => {
  const navigate = useNavigate();
  const token = getCookie('accessToken');
  const {loginFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    token !== undefined && navigate('/');
  }, [token, navigate]);

  const onLoginSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    login.email && login.password && dispatch(loginRequest(login));
    !loginFailed && navigate('/');
  }, [dispatch, login, loginFailed, navigate]);

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => handleChangeInput(e, login, setLogin)}
          value={login.email}
          name={'email'}
          error={loginFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          onChange={e => handleChangeInput(e, login, setLogin)}
          value={login.password}
          name={'password'} />
      </div>
      <Button type="primary" size="medium" htmlType="button" onClick={onLoginSubmit}>
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