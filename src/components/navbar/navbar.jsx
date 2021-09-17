import React from "react"
import "./style.scss"

function Navbar() {
    return (
        <div className="navbar" id="navbar">
            <div className="wrapper">
                <div className="left">
                     <a href="#intro">Hello!</a>
                   <h1>Middle</h1>
                </div>
                   

                <div className="right">
                    This is right
                </div>
            </div>
        </div>        
        )
}

export default Navbar;