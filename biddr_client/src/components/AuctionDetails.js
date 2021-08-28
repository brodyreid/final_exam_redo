import React from 'react';

export const AuctionDetails = ({title, description, end_date, reserve_price, created_at}) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Auction Ends on: {end_date} | {reserve_price}</p>
            <p>
                <small>Created at {created_at.toLocaleString()}</small>
            </p>
        </div>
    )
}