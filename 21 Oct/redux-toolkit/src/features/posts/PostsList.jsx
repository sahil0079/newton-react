import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor';
import { fetchPosts, getPostsError, getPostsStatus, selectAllPosts } from './postsSlice'
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

function PostsList() {
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    console.log('posts', { posts, postStatus, error })
    let content;

    if (postStatus === 'loading') {
        content = <h1>Loading...</h1>
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort(function (a, b) {

            return b.date.localeCompare(a.date);
        });

        content = orderedPosts.map(post => (
            <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}</p>
                <p className='postCredit'>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post} />
            </article>
        ))

    } else if (postStatus === 'failed') {
        content = <h1>{error}</h1>
    }

    // useEffect(() => {
    //     dispatch(fetchPosts())
    // }, [])
    // console.log(orderedPosts)


    return (
        <section>
            <h2>PostsList</h2>
            {content}
        </section>
    )
}

export default PostsList