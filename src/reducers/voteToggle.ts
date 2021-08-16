const initialState = {
    voted:false
}
interface InitialState{
    voted:boolean
}


const voteToggle = (state:InitialState = initialState, action:any) =>{
    switch(action.type){
        case 'toggleVote':
            return {
                    ...state,
                    voted:!state.voted,
            }
        default :
            return state
    }
}

export default voteToggle