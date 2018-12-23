
import React, { Component } from 'react';




class Home extends React.Component {

  render() {
    return (

     <div>
       <div className="headBar">
            <div className="logo">
                <img src="./img/vidroll.png" alt="Vidroll" />

            </div>
            <div className="controls">
               <ul> 
                   <li> <img src="./img/minimize.png" alt=""/></li>
                   <li> <img src="./img/maximize.png" alt=""/></li>
                   <li> <img src="./img/close.png" alt=""/></li>
               </ul>
            </div>
        </div>
     </div>

    );
  }
}

export default Home;