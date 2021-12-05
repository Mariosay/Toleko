import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Tick, MTLModel } from "react-3d-viewer";

import obj from "./../assets/gothic.windows.obj";
import mtl from "./../assets/gothic.windows.mtl";
// const obj = require("./model2/scene.gltf")

export default class Render3d extends Component {
  state = {
    rotation: { x: 0, y: 0, z: 0 }
  };
  componentWillUnmount() {
    this.tick.animate = false;
  }
  componentDidMount() {
    this.tick = Tick(() => {
      var { rotation } = this.state;
      rotation.y += 0.005;
      this.setState({ rotation });
    });
  }

  render() {
    return (
      <div className="container">
        <MTLModel
          enableZoom={true}
          position={{ x: 0, y: 0, z: 0 }}
          // rotation={this.state.rotation}
          width="800"
          height="800"
          texPath={"model2/"}
          mtl={"./model2/model.mtl"}
          src={obj}
        />
      </div>
    );
  }
}

