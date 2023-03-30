import { useState, useRef } from 'react';

import './styles.css'

function Video() {
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
                src="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
                ref={videoRef}
                loop
                onClick={handleStart}
            />
        </div>
    )
}

export default Video;