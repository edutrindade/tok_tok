import { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';

import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';
import { VideoProps } from './interfaces/VideoProps';

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videosCol = collection(db, 'videos');
    const videoSnapshot = await getDocs(videosCol);
    const videosList = videoSnapshot.docs.map(doc => doc.data());

    setVideos(videosList as any);
  }

  useEffect(() => {
    getVideos();
  }, [])

  return (
    <div className="app">
      <div className="videos">
        {videos.map((video: VideoProps, index) => {
          return (
            <Video
              key={String(index)}
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
              name={video.name}
              description={video.description}
              music={video.music}
              url={video.url}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;