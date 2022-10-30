import React from 'react';
import s from './Button.module.css'

type PropsType = {
  callback: ()=> void
  name: string
  disabled:boolean

}

export const UniversalButtons = (props:PropsType) => {
  let {disabled, name ,callback} = props

  const onClickHandler = () => {
    callback()
  }
  return (
      <button className={s.button} disabled={disabled}  onClick={onClickHandler}>{name}</button>
  );
};