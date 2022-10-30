import React from 'react';
import s from '../Counter.module.css';

type PropsType = {
  count: number
maxValue: number
}

export const CounterItem = (props:PropsType) => {
  let {count} = props
  let classNameCount = count === props.maxValue ? s.default + ' ' + s.red : s.default

  return (
    <div className={classNameCount}>{count}</div>
  );
};
