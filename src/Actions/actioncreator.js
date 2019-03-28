export function ADD_LIKES(index){
    return {
        type:"ADD_LIKES",
        index
    }
}

export function addComment(postId,author,comment){
    console.log("dispach comments")
    return {
        type:"ADD_COMMENT",
        postId,
        author,
        comment
    }
}

export function removeComment(postId,index){
    return {
        type:"REMOVE_COMMENT",
        postId,
        index
    }
}
