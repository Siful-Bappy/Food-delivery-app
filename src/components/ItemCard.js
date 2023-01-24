import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React from 'react';

const ItemCard = ({imgSrc, name, ratings, price}) => {
    // console.log(name)
    return (
        <div className='itemCard'>
            <div className="isFavourite">
                <Favorite></Favorite>
            </div>
            <div className="imgBox">
                <img className='itemImg' src={imgSrc} alt="" />
            </div>
            <div className="itemContent">
                <h3 className='itemName'>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, {length: ratings}).map((e, i) => (<i
                        key={i}>
                        <StarRounded/>
                        </i>))}
                        <h3 className='price'><span>$</span> {price}</h3>
                    </div>
                    <i className="addToCart">
                        <AddRounded></AddRounded>
                    </i>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;