import React, { Component } from 'react';
import Cell from "./Cell.js" // tengo que importar esto

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

let valores=[]
for(let i=0;i<10;i++){
let array=[]
for(let i=0;i<10;i++){
  array.push("#F00")
}
valores.push(array)
}

Matrix.defaultProps = {
values: valores
}
