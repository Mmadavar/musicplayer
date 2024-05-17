import React from 'react';
import sheet from './sheet.css'
import {Link} from 'react-router-dom'

const library = () => {
    return (



            <div>
                <Link to="/player">
                    <img className="meteora" alt="meteora picture" src="https://img.discogs.com/Jmd5BXMKIrH0VLOsDQcWMSG4jmI=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-9335672-1478802927-5367.jpeg.jpg"></img>
                </Link>
            </div>



    )
}

export default library;