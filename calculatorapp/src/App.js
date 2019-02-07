import React, { Component } from 'react';
import Calculator from './components/Calculator'
import './App.css';

import {stateChngAdd} from './services/add'
import {stateChngSub} from './services/subtract'
import {stateChngMult} from './services/multiply'
import {stateChngDiv} from './services/divide'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      displayValue: '0',       
      previousValue: null,     
      operation: null,         
      waitingForNewValue: false    
    }
  }



  handleNumber = (buttonValue) =>{
    if(this.state.waitingForNewValue === false){
      if(this.state.displayValue !== '0') this.setState({displayValue:this.state.displayValue+buttonValue}, () => {
        console.log('1',this.state)
      })
      else if(this.state.displayValue === '0') this.setState({displayValue:buttonValue}, () => {
        console.log('2',this.state)
      })
    }
    else if(this.state.waitingForNewValue === true) this.setState({displayValue:buttonValue,waitingForNewValue:false}, () => {
      console.log('3',this.state)
    })
    
  }

  arithmetics = {
    '+':stateChngAdd,
    '-':stateChngSub,
    'x':stateChngMult,
    '÷':stateChngDiv
  }

  handleOperation = (buttonValue) =>{
    if((buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '÷') && this.state.waitingForNewValue === false){
      if((this.state.operation !== null) && this.state.operation !== "=" ) this.setState(this.arithmetics[this.state.operation](this.state.displayValue,this.state.previousValue), () => {
        this.setState({operation:buttonValue,waitingForNewValue:true},()=>{
          console.log('4',this.state)
        })
        
      })
      else if((this.state.operation === null) || this.state.operation === "=" ) this.setState({previousValue:this.state.displayValue},()=>{
        this.setState({operation:buttonValue,waitingForNewValue:true},()=>{
          console.log('5',this.state)
        })
      })
    }

    else if(buttonValue === 'AC' || buttonValue === 'C'){
      this.setState({
            displayValue: '0',       
            previousValue: null,     
            operation: null,         
            waitingForNewValue: false },()=>console.log('6',this.state))
    }

    else if((buttonValue === '%') && this.state.waitingForNewValue === false){
      this.setState({displayValue:(parseFloat(this.state.displayValue) / 100).toString()},()=>{
        console.log('7',this.state)
      })
    }

    else if(buttonValue === '±'){
      this.setState({displayValue:(parseFloat(this.state.displayValue) * -1).toString()},
      ()=>console.log('8',this.state))
    }

    else if((buttonValue === '=') && this.state.waitingForNewValue === false){
      if((this.state.operation !== null) && this.state.operation !== "=") this.setState(this.arithmetics[this.state.operation](this.state.displayValue,this.state.previousValue), 
      () => {
        this.setState({operation:'='},()=>console.log('9',this.state))}) 
    }

    else if((buttonValue === ".") && this.state.waitingForNewValue === false ){
      if (this.state.displayValue.toString().includes('.')) return;
      else this.setState({displayValue:this.state.displayValue.concat('.')})
    }
  }

  changeState = (buttonValue) =>{
    if(parseInt(buttonValue) || buttonValue === '0') this.handleNumber(buttonValue)
    else this.handleOperation(buttonValue)
  }
  render(){
    if(this.state.operation) return <Calculator changeState={this.changeState} display={this.state.displayValue} clearButton='C'/>
    else return <Calculator changeState={this.changeState} display={this.state.displayValue} clearButton='AC'/>
  } 
  
}

export default App;
