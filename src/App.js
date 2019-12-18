import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBody from './Components/MainBody'

class App extends React.Component {
    constructor(props){
        super (props);
        this.state= {
            stateValue: 0,
            error: false,
        }
    }

    handleInputChange(event) {
        const target = event.target;;
        const value =target.value;
        const stateValue=this.state.stateValue;
        const error=value[0]=="-";
        this.setState({...this.state, stateValue:value, error});
    }
    decrement(){
        const stateValue=this.state.stateValue;
        const value=stateValue-1;
        this.setState({...this.state, stateValue:value});
    }
    increment(){
        const stateValue=this.state.stateValue;
        const value=stateValue+1;
        this.setState({...this.state, stateValue:value});
    }
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <MainBody {...this.state} handleInputChange={(event)=>{this.handleInputChange(event)}} decrement={()=>{this.decrement()}}  increment={()=>{this.increment()}} />
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
            </div>
        );
    }
}


export default App;
