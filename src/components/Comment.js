import React, { Component } from 'react';

class Comment extends Component {
  add_comments(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.match.params.postid,i)}>x</button>
        </p>
      </div>
    )
  }
  handlesubmit(e) {
    e.preventDefault();
    const { postid } = this.props.match.params
    const author = this.refs.author.value
    const newcomment = this.refs.comment.value
    this.props.addComment(postid, author, newcomment)
    this.refs.author.value=""
    this.refs.comment.value=""
  }
  render() {
    return (
      <div className="comments">
        {console.log(this.props.comment)}
        {console.log(this.props.match.params)}
        {this.props.comment.map((comment, i) => this.add_comments(comment, i))}
        <form className="comment-form" onSubmit={this.handlesubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
        {console.log("gg=", this.refs.author)}
      </div>
    );
  }
}

export default Comment;
