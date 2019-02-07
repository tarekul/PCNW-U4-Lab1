const subtract = (val1, val2) => (parseFloat(val1) - parseFloat(val2)).toString()

const stateChngSub = (displayValue,previousValue) =>{
    const subVal = subtract(previousValue,displayValue)
    if(previousValue !== null){
        return {displayValue:subVal,previousValue:subVal}
    }
    else return {previousValue:displayValue}
}

module.exports = {
    stateChngSub
}