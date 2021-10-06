import React from "react";
import { useHistory } from "react-router";
import NavBar from "./NavBar";

const NotFound = () => {
    const history = useHistory()

    const handleOnClick = (e)=>{
        e.preventDefault()
        history.push('/')
    }
    return (
        <div>
            <NavBar />
            <div className='container' style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'150px'}}>
                <h1 className='title'>404!</h1>
                <h2 className='subtitle'>Movie not found</h2>
                <button className='button is-danger' onClick={e=>handleOnClick(e)}>Home</button>
            </div>
        </div>
    )
}

export default NotFound