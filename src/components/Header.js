import React from 'react';
import SearchRounded from '@mui/icons-material/SearchRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import { BarChart } from '@mui/icons-material';

const Header = () => {
    return (
        <header>
            <img src="" alt="" />
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
                    <img src="" alt="" />
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