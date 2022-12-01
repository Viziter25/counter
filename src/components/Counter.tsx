import React, {ChangeEvent, useEffect, useState} from 'react';
import {UniversalButtons} from './UniversalButton/UniversalButtons';
import s from './Counter.module.css';
import {CounterItem} from './CounterItem/CounterItem';
import {UniversalInput} from './UniversalInputs/UniversalInput';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {changeStartValueAC} from './state/startValue-reducer';
import {changeMaxValueAC} from './state/maxValue-reducer';
import {changeCounterAC, resetCounterAC} from './state/counter-reducer';


export const Counter = () => {

  const count = useSelector<AppRootStateType, number>(state => state.count)
  const startValue = useSelector<AppRootStateType, number>(state => state.startValue)
  const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)

  const dispatch = useDispatch()



  const [settings, setSettings] = useState(false)

  // const getDataLS = () => {
  //   // const countValue = localStorage.getItem('countValue');
  //   const startValue = localStorage.getItem('startValue');
  //   const maxValue = localStorage.getItem('maxValue');
  //
  //   if (startValue && maxValue) {
  //     dispatch(resetCounterAC(JSON.parse(startValue)))
  //     dispatch(changeStartValueAC(JSON.parse(startValue)))
  //     dispatch(changeMaxValueAC(JSON.parse(maxValue)))
  //   }
  // }
  //
  // useEffect(() => {
  //   getDataLS();
  // }, [])



  const incrHandler = () => {
    dispatch(changeCounterAC())
  }

  const resetHandler = () => {
    dispatch(resetCounterAC(+startValue))
  }

  let onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStartValueAC(+e.currentTarget.value))
  }
  let onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeMaxValueAC(+e.currentTarget.value))
  }


  const onClickShowHandler = () => {
    // localStorage.setItem('startValue', JSON.stringify(startValue))
    // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    // localStorage.setItem('countValue', JSON.stringify(count))
    //
    // let valueAsString = localStorage.getItem('startValue')
    //
    // if (valueAsString) {
    //   let newValue = JSON.parse(valueAsString)
    //   dispatch(resetCounterAC(+newValue))
    // }
    dispatch(resetCounterAC(startValue))
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
