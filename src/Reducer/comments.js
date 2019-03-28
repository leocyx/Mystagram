
function postcomment(state = {}, action) {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ]
      case "REMOVE_COMMENT":
      return [
        ...state.slice(0,action.index),
        ...state.slice(action.index+1)
      ]
    default: return state
  }
 
}

function Comments(state = {}, action) {
  console.log("action=",{
    ...state,
    [action.postid]: postcomment(state[action.postId], action)
  })
  console.log("state=",state);
  if (action.postid !== "undefind") {
    return {
      ...state,
      [action.postId]: postcomment(state[action.postId], action)
    }
  }
  return state
}


export default Comments