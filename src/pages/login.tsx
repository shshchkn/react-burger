import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {handleChangeInput} from "../utils/helpers";
import {useDispatch} from "react-redux";
import {loginRequest} from "../services/actions/login";
import {AppDispatch} from "../index";

export const LoginPage = () => {
  const dispatch: AppDispatch = useDispatch();

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const onLoginSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    login.email && login.password && dispatch(loginRequest(login));
  }, [dispatch, login]);

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => handleChangeInput(e, login, setLogin)}
          value={login.email}
          name={'email'}
          error={false}
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
  )

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