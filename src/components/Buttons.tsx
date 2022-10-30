import React from 'react';
import s from './UniversalButton/Button.module.css'

type PropsType = {
  incrHandler: () => void
  resetHandler: () => void
  count: number
}

export const Buttons = (props: PropsType) => {


  return (
    <div>
      <button className={s.button} disabled={props.count >= 5} onClick={props.incrHandler}>inc</button>
      <button className={s.button} disabled={props.count <= 0} onClick={props.resetHandler}>reset</button>
    </div>
  );
};

