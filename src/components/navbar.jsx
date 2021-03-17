import React, { Component } from 'react';

const Navbar = ({totalCounters}) => {
  return ( 
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">Market Stock <span class="badge badge-pill">{totalCounters} </span></a>
    
  </nav>
   );
}
 
export default Navbar;
