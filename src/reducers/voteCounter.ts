const initialState = {
    counter:0,
    voted:false
}
interface InitialState{
    counter:number,
    voted:boolean
}


const voteCounterReducer = (state:InitialState = initialState, action:any) =>{
    switch(action.type){
        case 'toggleVote':
            return {
                    ...state,
                    voted:!state.voted,
                    counter:state.voted===false ? state.counter + 1 : state.counter - 1
            }
        default :
            return state
    }
}

export default voteCounterReducer