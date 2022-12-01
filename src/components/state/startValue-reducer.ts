
const initialState:number = 0

export const startValueReducer = (state = initialState, action:changeStartValueACType) => {
  switch (action.type) {
    case 'CHANGE-START-VALUE' : {
      return state = action.payload.e
    }
    default:
      return state
  }
}

type changeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (e: number) => {
  return {
    type: 'CHANGE-START-VALUE',
    payload: {
      e: e
    }
  }as const
}

