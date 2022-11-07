import React, {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {getTotals} from "../features/cart/cartSlice"

type Props = {
  quantityVisibility: boolean;
  viewBox:string
};

export const CartIcon: React.FC<Props> = ({quantityVisibility, viewBox}) => {


    const cart = useAppSelector((state) => state.cart);

    const dispatch = useAppDispatch();

    useEffect(()=>{
      dispatch(getTotals())
      
    },[cart])

  

  return (
    <svg className="svg-icon" viewBox={viewBox} >
		    <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z"></path>

        {quantityVisibility && 
        <>
          <circle cx="17" cy="14" r="5"
            stroke="none"
            strokeWidth="3"
            fill="rgb(146, 55, 78)"
            //fill="white"
          />
          <text x="17" y="14.5" fontSize="7"
            textAnchor="middle"
            //stroke="rgb(146, 55, 78)"
            stroke='white'
            strokeWidth="0.5px"
            alignmentBaseline="middle"
            >{cart.totalQuantity}
          </text>
        </>
        }

  
                            
	</svg>
  );
};