import React from "react"

const Navbar = () => {
  return ( 
    <nav className="bg-blue-400 py-4 border-b h-16">
      <ul className="flex h-full max-w-full justify-end">
        <li>About</li>
        <li>Start Here</li>
        <li>Content</li>
        <li>Order</li>
        <li>More</li>
      </ul>
    </nav>
   );
}
 
export default Navbar;