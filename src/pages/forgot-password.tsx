import React, {useState} from "react";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {handleChangeInput} from "../utils/helpers";
import {Link} from "react-router-dom";

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const formContent = (
    <form className="form mb-20">
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'Укажите e-mail'}
          onChange={e => handleChangeInput(e, email, setEmail)}
          value={email}
          name={'email'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
        />
      </div>
      <Button type="primary" size="medium" htmlType="button">
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