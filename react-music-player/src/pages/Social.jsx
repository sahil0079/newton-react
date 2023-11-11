import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Article from '../components/social/Article';
import { getHeaderWithProjectId } from '../utils/configs';

function Social() {
    const [podcasts, setPodcasts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchPosts() {
        setIsLoading(true);
        const config = getHeaderWithProjectId();
        const res = await axios.get(
            'https://academics.newtonschool.co/api/v1/quora/post?limit=100', config
        );
        // console.log('res', res.data.data);
        setPodcasts(res.data.data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div>Data</div>
            {podcasts.map((post) => (
                <Article key={post._id} article={post} />
            ))}
        </>
    )
}

export default Social