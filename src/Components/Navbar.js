import React from 'react';
import cart from  '../Assests/cart.svg'
const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid d-flex flex-row justify-arround ">
    <a className="navbar-brand " href="/home">
       <h3 className='logo'>Pompeo</h3>
    </a>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" id='navlst' href="fs">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="/fs" id="aa">ABOUT</a>
        </li>
      <li className="nav-item">
          <a className="nav-link " href="/fs" id="aa">SHOP</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"   href="/fs"  id="aa">CONTAT</a>
        </li>
          
      </ul>
    <li className="nav-item" id='cr'>
          <a className="nav-link  d-flex flex-row gap-1 "   href="/fs"  id="cc"> <img src={cart} alt='svg' id='svge'/>  <span id="cart">CART</span> </a>
        </li>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
