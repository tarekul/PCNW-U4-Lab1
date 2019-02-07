import React from 'react'

import Numbers from './Numbers'
import Operator from './Operator'
//import Operators from './Operator';

const Button = props =>{
    return <>
    <div className="row">
        <Operator changeState={props.changeState} operation={props.clearButton} />
        <Operator changeState={props.changeState} operation='%' />
        <Operator changeState={props.changeState} operation='±' />
        <Operator changeState={props.changeState} operation='÷' />
   
        <Numbers changeState={props.changeState} a='7' b='8' c='9' />
        <Operator changeState={props.changeState} operation='x' />
            
        <Numbers changeState={props.changeState} a='4' b='5' c='6' />
        <Operator changeState={props.changeState} operation='-' />
            
        <Numbers changeState={props.changeState} a='1' b='2' c='3' />
        <Operator changeState={props.changeState} operation='+' />    
            
        <Numbers changeState={props.changeState} a='0'/>
        <Operator changeState={props.changeState} operation='.' />
        <Operator changeState={props.changeState} operation='=' />
    </div>
    </>
}

export default Button
