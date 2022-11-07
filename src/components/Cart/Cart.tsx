import React from 'react'
import "./Cart.scss"
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Product } from '../../features/products/types';
import { BsPlusLg,BsDashLg,BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { addToCart, decrease, removeAll } from '../../features/cart/cartSlice';
import { CartIcon } from '../../icons/CartIcon';

function Cart() {

  const cart = useAppSelector((state) => state.cart);
  console.log(cart.cartItems)


  const dispatch = useAppDispatch()

  const handleDecrease = (product: Product) => {
    dispatch(decrease(product));
  };

  const handleIncrease = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveAllProducts = () => {
    dispatch(removeAll());
  };



  return (
    <div className='cart-content'>
      {cart.cartItems.length===0 ?
      
        <div className='empty-cart'> 
          <div className='empty'>
            <CartIcon quantityVisibility={false} viewBox="0 0 16 16"/>
            <h3>Your Bag is Empty</h3>
            <Link to="/">
              <button className='shop-now-btn'>Shop now</button>
            </Link>
          </div>
        </div>
        :
        <div className='cart-summary'>
          <div className='cart-products'>
            <div className='cart-products-summary'>
              <h3 className='summary'>Summary</h3>
              <button className='remove-all-btn' onClick={()=> handleRemoveAllProducts()}><BsTrash />&ensp;Remove all</button>
            </div>
            
            <div className="header">
              <div className='photo-header'>
                <h4>Product</h4>
              </div>
              <div className='restInfo-header'>  
                <h4>Price</h4>
                <h4>Q-ty</h4>
                <h4>Subtotal</h4>
              </div>
            </div>
            {cart?.cartItems?.map((item) => {
              return(
                <div className='content' key={item.id}>
                  <div className='photo'>
                    <img src={item.image} alt={item.title} className="image"/>
                  </div>
                  <div>
                    <h5 className='title'>{item.title}</h5>
                    <div className='restInfo'>
                      
                      <h6>$ {item.price.toFixed(2)}</h6>
                      <div className="quantity-info">
                        <button onClick={() => handleDecrease(item)}><BsDashLg /></button>
                        <h6 className='quantity'>{item.cartQuantity}</h6>
                        <button onClick={() => handleIncrease(item)}><BsPlusLg /></button>
                      </div>
                      <h6>$ {(item.price*item.cartQuantity).toFixed(2)}</h6>
                    </div>
                  </div>
                  
                </div>
              )
            })
            
            }
          </div>
        
          <div className='cart-checkout'>
            <h3 className='summary'>Order Summary</h3>
            <div className='total'>
              <h5>Total</h5>
              <h4>$ {cart.totalAmount.toFixed(2)}</h4>
            </div>
            <button className='checkout-btn'>Checkout Now</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Cart
