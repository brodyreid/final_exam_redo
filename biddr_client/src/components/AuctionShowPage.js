import React, { Component } from 'react';
import { AuctionDetails } from './AuctionDetails';
import BidList from './BidList';
import { Auction } from '../requests';

class AuctionShowPage extends Component {
    constructor(props){
        super(props)
        this.state = { auction: {} }
        this.deleteAuction = this.deleteAuction.bind(this)
    }
  
    componentDidMount(){
        Auction.show(this.props.match.params.id)
        .then((auction) => {
        this.setState((state) => {
            return {
                auction: auction
            }
        })
        })
    }
  
    deleteAuction(id) {
      this.setState((state) => {
        return {
          bids: this.state.bids.filter(b => b.id !== id)
        }
      })
    }
  
    render() {
        console.log('auction show page rendered');
        const {title, description, end_date, reserve_price, created_at} = this.state.auction
        return(
            <main>
                <AuctionDetails 
                    title={title}
                    description={description}
                    end_date={end_date}
                    reserve_price={reserve_price}
                    created_at={new Date(created_at)}
                />
                <h2>Bids: </h2>
                <BidList
                    bids={this.state.auction.bids}
                    deleteBid={this.deleteBid}
                />
            </main>
        )
    }
  }

export default AuctionShowPage;