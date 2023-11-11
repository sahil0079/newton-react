import React from 'react';
import { useMusic } from '../../Provider/MusicProvider';
import style from './MusicCard.module.css'

function MusicCard(props) {
    const { setSelectedMusic } = useMusic();
    const { thumbnail, title, artist } = props;


    const artistList = artist.map((item) => item.name).join(" & ");
    return (
        <section className={style.musicCard} onClick={() => setSelectedMusic(props)} >

            <img
                src={thumbnail}
                alt={title}
                height='150'
                width='150'
                className={style.bannerImg}
            />
            <div>{title}</div>
            <div className={style.artist} title={artistList}>
                {artistList}
            </div>

        </section>
    )
}

export default MusicCard


