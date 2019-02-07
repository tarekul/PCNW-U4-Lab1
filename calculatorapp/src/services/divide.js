const divide = (val1, val2) => (parseFloat(val1) / parseFloat(val2)).toString()

const stateChngDiv = (displayValue,previousValue) =>{
    const divVal = divide(previousValue,displayValue)
    if(previousValue !== null){
        return {displayValue:divVal,previousValue:divVal}
    }
    else return {previousValue:displayValue}
}

module.exports = {
    stateChngDiv
}