import React from 'react';
import SearchRounded from '@mui/icons-material/SearchRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { BarChart } from '@mui/icons-material';

const Header = () => {
    return (
        <header>
            <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc" alt="" />
            <div className="inputBox">
                <SearchRounded></SearchRounded>
                <input type="text" name="" id="" placeholder='Search'/>
            </div>
            <div className="shoppingCart">
                <ShoppingCartRounded className='cart'></ShoppingCartRounded>
                <div className="cart_content">
                    <p>2</p>
                </div>
            </div>
            <div className="profileContainer">
                <div className="imgBox">
                    <img className='profilePic' src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937" alt="" />
                </div>
                <h2 className='userName'>Bappy</h2>
            </div>
            <div className="toggleMenu">
                <BarChart className='toggleIcon'></BarChart>
            </div>
        </header>
    );
};

export default Header;