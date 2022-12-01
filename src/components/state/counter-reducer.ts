
const initialState:number = 0

type ActionType = changeCounterACType | resetCounterACType

export const counterReducer = (state = initialState, action:ActionType) => {
  switch (action.type) {
    case 'CHANGE-COUNTER' : {
      return state = state + 1
    }
    case 'RESET-COUNTER' : {
      return state = action.payload.startValue
    }
    default:
      return state
  }
}

type changeCounterACType = ReturnType<typeof changeCounterAC>
export const changeCounterAC = () => {
  return {
    type: 'CHANGE-COUNTER'
  }as const
}

type resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = (startValue: number) => {
  return {
    type: 'RESET-COUNTER',
    payload:{
      startValue:startValue
    }
  }as const
}