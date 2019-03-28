import { combineReducers } from "redux"
import Comments from "./comments"
import posts from "./posts"

const rootReducer = combineReducers({ posts, Comments })

export default rootReducer