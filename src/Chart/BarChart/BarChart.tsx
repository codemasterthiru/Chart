import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


export default class BarChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
       }
  }
   render()
   {
      return(
         <div>
            <Bar/>
         </div>
      )
   }
}