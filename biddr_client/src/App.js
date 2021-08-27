import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
                <BrowserRouter>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route exact path="/auctions">
                            <AuctionIndexPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
