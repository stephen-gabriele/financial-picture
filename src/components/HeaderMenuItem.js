import React from "react";

const HeaderMenuItem = (props) => {
  return ( 
    <div className="mr-4">
      {props.children}
    </div>
   );
}
 
export default HeaderMenuItem