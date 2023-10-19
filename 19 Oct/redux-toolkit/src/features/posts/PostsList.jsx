import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor';
import { selectAllPosts } from './postsSlice'
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

function PostsList() {

    const posts = useSelector(selectAllPosts);



    const orderedPosts = posts.slice().sort(function (a, b) {

        return b.date.localeCompare(a.date);
    });


    // console.log(orderedPosts)

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))

    return (
        <section>
            <h2>PostsList</h2>
            {renderedPosts}
        </section>
    )
}

export default PostsList