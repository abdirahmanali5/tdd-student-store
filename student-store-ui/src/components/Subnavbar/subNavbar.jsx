import * as React from "react"
// import "./Navbar.css"
export default function subNavbar({}) {
  return (
    <nav className="subnavbar">
      {/* <Logo /> */}
      <div className="link">
        <a href="/" className="link">Food</a>
        
        <a href="/" className="link"></a>
        <a href="/About" className="link">Clothing</a>
        <a href="/" className="link">Accecossries</a>
      </div>
    </nav>
  )
}