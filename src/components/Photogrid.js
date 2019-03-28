import React from "react"
import Photo from "./Photo"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionceator from "../Actions/actioncreator"
import { withRouter } from 'react-router-dom'
class Photogrid extends React.Component {
    render() {
        return (
            <div className="photogrid">
                {this.props.test.posts.map((post, i) => {return <Photo post={post} key={i} i={i}{...this.props} />})}

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
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Photogrid))