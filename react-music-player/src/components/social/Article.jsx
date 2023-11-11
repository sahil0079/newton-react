import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Article({ article }) {
    const navigate = useNavigate();
    const token = sessionStorage.getItem('authToken');

    const [likeCount, setLikeCount] = useState(article.likeCount);

    const [showLoginModal, setShowLoginModal] = useState(false);

    const [showComments, setShowComments] = useState(false);
    const [comments, setComments] = useState([]);


    async function handleLike() {

        if (!token) {
            setShowLoginModal(true);
            return
        }

        try {
            const response = await fetch(
                `https://academics.newtonschool.co/api/v1/quora/like/${article._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                    projectID: '8nbih316dv01',

                }
            }
            );

            if (response.ok) {
                setLikeCount(likeCount + 1);
                console.log('likes the post');
            }
        } catch (error) {
            console.error('Failed to like the post', error)
        }

    }

    function toggleComments() {

        if (!token) {
            setShowLoginModal(true);
            return
        };

        if (showComments) {
            setShowComments(false);
        } else {
            axios
                .get(
                    `https://academics.newtonschool.co/api/v1/quora/post/${article._id}/comments`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            projectID: '8nbih316dv01',
                        }
                    }
                )
                .then((response) => {
                    if (response.status == 200) {
                        setComments(response.data.data);
                        setShowComments(true);
                    }
                }).catch((error) => {
                    console.error('Failed to fetch comments:', error)
                })
        }


    };

    function formatDate(timestamp) {

        const date = new Date(timestamp);
        return date.toLocaleDateString();
    };


    return (
        <>
            {showLoginModal ? (
                <div className='login-modal-overlay'>
                    <div className='login-modal'>
                        <h3>You need to log in to like this post</h3>
                        <p>
                            If you dont have an account, you can
                            <button onClick={() => navigate("/signin")} >sign up here</button>
                            <button onClick={() => setShowLoginModal(false)} >Close</button>
                        </p>
                    </div>

                </div>
            ) : (
                <div className='article-container'>
                    <div className='article-header'>
                        <img src={article.author.profileImage}
                            alt='Author'
                            className='author-image'
                        />
                        <div className='article-info'>
                            <h2>{article.title}</h2>
                            <p>By: {article.author.name}</p>
                        </div>
                    </div>
                    <p className='article-content'>{article.content}</p>
                    <div className='article-footer'>
                        <img
                            src={article.channel.image}
                            alt='Channel'
                            className='channel-image'
                        />
                        <p>Channel:{article.channel.name} </p>
                        <div className='article-stats'>
                            <p onClick={handleLike} style={{ cursor: 'pointer' }}>Likes:{likeCount} </p>
                            <p onClick={toggleComments} style={{ cursor: 'pointer' }}>Comments:{article.commentCount} </p>
                        </div>
                    </div>

                    {showComments && (
                        <div className='comments-section'>
                            <h4>Comments:</h4>

                            {comments.map((comment) => (

                                <div key={comment._id} className='comment'>
                                    <p className='comment-content'>{comment.content}</p>
                                    <p className='comment-time'>
                                        {formatDate(comment.createdAt)}
                                    </p>

                                    {/* {comment.children.length > 0 && (
                                        <div className='child-comments'>    {comment.children.map()}

                                        </div>
                                    )} */}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}

        </>
    )
}

export default Article