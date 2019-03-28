function posts(state=[],action){
    console.log("post")
    switch(action.type){
        case "ADD_LIKES":
        const i = action.index
        console.log(state)
        return [
            ...state.slice(0,i),
            {...state[i], likes:state[i].likes+1},
            ...state.slice(i+1)
        ]
        default:
        return state
    }
}

export default posts