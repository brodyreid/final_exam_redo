import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import AuctionShowPage from './components/AuctionShowPage';
import NewAuctionPage from './components/NewAuctionPage';
import SignInPage from './components/SignInPage';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { User } from './requests';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }
  
    componentDidMount() {
        // Session.create({
        //     email: 'js@winterfell.gov',
        //     password: 'supersecret'
        // })
        // .then(current_user => {
        //     this.setState((state) => {
        //         return{
        //             user: current_user
        //         }
        //     })
        // })
        this.getCurrentUser()

    }

    getCurrentUser = () => {
        return User.current().then(user => {
            if (user?.id) {
                this.setState(state => {
                    return {user}
                })
            }
        })
    }

    onSignOut = () => {
        this.setState({
            user: null
        })
    }
  
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <NavBar currentUser={this.state.user} onSignOut={this.onSignOut} />
                    <Switch>
                        <Route exact path="/" component={WelcomePage}/>
                        <Route exact
                        path="/sign_in"
                        render={(routeProps) => <SignInPage {...routeProps} onSignIn={this.getCurrentUser}/> }/>
                        <Route exact path="/auctions">
                            <AuctionIndexPage />
                        </Route>
                        <Route exact path="auctions/new" component={NewAuctionPage} />
                        <Route path='/auctions/:id' component={AuctionShowPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
