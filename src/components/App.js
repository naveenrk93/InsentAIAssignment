import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Homepage.js'
import crypto from 'crypto'



class App extends React.Component{

    render(){
        return (
            <div className="ui container">
                <BrowserRouter >
                    <div className="ui body">
                        <Route path="/" exact component={Homepage}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }

    componentDidMount() {

    }
}

export default App