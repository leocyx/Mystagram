import React from "react"
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actionceator from "../Actions/actioncreator"

import Photogrid from "./Photogrid"
import Single from "./Single"
import {Link, Route, Switch } from "react-router-dom"

class Header extends React.Component {
    render() {
        console.log(this.props.test)
        return (<div>
            <div className="head">
                <div className="head-title "><Link to="/">Mystagram</Link></div>
            </div>
                
            <Switch>
                <Route path="/" exact component={Photogrid} />
                <Route path="/Comment/:postid" component={Single} />
                
            </Switch>
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
export default withRouter(connect(mapStateToProps, mapDispatchtoProps)(Header))
