import React from 'react'
import Subtitle from './Subtitle';

const MobileMenuItem = (props) => {
  return ( <div>
    <Subtitle>{props.children}</Subtitle>
  </div> );
}
 
export default MobileMenuItem;