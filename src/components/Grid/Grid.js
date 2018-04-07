import React from "react";
import "./Grid.css";
import Box from "./Box";


class Grid extends React.Component{
	render(){
			const width = this.props.cols * 14;
			let rowArr = [];
				
			let boxClass = "";
			for (var i = 0; i < this.props.rows; i++){
				for(var j =0; j < this.props.cols; j++){
					let boxId = i + "_" + j;
					
					boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
					rowArr.push(
						<Box 
							boxClass ={boxClass}
							boxId= {boxId}
							key = {boxId}
							row = {i}
							col = {j}
							selectBox ={this.props.selectBox}
						/>				
					)
				}
		}
		
		
		return(

			<div className= "grid" style={{width: width}}>
				{{rowsArr}}
				
			</div>
		)
	}
}

export default Grid;