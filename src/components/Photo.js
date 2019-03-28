import React from "react"
import { Link } from "react-router-dom"
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Photo extends React.Component {
    render() {
        const { post, i } = this.props
        const { Comments } = this.props.test
        console.log("bbb=", this.props)
        return (
            <div className="photo-grid">
                <figure className="photo-figure">
                    <div className="photo-wrap">
                        <img src={post.img_src} alt="123" />
                        <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                            <span key={post.likes} className="likes-heart">{post.likes}</span>
                        </CSSTransitionGroup>
                    </div>
                    <figcaption>
                        <p className="photo-caption">{post.caption}</p>
                        <div className="control-button">
                            <button className="button" onClick={this.props.ADD_LIKES.bind(null, i)}>&hearts; {post.likes}</button>
                            <Link to={`/comment/${post.code}`} className="button">
                                ✎ {Comments[post.code] ? Comments[post.code].length : 0}
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default Photo