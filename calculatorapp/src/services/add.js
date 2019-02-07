const Add = (val1, val2) => (parseFloat(val1) + parseFloat(val2)).toString()

const stateChngAdd = (displayValue,previousValue) =>{
    const AddVal = Add(displayValue,previousValue)
    if(previousValue !== null){
        return {displayValue:AddVal,previousValue:AddVal}
    }
    else return {previousValue:displayValue}
}

module.exports = {
    stateChngAdd
}