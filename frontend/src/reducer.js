export const initialState = {
  user: null,
  eventDate: 'Fri Oct 29 2020 14:30:0 GMT+0530 (India Standard Time)',
  score: 0,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
      }
    case 'INCREMENT_SCORE':
      return {
        ...state,
        score: action.score,
      }
    default:
      return state
  }
}
