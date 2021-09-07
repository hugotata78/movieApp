import React from "react";
import NavBar from "../components/NavBar";

const NotFound = () => {
    return (
        <div>
            <NavBar />
            <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'150px'}}>
                <h1 className='title'>404!</h1>
                <h2 className='subtitle'>Page not found</h2>
                <button className='button is-danger'>Home</button>
            </div>
        </div>
    )
}

export default NotFound