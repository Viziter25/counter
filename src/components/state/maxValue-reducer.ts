
const initialState:number = 0

export const maxValueReducer = (state = initialState, action:changeMaxValueACType):number => {
  switch (action.type) {
    case 'CHANGE-MAX-VALUE' : {
      return state = action.payload.e
    }
    default:
      return state
  }
}

type changeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (e: number) => {
  return {
    type: 'CHANGE-MAX-VALUE',
    payload: {
      e: e
    }
  }as const
}