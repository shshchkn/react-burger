import React, {useCallback, useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {handleChangeInput} from "../utils/helpers";
import {Link} from "react-router-dom";
import {AppDispatch, RootState} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest} from "../services/actions/register";

export const RegisterPage = () => {
  const {registerFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onRegisterSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    register.name &&
    register.email &&
    register.password &&
    dispatch(registerRequest(register));
  }, [dispatch, register]);

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => handleChangeInput(e, register, setRegister)}
          value={register.name}
          name={'name'}
          error={registerFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => handleChangeInput(e, register, setRegister)}
          value={register.email}
          name={'email'}
          error={registerFailed}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <div className="mb-6">
        <PasswordInput
          onChange={e => handleChangeInput(e, register, setRegister)}
          value={register.password}
          name={'password'} />
      </div>
      <Button type="primary" size="medium" htmlType="button" onClick={onRegisterSubmit}>
        Зарегистрироваться
      </Button>
    </form>
  )

  return (
    <div className="form-block">
      <p className="text text_type_main-medium mb-6">Регистрация</p>
      {formContent}
      <div className="text text_type_main-default">
        <span className="text_color_inactive">Уже зарегистрированы?</span>
        <Link className="text_color_accent ml-2" to="/login">Войти</Link>
      </div>
    </div>
  );
}