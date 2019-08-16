import React, { Component } from 'react'
import "./index.scss";

export class DonutChart extends Component {
  
    
  render() {
    return (
      <div>
        <div className="DonutChart__multi-graph DonutChart__margin">
            <div className="graph DonutChart__graph-vue" data-name=""  style={{"--percentage" : 100}}></div>
            <div className="graph DonutChart__graph-jq" data-name="" style={{"--percentage" : 75}}></div>
            <div className="graph DonutChart__graph-ng" data-name="" style={{"--percentage" : 50}}></div>
            <div className="graph DonutChart__graph-rec" data-name="" style={{"--percentage" : 25}}></div>
        </div>
      </div>  
    )
  }
}

export default DonutChart
