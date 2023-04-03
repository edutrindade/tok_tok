import MusicNoteIcon from '@mui/icons-material/MusicNote';
import './styles.css'

function Footer() {

    return (
        <div className='footer'>
            <div className='video_info'>
                <h3>@eduardoactrindade</h3>
                <p>Descrição do Vídeo</p>
                <div className='row'>
                    <MusicNoteIcon className="icon" />
                    <div className="info">
                        <p>Título da música</p>
                    </div>
                </div>
            </div>

            <img className="record" alt="Vinil girando" src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da" />
        </div>
    )
}

export default Footer;