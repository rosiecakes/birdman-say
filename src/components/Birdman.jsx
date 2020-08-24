import React from "react"

class Birdman extends React.Component {

  render() {
    let pic = require('../Harvey280.jpg');
    return (
      <div className="bottom-wrapper">
        <img src={pic} alt=""/>
      </div>
    )
  }
}

export default Birdman