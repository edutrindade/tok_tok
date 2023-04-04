import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { VideoProps } from '../../interfaces/VideoProps';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

import './styles.css'

function Video(props: VideoProps) {
    const { url, likes, messages, shares, name, description, music } = props;

    const videoRef = useRef<HTMLVideoElement>(null);

    const [play, setPlay] = useState(false);
    const [inViewRef, inView] = useInView({ threshold: 0.5 });

    function handleStart() {
        if (play) {
            videoRef.current?.pause();
            setPlay(false);
        } else {
            videoRef.current?.play();
            setPlay(true);
        }
    }

    useEffect(() => {
        if (!inView && play) {
            videoRef.current?.pause();
            setPlay(false);
        }
    }, [inView, play]);

    return (
        <div className="video" ref={inViewRef}>
            <video
                className="video_player"
                src={url}
                ref={videoRef}
                loop
                autoPlay
                onClick={handleStart}
            />
            <Sidebar likes={likes} messages={messages} shares={shares} />
            <Footer name={name} description={description} music={music} />
        </div>
    )
}

export default Video;