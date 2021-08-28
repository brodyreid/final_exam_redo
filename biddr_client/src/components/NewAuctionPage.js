import React, {Component} from 'react';
import NewAuctionForm from './NewAuctionForm';
import { Auction } from '../requests';

class NewAuctionPage extends Component {
    constructor(props){
        super(props)
        this.state = {errors: []}
        this.createAuction = this.createAuction.bind(this)
    }

    createAuction(params){
        console.log(`Params: ${params.title} ${params.description}`)
        Auction.create(params)
        .then((auction) => {
            console.log(`Auction: ${auction.errors}`)
            if (auction.errors){
                console.log(`AuctionErrors: ${auction.errors}`)
                this.setState({errors: auction.errors})
            } else {
                const id = auction.id;
                this.props.history.push(`/auctions/${id}`);
            }
        })
    }
    render(){
        return(
            <div>
                <NewAuctionForm createAuction={this.createAuction} errors={this.state.errors} />
            </div>
        )
    }
}

export default NewAuctionPage;