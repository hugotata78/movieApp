import React from "react";
import { useHistory } from "react-router-dom";


const NavBar = () => {
    const history = useHistory()
    const handleOnClick = (e)=>{
        e.preventDefault()
        history.push('/')
    }
    return (
        <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <button className="button is-primary" onClick={e=>handleOnClick(e)} fontSize='30px'>Home</button>

                {/* <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a> */}
            </div>
        </nav>
    )
}

export default NavBar