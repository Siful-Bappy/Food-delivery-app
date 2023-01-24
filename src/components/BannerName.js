import React from 'react';

const BannerName = ({name, discount, link}) => {
    return (
        <div className='bannerContent'>
            <h3>Hello {name}</h3>
            <p>Get Free discount for every <span>${discount}</span> purchase</p>
            <a></a>
        </div>
    );
};

export default BannerName;