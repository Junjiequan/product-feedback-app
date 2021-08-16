const initialState = {
    items:[
        {
            link:'Add_tags_for_solutions',
            title:'Add tags for solutions',
            detail:'Easier to search for solutions based on a specific stack.',
            category:'Enhancement',
            comments:[],
            vote:12,
        }
    ]
}

const onAdd = (currentItem:any, newItem:any) =>{
    const exist = currentItem.find((item:any)=>item.title === newItem.title);

    if(exist){
        alert('Feedback title existing.')
        return currentItem;
    } else {
        const addedNewItem = [...currentItem, {...newItem}]
        return addedNewItem;
    }
}





const feedbackReducer = (state:any=initialState,action:any)=>{
    switch(action.type){
        case 'ADD_FEEDBACK':
            return {
                ...state,
                items:onAdd(state.items,action.payload)
            }
        case 'EDIT_FEEDBACK':
            return {
                ...state,
            }
        case 'DEL_FEEDBACK':
            return {
                ...state,
            }
        case 'ADD_COMMENT':
            return{
                ...state,
            }
        case 'DEL_COMMENT':
            return{
                ...state,
            }
        case 'TOGGLE_VOTE':
            return{
                ...state,
                voted:!state.voted,
                counter:state.voted===false ? state.counter + 1 : state.counter - 1
            }
        default:
            return state
    }
}


export default feedbackReducer