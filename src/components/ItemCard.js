import { AddRounded, Favorite, StarRounded } from '@mui/icons-material';
import React, { useState } from 'react';

const ItemCard = ({imgSrc, name, ratings, price}) => {
    // console.log(name)
    const [isFavourite, setFavourite] = useState(false);
    const [currentValue, setCurrentValue] = useState(Math.floor(ratings))
    console.log(currentValue);
    const handleClick = (value) => {
        setCurrentValue(value);
      };
    return (
        <div className='itemCard'>
        <div className={`isFavourite ${isFavourite ? "active": ""}`} onClick={() => setFavourite(!isFavourite)}>
                <Favorite></Favorite>
            </div>
            <div className="imgBox">
                <img className='itemImg' src={imgSrc} alt="" />
            </div>
            <div className="itemContent">
                <h3 className='itemName'>{name}</h3>
                <div className="bottom">
                    <div className="ratings">
                        {Array.apply(null, {length: 5}).map((e, i) => (<i
                        className={`rating ${currentValue > i ? "orange" : "gray"}`}
                        onClick={() => handleClick(i + 1)}
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