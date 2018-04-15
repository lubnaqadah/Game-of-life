import React from "react";
import ReactDOM from 'react-dom';
import "./Main.css";
import Grid from "./../Grid";

class Main extends React.Component{
	constructor(){
		super();
		this.speed = 100;
		this.rows = 25;
		this.cols = 50;
		
		this.state={
			generation:0,
			gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
			
				
		}
	}
selectBox = (row, col) =>{
	let gridCopy = arrayClone(this.state.gridFull)
	gridCopy[row][col] = !gridCopy[row][col]
	this.setState({gridFull:gridCopy})
}

	render(){
		return(
			<div>
				<h1>The Game Of Life</h1>
				<Grid
					gridFull ={this.state.gridFull}
					rows = {this.rows}
					cols ={this.cols}
					selectBox ={this.selectBox}
				  />
				<h3>Generations: {this.state.generation}</h3>
			</div>
		)
	}
}

function arrayClone(arr){
	return JSON.parse(JSON.stringify(arr));
}

export default Main;
