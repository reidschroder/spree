import React, { useState } from 'react'


//Created inital Nav bar. Needs ternary in nav bar to return profile and logout if user is logged in or not

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/home">Spoint</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/home">Home</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Profile
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/profile">View Profile</a>
          <a className="dropdown-item" href="/cart">Cart</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/checkout">Checkout</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/login">login</a>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Nav