import { useState } from 'react';
import { VideoProps } from '../../interfaces/VideoProps';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

import './styles.css'

function Sidebar({ likes, messages, shares }: VideoProps) {
    const [liked, setLiked] = useState(false)

    function handleLike() {
        setLiked(!liked);
    }

    return (
        <div className='sidebar'>
            <div className='options' onClick={handleLike}>
                {liked ? <FavoriteIcon fontSize='large' /> : <FavoriteBorderIcon fontSize='large' />}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className='options'>
                <ChatIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='options'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default Sidebar;