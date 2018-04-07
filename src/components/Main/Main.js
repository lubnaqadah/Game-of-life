import React from "react";
import "./Main.css";
import Grid from "./../Grid";

class Main extends React.Component{
	constructor(){
		super();
		this.speed = 100;
		this.rows = 30;
		this.cols = 50;
		
		this.state={
			generation:0,
			gridFull:Array(this.rows).fill(Array(this.cols).fill(false)),
			
				
		}
	}


	render(){
		return(
			<div>
				<h1>The Game Of Life</h1>
				<Grid
					gridFill ={this.state.gridFull}
					rows = {this.rows}
					cols ={this.cols}
					selectBox ={this.selectBox}
				  />
				<h3>Generations: {this.state.generation}</h3>
			</div>
		)
	}
}

export default Main;
