import React from 'react'
import { useMusic } from '../../Provider/MusicProvider'
import { useUser } from '../../Provider/UserProvider';

function MusicPlayer() {
    const { selectedMusic } = useMusic();
    const { isUserLoggedIn } = useUser();


    const { thumbnail, title, artist, audio_url, _id } = selectedMusic;

    const artistList = artist?.map((item) => item.name).join(" & ");

    console.log('selectedMusic', selectedMusic)
    return (
        <section className='music-player'>
            <img src={thumbnail} alt={title} height="50" width='50' />

            {isUserLoggedIn ? (
                <>
                    <div className='song-info'>
                        <div>{title}</div>
                        <div className='artist-list'>
                            {artistList}
                        </div>
                    </div>
                </>
            ) : (
                <>
                </>
            )}
        </section>
    )
}

export default MusicPlayer