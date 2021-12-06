import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Tick, MTLModel } from "react-3d-viewer";

import obj from "./../assets/gothic.windows.obj";
import mtl from "./../assets/gothic.windows.mtl";
// const obj = require("./model2/scene.gltf")

export default class Render3d extends Component {
  state = {
    rotation: { x: 2, y:0, z:0 }
  };
  componentWillUnmount() {
    this.tick.animate = false;
  }
  componentDidMount() {
    this.tick = Tick(() => {
      var { rotation } = this.state;
      rotation.z += 0.002;
      this.setState({ rotation });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
        <div className="col-12" style={centrar}>	
        <MTLModel
          enableZoom={true}
          position={{ x:-0.11, y:-0.2, z:0 }}
           rotation={this.state.rotation}
          width="800"
          height="800"
          texPath={"model2/"}
          mtl={"./model2/model.mtl"}
          src={obj}
        />
        </div>
        </div>
      </div>
    );
  }
}

const centrar = {
	alignSelf:"center",
	margin:"0 auto",
	marginLeft:"20%"
}

const customHeader = {
  backgroundColor: "#1F618D",
  background: "#1F618D",
  color: "white"
}