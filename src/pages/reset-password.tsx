import React, {useState} from "react";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {handleChangeInput} from "../utils/helpers";
import {Link} from "react-router-dom";

export const ResetPasswordPage = () => {
  const [reset, setReset] = useState({
    password: '',
    token: ''
  });

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <PasswordInput
          placeholder="Введите новый пароль"
          onChange={e => handleChangeInput(e, reset.password, setReset)}
          value={reset.password}
          name={'password'} />
      </div>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={e => handleChangeInput(e, reset.token, setReset)}
          value={reset.token}
          name={'token'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <Button type="primary" size="medium" htmlType="button">
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