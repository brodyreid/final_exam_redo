import React, {Component} from 'react';

class WelcomePage extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h1>
                    Welcome to Biddr
                </h1>
                <div>
                    sold to the highest biddr
                </div>
            </div>
        )
    }
}

export default WelcomePage;