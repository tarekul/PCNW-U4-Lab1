const multiply = (val1, val2) => (parseFloat(val1) * parseFloat(val2)).toString()

const stateChngMult = (displayValue,previousValue,buttonValue) =>{
    const multVal = multiply(previousValue,displayValue)
    if(previousValue !== null){
        return {displayValue:multVal,previousValue:multVal}
    }
    else return {previousValue:displayValue}
}

module.exports = {
    stateChngMult
}