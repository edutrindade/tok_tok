import './App.css';

import Video from './pages/Video';

function App() {

  return (
    <div className="app">
      <div className="videos">
        <Video
          likes={300}
          messages={200}
          shares={100}
          name="@eduardoactrindade"
          description="Descrição do Vídeo"
          music="Título da Música"
          url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/ZqU6oFX6.mp4.mp4?alt=media&token=9839e872-2d5e-4da3-9299-17eb2949831d"
        />
        <Video
          likes={250}
          messages={122}
          shares={50}
          name="@eduardoactrindade"
          description="Descrição do Vídeo"
          music="Título da Música"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;