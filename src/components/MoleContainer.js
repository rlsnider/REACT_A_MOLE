import {useState } from 'react'
import Mole from './Mole'
import OpenSpace from './OpenSpace'

const MoleContainer = (props) => {
    let [aMole, setAMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +1)
        setAMole(false)
    }

    let displayMole = aMole 
    ? <Mole setScore={props.setScore} toggle={setAMole} handleClick={handleClick} /> 
    : <OpenSpace toggle={setAMole} />
    
    return ( 
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {displayMole}
        </div>
    )
}
export default MoleContainer