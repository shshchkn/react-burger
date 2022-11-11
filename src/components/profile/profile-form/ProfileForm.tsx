import {Input} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {RefObject, useCallback, useEffect, useRef, useState} from "react";
import {handleChangeInput} from "../../../utils/helpers";

import styles from "./profile-form.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../index";
import {getUserRequest} from "../../../services/actions/user";

const ProfileForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const {user} = useSelector((store: RootState) => store.user);

  const [profileState, setProfileState] = useState({
    name: '',
    email: '',
    password: ''
  });

  const onIconClick = useCallback((e: React.MouseEvent<HTMLDivElement>, ref: RefObject<HTMLInputElement> | null) => {
    ref?.current?.toggleAttribute('disabled');
    setTimeout(() => ref?.current?.focus(), 0);
  }, [])

  const formContent = (
    <Input
      type={'text'}
      placeholder={'Имя'}
      onChange={e => handleChangeInput(e, profileState, setProfileState)}
      icon={'EditIcon'}
      value={user.name}
      name={'name'}
      ref={nameRef}
      error={false}
      onIconClick={e => onIconClick(e, nameRef)}
      errorText={'Ошибка'}
      size={'default'}
      disabled={true}
    />
  );

  return (
    <form className={styles.form}>
      {formContent}
    </form>
  );
}

export default ProfileForm;