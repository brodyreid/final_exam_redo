import React from 'react';

const BidDetails = ({amount, created_at, id, deleteBid}) => {
    return(
      <div>
        <p>{amount}</p>
        <p>
          <strong>Created at: </strong> {created_at.toLocaleString()}
        </p>
        <button onClick={() => deleteBid(id)}>Delete</button>
      </div>
    )
}

export default BidDetails;