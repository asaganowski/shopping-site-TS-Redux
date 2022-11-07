import React from 'react'
import "./Popup.scss"

type Props = {
    trigger: boolean;
    children?: JSX.Element | JSX.Element[];
  };
  
  const Popup: React.FC<Props> = ({trigger, children}) => {

    console.log(trigger)
  return (
      <>
      {trigger ? 
    <div className='popup-wrapper'>
        {children}
    </div>: ""
    }
      </>
  )
}

export default Popup