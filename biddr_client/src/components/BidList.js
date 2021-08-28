import React from 'react';
import BidDetails from './BidDetails';

const BidList = (props, deleteBid) => {
    console.log(`bidsss?${props.bids}`)
    const bids = props.bids

    return(
        <div>
            {
                bids ?
                bids.map((b, i) => {
                    return <BidDetails
                        key={i}
                        id={b.id}
                        amount={b.amount}
                        created_at={new Date(b.created_at.toLocaleString())}
                        deleteBid={deleteBid}
                        />
                })
                :
                <p>ass</p>
            }
        </div>
    )
}

export default BidList;