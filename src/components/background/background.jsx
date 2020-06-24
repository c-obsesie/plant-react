import React from 'react'
// import style from './style.css'
import img from "../../assets/img/img.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Container} from 'react-bootstrap'

function Background(){
    return (
        <div className="logo" style={{ backgroundImage: `url(${img}`,
    height:'90vh', }}>
<Container style={{display:'flex',
flexDirection:'column',
alignItems:'center',maxWidth: "1003px",
position: "relative",
top: "30%",}}>
        
         
        <div className="align-self-center align-text-center " style={{color:'white',fontSize:"10vh"}} >The finest plants produce the most impressive displays.</div>
        <button> Discover Here</button>
     
        </Container>
    </div>

    )
}

export default Background;