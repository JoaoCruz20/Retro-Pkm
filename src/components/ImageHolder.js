import React from "react";

const ImageHolder = (props) => {
  
    return (     
           <img src={props.src} alt={props?.label} width={props?.width} height={props?.height}></img>
    );
  }
  
  export default ImageHolder;