import * as React from "react"
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <Logo /> */}
      <div className="link">
        <a href="/" className="link">Home</a>
        <a href="/" className="link"></a>
        <a href="/About" className="link">About</a>
        <a href="/" className="link">Buy Now</a>
      </div>
    </nav>
  )
}
