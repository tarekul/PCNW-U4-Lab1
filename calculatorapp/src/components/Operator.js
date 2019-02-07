import React from 'react'

const Operators = props =>{
    if(props.operation === '.' || props.operation === 'AC' || props.operation === 'C' 
    || props.operation === '%' || props.operation === '±'){
        return <React.Fragment>
        <button 
            onClick={e=>props.changeState(e.target.value)} 
            className="col col-3 button "value={props.operation}>{props.operation}</button>
    </React.Fragment>
    }
    return <React.Fragment>
        <button 
            onClick={e=>props.changeState(e.target.value)} 
            className="col col-3 button orange"value={props.operation}>{props.operation}</button>
    </React.Fragment>
}

export default Operators