import { createStore } from "redux"
import rootReducer from "./Reducer/index"
import posts from "./data/posts"
import Comments from "./data/Comments"
const defaultdata = {
    posts,
    Comments
}
console.log("c=",defaultdata)
const store = createStore(rootReducer, defaultdata)

export default store