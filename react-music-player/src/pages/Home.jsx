import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MusicCard from '../components/music/MusicCard';
import MusicPlayer from '../components/music/MusicPlayer';
import MusicProvider from '../Provider/MusicProvider';
import { getHeaderWithProjectId } from '../utils/configs';

function Home() {

    const [isLoading, setIsLoading] = useState(false);
    const [musicList, setMusicList] = useState([]);

    async function fetchMusic() {
        const config = getHeaderWithProjectId();

        try {
            setIsLoading(true);
            const music = await axios.get(
                'https://academics.newtonschool.co/api/v1/music/song',
                config
            );
            console.log('music', music)
            const musicListData = music.data.data;
            setMusicList(musicListData);

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMusic();
    }, []);

    return (
        <MusicProvider>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <section className='musicList-container' >
                        {musicList.map((music, i) => <MusicCard key={i} {...music} />)}
                    </section>
                    <MusicPlayer />
                </>
            )}
        </MusicProvider>

    )
}

export default Home