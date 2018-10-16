'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  Viro360Image,
  ViroBox,
  ViroMaterials,
} from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    //set initial state here
    this.state = {
      text:"Imagination is more important than knowledge",
    }
    //bind this to the class functions
    this._onBoxHover = this._onBoxHover.bind(this); 
    this._showHelloBeachScene = this._showHelloBeachScene.bind(this);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/360_park.jpg')} />
        <ViroText text={this.state.text} width={12} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
        <ViroBox position={[0, -1, -2]} scale={[.5,.5,.2]} materials={["grid"]} onHover={this._onBoxHover} onClick={this._showHelloBeachScene} />
      </ViroScene>
    );
  }

  _onBoxHover(isHovering){
    let text = isHovering ? "I am a box!" : "Imagination is more important than knowledge";
    this.setState({
      text
    });
  }
  _showHelloBeachScene(){
    this.props.sceneNavigator.push({scene:require("./HelloBeachScene.js")});
  }

}


var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
});

module.exports = HelloWorldScene;
