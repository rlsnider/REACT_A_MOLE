import React, { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout (() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img style={{'width': '30vw'}} 
            src={moleImg} alt=''
            onClick={props.handleClick} />
        </div>
    )
}
export default Mole