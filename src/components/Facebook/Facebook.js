import React, { useEffect } from "react";

import './Facebook.css'

const Facebook = (props) => {

    useEffect(() => {
        document.getElementById("phrase1").innerHTML = document.getElementById("phrase1").innerHTML.replace(/#([^ ]+)/g, "<span class='hashtag'>#$1</span>");
        document.getElementById("phrase1").innerHTML = document.getElementById("phrase1").innerHTML.replace(/@([^ ]+)/g, "<span class='hashtag'>@$1</span>");

    }, [props.content])

    return (
        <div id="facebook">
            <div className="header">
                <div className="left-info">
                    <div className="thumbnail">
                        <img alt="" src={props.url} />
                    </div>
                    <div className="name-info">
                        <div className="name">
                            <a>{props.username}</a>
                            <i className="blue-check"></i>
                        </div>
                        <div className="time">
                            {props.date} &middot;&nbsp;
                            <i className="global-icon"></i>
                        </div>
                    </div>
                </div>
                <div className="right-info"></div>
            </div>

            <div id="phrase1" className="content">{props.content}</div>

            <div className="feedback-info">
                <div className="feedback-emojis">
                    <i className="icons like-icon"></i>
                    <i className="icons laugh-icon"></i>
                    <i className="icons angry-icon"></i>
                    {props.reactions}
                </div>
                <div className="threads-and-share">
                    <div className="threads"> {props.comments} comments</div>
                </div>
            </div>

            <div className="feedback-action">
                <div className="fb-wrapper">
                    <i className="fb-icon thumb-up"></i>Like
                </div>
                <div className="fb-wrapper">
                    <i className="fb-icon response"></i>Comment
                </div>
                <div className="fb-wrapper">
                    <i className="fb-icon share"></i>Share
                </div>
            </div>

            <div className="comments">
                <div className="my-comment-wrapper">
                    <div className="my-avatar">
                        <img alt="" src={props.userUrl} />
                    </div>
                    <div className="my-comment col-10">
                        <div className="my-comment-placeholder">
                            <input type="text" placeholder="Write a comment..." />
                        </div>
                    </div>
                </div>
                {props.comment ?
                    <div className="wrapper">
                        <div className="people-comment-wrapper">
                            <div className="people-avatar">
                                <img alt="" src={props.commentUrl} />
                            </div>
                            <div className="people-comment">
                                <div className="people-comment-container">
                                    <div className="people-name">
                                        <a>{props.commentUsername}</a>
                                        <i className="blue-check"></i>
                                    </div>
                                    <div className="people-saying">{props.commentContent} </div>
                                </div>
                            </div>
                        </div>
                        <div className="like-and-response-wrapper">
                            <div className="like-comment">
                                <a>Like</a>
                                <span className="tiny-dot"> &middot;</span>
                                <a>Reply</a>
                                <span className="tiny-dot"> &middot;</span>
                            </div>
                            <div className="day-comment">{props.commentDate}</div>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default Facebook