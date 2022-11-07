import React, {useState} from "react"
import "./Home.scss"
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToCart } from '../../features/cart/cartSlice';
import { Product } from '../../features/products/types';
import { ThreeDots } from 'react-loader-spinner';
import Popup from "../Popup/Popup";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";


export default function Home() {

  const [popup,setPopup] = useState<boolean>(false)

  const dispatch = useAppDispatch()
  const { list: products, status } = useAppSelector((state:RootState) => state.products);

console.log(status)
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };


  const loaderStyle = {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh"
  }

  if(status==="loading") return <ThreeDots 
                                    height="80" 
                                    width="80" 
                                    radius="9"
                                    color="rgb(146, 55, 78)"
                                    ariaLabel="three-dots-loading"
                                    visible={true}
                                    wrapperStyle={loaderStyle}
                                  />

  return (
    <div className='home-wrapper'>
      <div className='products'>
      {
            products?.map((product) => {
              return(
                <div key={product.id} className="product">
                  <div className="product-content">
                    <img src={product.image} alt={product.title} className="image"/>

                    <h3 className='title'>{product.title.length<65 ? product.title : product.title.substring(0,65)+"..."}</h3>

                    <div className="price">$ {product.price.toFixed(2)}</div>

                    <div className="middle">
                      <button onClick={() => {setPopup(true); handleAddToCart(product)}} className="add-to-cart-btn">
                        Add To Bag
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
      }
      </div>

            <Popup trigger={popup} >
              
                <div className="popup-content">
                  
                  <h4>You have just added item to Bag</h4>
                  <div className="links">
                    <Link to="/shopping-cart" className="goto-bag-link">
                      <button className="popup-btn goto-bag-btn">Go to Bag</button>
                    </Link>
                    
                    <Link to="/" className="continue-link">
                      <button className="continue-btn popup-btn"
                      onClick={()=>setPopup(false)} >Continue shopping</button>
                    </Link>
                  </div>
                </div>
             </Popup>
            
            
  </div>
  )
}