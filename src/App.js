import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainBody from './Components/MainBody'

class App extends React.Component {
    constructor(props){
        super (props);
        this.state= {
            stateValue: "0",
        }
    }

    handleInputChange(event) {
        const target = event.target;;
        const value =target.value;
        const stateValue=this.state.stateValue;
        this.setState({...this.state, stateValue:value});
    }
    decrement(){
       const stateValue=this.state.stateValue;
       const value=stateValue-1;
        this.setState({...this.state, stateValue:value});
    }
    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <MainBody {...this.state} handleInputChange={(event)=>{this.handleInputChange(event)}} decrement={()=>{this.decrement()}} />
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}


export default App;
