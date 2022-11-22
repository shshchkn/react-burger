import React, {useState} from "react";
import {TUseForm, TInputNames} from '../services/types'

export const useForm = (inputValues: TUseForm<TInputNames>) => {
  const [values, setValues] = useState(inputValues);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}