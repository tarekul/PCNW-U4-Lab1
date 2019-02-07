import React from 'react'
import Button from './Buttons'
import Display from './Display';

const Calculator = (props) => {
    return <>
        <div className="container">
            <Display display={props.display} />
            <Button changeState={props.changeState} display={props.display} clearButton={props.clearButton}/>

        </div>
    </>
}

export default Calculator