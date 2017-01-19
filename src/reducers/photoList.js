
const photoList = (state = {}, action) => {
 switch (action.type) {
   case 'SET_INITIAL_STATE_SM':
   		let initialStateSm = { ...state};
          initialStateSm['sm'] = { ...action.initialStateSm};
     return initialStateSm

   case 'SET_INITIAL_STATE_LG':
       let initialStateLg = { ...state};
          initialStateLg['lg'] = { ...action.initialStateLg};
     return initialStateLg
 
   default:
      return state
    }
}

export default photoList
