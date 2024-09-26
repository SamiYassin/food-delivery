import React, { useContext } from 'react';
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContexet';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItem, addToCart, removeFromCart } = useContext(StoreContext)
   
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-img' src={image} alt="" />
                {
                    !cartItem[id] ? (
                        <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add item" />
                    ) : (
                        <div className='food-itemCount-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove item" />
                            <p>{cartItem[id]}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add more of item" />
                        </div>
                        
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-descreption">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem
