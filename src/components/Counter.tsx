import React, {ChangeEvent, useEffect, useState} from 'react';
import {UniversalButtons} from './UniversalButton/UniversalButtons';
import s from './Counter.module.css';
import {CounterItem} from './CounterItem/CounterItem';
import {UniversalInput} from './UniversalInputs/UniversalInput';


export const Counter = () => {


  const [count, setCount] = useState(0)

  let [startValue, setStartValue] = useState(0)
  let [maxValue, setEnd] = useState(0)

  const [settings, setSettings] = useState(false)

  const getDataLS = () => {
    // const countValue = localStorage.getItem('countValue');
    const startValue = localStorage.getItem('startValue');
    const maxValue = localStorage.getItem('maxValue');

    if (startValue && maxValue) {
      setCount(JSON.parse(startValue));
      setStartValue(JSON.parse(startValue));
      setEnd(JSON.parse(maxValue));
    }
  }

  useEffect(() => {
    getDataLS();
  }, [])

  const incrHandler = () => {
    setCount(+count + 1)
  }

  const resetHandler = () => {
    setCount(+startValue)
  }

  let onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStartValue(+e.currentTarget.value)
  }
  let onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setEnd(+e.currentTarget.value)
  }


  const onClickShowHandler = () => {
    localStorage.setItem('startValue', JSON.stringify(startValue))
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('countValue', JSON.stringify(count))

    let valueAsString = localStorage.getItem('startValue')

    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setCount(newValue)
    }
    setSettings(!settings)
  }


  const disabledInr = count >= maxValue
  const disabledReset = count <= startValue
  const disabledSet = startValue > maxValue|| startValue < 0 || maxValue < 0

  return (
    <div className={s.container}>
      {
        settings
          ? <div className={s.wrapper}>
            <UniversalInput title="start value:"
                            inputCallback={onChangeStartValueHandler}
                            error={disabledSet}
                            value={startValue}/>
            <UniversalInput title="max value:"
                            inputCallback={onChangeMaxValueHandler}
                            error={disabledSet}
                            value={maxValue}/>
          </div>
          : <div className={s.wrapper}><CounterItem count={count} maxValue={maxValue}/></div>
      }

      <div className={s.wrapper}>
        {
          !settings
            ? <div >
                <UniversalButtons name={'inc'} disabled={disabledInr} callback={incrHandler}/>
                <UniversalButtons name={'reset'} disabled={disabledReset} callback={resetHandler}/>
                <UniversalButtons name="Set" callback={onClickShowHandler} disabled={disabledSet}/>
            </div>
              : <UniversalButtons name="Set" callback={onClickShowHandler} disabled={disabledSet}/>
        }

      </div>
    </div>

  );
};
