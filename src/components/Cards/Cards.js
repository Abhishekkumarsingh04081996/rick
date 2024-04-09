import React from 'react';

const Cards = ({ results }) => {

    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image } = x;
            return (
                <div key={id} className='col-4'>
                    <div className=''>
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
            );
        });
    } else {
        display = "No Character Found!";
    }
    return (
        <>
            {display}
        </>
    );
};

export default Cards;
