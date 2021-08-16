 //vote controller
export const toggleVote = ()=>{
    return {
        type:'toggleVote'
    }
}

export const addFeedback = (item:any)=>{
    return{
        type:'ADD_FEEDBACK',
        payload:item,
    }
}
