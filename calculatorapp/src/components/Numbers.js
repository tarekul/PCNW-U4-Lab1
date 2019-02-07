import React from 'react'

const Numbers = props =>{
    if(props.a === '0'){
        return <>
            <button 
            onClick={e=>props.changeState(e.target.value)} 
            className="col col-6 button" value={props.a}>{props.a}</button>
            </>
    }
    return <React.Fragment>
        <button 
            onClick={e=>props.changeState(e.target.value)} 
            className="col col-3 button" value={props.a}>{props.a}</button>
        <button 
            onClick={e=>props.changeState(e.target.value)}
            className="col col-3 button" value={props.b}>{props.b}</button>
        <button 
            onClick={e=>props.changeState(e.target.value)}
            className="col col-3 button " value={props.c}>{props.c}</button>
    </React.Fragment>
}

export default Numbers