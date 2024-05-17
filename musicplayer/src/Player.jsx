
import React from 'react'
import audioFile from './Galactic Rap.mp3';
import audioFile1  from './Sergio%27s Magic Dustbin.mp3'
import audioFile2  from './Equatorial Complex.mp3'
import audioFile3  from './Lord of the Rangs.mp3'
import audioFile4  from './Mesmerizing Galaxy Loop.mp3'

import sound1 from './Foreword.mp3'
import sound2 from "./Don't Stay.mp3"
import sound3 from './Somewhere I Belong.mp3'
import sound4 from './Lying From You.mp3'
import sound5 from './Hit The Floor.mp3'
import sound6 from './Easier To Run.mp3'
import sound7 from './Faint.mp3'
import sound8 from './Figure.09.mp3'
import sound9 from './Breaking The Habit.mp3'
import sound10 from './From The Inside.mp3'
import sound11 from "./Nobody's Listening.mp3"
import sound12 from './Session.mp3'
import sound13 from './Numb.mp3'



const Player = () => {
    return (
        <div className="Bar">
            <div>
                1. Foreword <audio src={sound1} controls></audio>
            </div>
            <div>
                2. Don't Stay<audio src={sound2} controls></audio>
            </div>
            <div>
                3. Somewhere I belong <audio src={sound3} controls></audio>
            </div>
            <div>
                4. Lying From You <audio src={sound4} controls></audio>
            </div>
            <div>
                5. Hit The Floor <audio src={sound5} controls></audio>
            </div>
            <div>
                6. Easier To Run <audio src={sound6} controls></audio>
            </div>
            <div>
                7. Faint <audio src={sound7} controls></audio>
            </div>
            <div>
                8. Figure.09 <audio src={sound8} controls></audio>
            </div>
            <div>
                9. Breaking The Habit <audio src={sound9} controls></audio>
            </div>
            <div>
                10. From The Inside <audio src={sound10} controls></audio>
            </div>
            <div>
                11. Nobody's Listening <audio src={sound11} controls></audio>
            </div>
            <div>
                12. Session <audio src={sound12} controls></audio>
            </div>
            <div>
                13. Numb <audio src={sound13} controls></audio>
            </div>

        </div>



    )
}

export default Player;