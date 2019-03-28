import React from "react"
import Photo from "./Photo"
import Comment from "./Comment"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionceator from "../Actions/actioncreator"
import { withRouter } from 'react-router-dom'
class Single extends React.Component {
    render() {
        console.log(this.props.match.params.postid)
        const i = this.props.test.posts.findIndex((post) => post.code === this.props.match.params.postid)
        console.log("aa=", this.props.test.Comments)
        console.log("SS=", this.props.test.Comments[this.props.match.params.postid])
        const comments = this.props.test.Comments[this.props.match.params.postid]
        return (
            <div className="single-photo">
                <Photo i={i} post={this.props.test.posts[i]} {...this.props} />
                <Comment comment={comments} {...this.props} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        test: state
    }
}
function mapDispatchtoProps(dispatch) {
    return bindActionCreators(actionceator, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Single))