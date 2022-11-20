import React, {useCallback} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../services/types";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest} from "../services/actions/register";
import {useForm} from "../hooks/useForm";

export const RegisterPage = () => {
  const {registerFailed} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const {values, handleChange} = useForm({});

  const onRegisterSubmit = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    values.name &&
    values.email &&
    values.password &&
    dispatch(registerRequest(values, navigate));
  }, [dispatch, values, navigate]);

  const formContent = (
    <form className="form mb-20" onSubmit={onRegisterSubmit}>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={handleChange}
          value={values?.name || ''}
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
          onChange={handleChange}
          value={values?.email || ''}
          name={'email'}
          error={registerFailed}
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