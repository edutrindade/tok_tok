import { useState, useRef } from 'react';
import { VideoProps } from '../../interfaces/VideoProps';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import './styles.css'


function Video(props: VideoProps) {
    const { url, likes, messages, shares, name, description, music } = props;

    const videoRef = useRef<HTMLVideoElement>(null);
    const [play, setPlay] = useState(false);

    function handleStart() {
        if (play) {
            videoRef.current?.pause();
            setPlay(false);
        } else {
            videoRef.current?.play();
            setPlay(true);
        }
    }

    return (
        <div className="video">
            <video
                className="video_player"
                src={url}
                ref={videoRef}
                loop
                onClick={handleStart}
            />
            <Sidebar likes={likes} messages={messages} shares={shares} />
            <Footer name={name} description={description} music={music} />
        </div>
    )
}

export default Video;