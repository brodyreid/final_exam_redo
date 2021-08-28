import React from 'react';

const NewAuctionForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const params = {
            title: formData.get('title'),
            description: formData.get('description'),
            end_date: formData.get('end_date'),
            reserve_price: formData.get('reserve_price'),
        }
        props.createAuction(params)
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <br/>
                <input name='title' id='title' ></input>
                <br/>
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <br/>
                <textarea name='description' id='description' ></textarea>
                <br/>
            </div>
            <div>
                <label htmlFor='end_date'>End Date</label>
                <br/>
                <input type="date" name='end_date' id='end_date' />
                <br/>
            </div>
            <div>
                <label htmlFor='reserve_price'>Reserve Price</label>
                <br/>
                <input type="number" name='reserve_price' id='reserve_price'/>
                <br/>
            </div>
            <div>
                <input type='submit' value='Submit' />
            </div>
        </form>    
    )
}

export default NewAuctionForm;