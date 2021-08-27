import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import { Session } from './requests';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
  
    componentDidMount() {
        Session.create({
            email: 'js@winterfell.gov',
            password: 'supersecret'
        })
        .then(current_user => {
            this.setState((state) => {
                return{
                    user: current_user
                }
            })
        })
    }
  
    render() {
        return (
            <div className="container">
              <WelcomePage/>
            </div>
        )
    }
}

export default App;
