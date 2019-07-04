import React from 'react';

const CommentDetail = props => {

    let name = props.author
    return (
        <div className="comment">
            <a href="/" className="avatar" >
                <img alt="avatar" src={ props.avatar }></img>
            </a>
            <div className="content">
                <a href="/" className="author">{ name }</a>
                <div className="metadata">
                    <span className="date">{ props.timeAgo }</span>
                </div>
                <div className="text">{ props.content }</div>
            </div>
        </div>
    );
}

export default CommentDetail;