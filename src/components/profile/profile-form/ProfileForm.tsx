import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {RefObject, useCallback, useEffect, useRef, useState} from "react";
import {getCookie} from "../../../utils/helpers";

import styles from "./profile-form.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../index";
import {getUserRequest, updateUserRequest} from "../../../services/actions/user";

const ProfileForm = () => {
  const {user} = useSelector((store: RootState) => store.user);
  const dispatch: AppDispatch = useDispatch();
  const token = getCookie('accessToken');
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [profileState, setProfileState] = useState({
    name: {
      value: user?.name || '',
      disabled: true,
    },
    email: {
      value: user?.email || '',
      disabled: true
    },
    password: {
      value: '',
      disabled: true
    }
  });

  useEffect(() => {
    if (user === null && token !== undefined) {
      dispatch(getUserRequest());
    }
  }, [dispatch, user, token]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileState({
      ...profileState,
      [e.target.name]: { ...profileState[e.target.name as keyof typeof profileState], value: e.target.value },
    });
  };

  const onIconClick = useCallback((ref: RefObject<HTMLInputElement> | null, name: string) => {
    setProfileState({
      ...profileState,
      [name]: {
        ...profileState[name as keyof typeof profileState],
        disabled: !profileState[name as keyof typeof profileState].disabled
      }
    });
    setTimeout(() => ref?.current?.focus(), 0);
  }, [profileState]);

  const onBlur = useCallback((name: string) => {
    setProfileState({
      ...profileState,
      [name]: {
        ...profileState[name as keyof typeof profileState],
        disabled: !profileState[name as keyof typeof profileState].disabled
      }
    });
  }, [profileState]);

  const onSubmit = useCallback(() => {
    dispatch(updateUserRequest({
      'name': profileState.name.value,
      'email': profileState.email.value,
      'password': profileState.password.value
    }));
  }, [dispatch, profileState]);

  const onReset = useCallback(() => {
    setProfileState({
      ...profileState,
      name: {
        ...profileState.name,
        value: user?.name
      },
      email: {
        ...profileState.email,
        value: user?.email
      }
    });
  }, [profileState, user?.name, user?.email]);

  return (
    <form className={styles.form}>
      <div className="mb-6">
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={onChange}
          icon={profileState.name.disabled ? 'EditIcon' : 'CloseIcon'}
          value={profileState.name.value}
          name={'name'}
          ref={nameRef}
          error={false}
          onBlur={() => onBlur('name')}
          onIconClick={() => onIconClick(nameRef, 'name')}
          errorText={'Ошибка'}
          size={'default'}
          disabled={profileState.name.disabled}
        />
      </div>
      <div className="mb-6">
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={onChange}
          icon={profileState.email.disabled ? 'EditIcon' : 'CloseIcon'}
          value={profileState.email.value}
          name={'email'}
          ref={emailRef}
          error={false}
          onBlur={() => onBlur('email')}
          onIconClick={() => onIconClick(emailRef, 'email')}
          errorText={'Ошибка'}
          size={'default'}
          disabled={profileState.email.disabled}
        />
      </div>
      <div className="mb-6">
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={onChange}
          icon={profileState.password.disabled ? 'EditIcon' : 'CloseIcon'}
          value={profileState.password.value}
          name={'password'}
          ref={passwordRef}
          error={false}
          onBlur={() => onBlur('password')}
          onIconClick={() => onIconClick(passwordRef, 'password')}
          errorText={'Ошибка'}
          size={'default'}
          disabled={profileState.password.disabled}
        />
      </div>
      <div className={styles.formButtons}>
        <Button type="secondary" extraClass="mr-5 ml-auto" size="medium" htmlType={"button"} onClick={onReset}>
          Отмена
        </Button>
        <Button type="primary" size="medium" htmlType={"button"} onClick={onSubmit}>
          Сохранить
        </Button>
      </div>
    </form>
  );
}

export default ProfileForm;