import React from "react";
import styles from './Games.module.css'
import {NavLink} from 'react-router-dom'
import imgCheckCorrect from './../../assets/img/check-the-correct-one.svg'
import imgSelectTranslation from './../../assets/img/select-translation.svg'
import imgSprintGuess  from './../../assets/img/sprint-guess.svg'
import imgPutTranslation  from './../../assets/img/put-translation.svg'
import imgSpeakAndCheck  from './../../assets/img/speak-and-check.svg'
import imgSprintListen  from './../../assets/img/listen-sprint.svg'
import imgRememberTranslation  from './../../assets/img/remember-translation.svg'
import imgWriteTranslation  from './../../assets/img/write-translation.svg'
import imgListenAndGuess  from './../../assets/img/listen-and-guess.svg'

const Games = () =>{

    const GAMES = [
        {img:imgCheckCorrect, path:'check-it', name:'Check the correct one', description:'Check correct word'},
        {img:imgWriteTranslation, path:'write-it', name:'Write the translation', description:'Write correct word'},
        {img:imgSelectTranslation, path:'check-it', name:'Select the right translation ', description:'Check correct word'},
        {img:imgSprintGuess, path:'check-it', name:'Sprint by guessing', description:'Check correct word'},
        {img:imgPutTranslation, path:'check-it', name:'Put together a translation', description:'Check correct word'},
        {img:imgSpeakAndCheck, path:'check-it', name:'Speak and check ', description:'Check correct word'},
        {img:imgSprintListen, path:'check-it', name:'Sprint by listen', description:'Check correct word'},
        {img:imgRememberTranslation, path:'check-it', name:'Remember translation', description:'Check correct word'},
        {img:imgListenAndGuess, path:'check-it', name:'Guess and listen', description:'Check correct word'}
    ]
   
    return(
        <section className={styles.gameContainer}>
            {GAMES.map((game, index)=>(
                <NavLink key={index} to={'game/'+ game.path}>
                    <div className={styles.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>
                        <img src={game.img} alt=""/>
                    </div>
                </NavLink>
            ))}
        </section>
    )
}
export default Games