import React, {ChangeEvent} from 'react';
import s from './UniversalInput.module.css'

type Propstype = {
  title: string
  inputCallback: (e: ChangeEvent<HTMLInputElement>) => void
  error: boolean
  value:number
}


export const UniversalInput = (props: Propstype) => {

  const inputCallback = (e: ChangeEvent<HTMLInputElement>) => {
    props.inputCallback(e)
  }

  return (
    <div className={s.container}>
      <span className={s.inputTitle}>{props.title}</span>
      <input value={props.value} type='number' className={ props.error ? s.input+ ' ' + s.errorInput : s.input} onChange={inputCallback}/>
    </div>
  );
};
