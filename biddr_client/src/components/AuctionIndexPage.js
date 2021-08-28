import React, { Component } from 'react';
import { Auction } from '../requests';
import { Link } from 'react-router-dom';

class AuctionIndexPage extends Component {

    constructor(props)  {
        super(props)
        this.state = {
            auctions: []
        }
    }

    componentDidMount() {
        Auction.index()
        .then((auctions) => {
            this.setState((state) => {
                return {
                    auctions: auctions
                }
            })
        })
    }

    deleteAuction(id) {
        this.setState((state) => {
            return  {
                auctions: state.auctions.filter(a => a.id !== id)
            }
        })
    }

    render() {
        return(
            <main>
                {
                    this.state.auctions.map(a => {
                        return(
                            <div key={a.id}>
                                <Link to={`/auctions/${a.id}`}><h1>{a.id} - {a.title}</h1></Link>
                                <button onClick={() => this.deleteAuction(a.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </main>
        )}
}

export default AuctionIndexPage;