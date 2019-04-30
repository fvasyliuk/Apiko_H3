import React from "react";
import appendTo from '../utils/appendTo';


function Modal() {
  return(
    <div>MODAL</div>
  )
}

export default appendTo(document.getElementsByTagName("body")[0])(Modal);