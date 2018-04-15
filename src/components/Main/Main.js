import React from "react";
import ReactDOM from 'react-dom';
import "./Main.css";
import Grid from "./../Grid";
import Buttons from "./../Buttons";

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
	seed = () => {
		let gridCopy = arrayClone(this.state.gridFull)
		for (let i = 0; i < this.rows; i++){
			for (let j = 0; j < this.cols; j++){
				if (Math.floor(Math.random() * 4) === 1){
					gridCopy[i][j] = true;
				}
			}
		}
		this.setState({gridFull:gridCopy});
	}

	playButton = () => {
		clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, this.speed);
	}

	pauseButton = () => {
		clearInterval(this.intervalId)
	}


	play = () => {
		let g = this.state.gridFull;
		let g2 = arrayClone(this.state.gridFull);

		for (let i = 0; i < this.rows; i++) {
			for (let j = 0; j < this.cols; j++) {
				let count = 0;
				if (i > 0) if (g[i - 1][j]) count++;
				if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
				if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
				if (j < this.cols - 1) if (g[i][j + 1]) count++;
				if (j > 0) if (g[i][j - 1]) count++;
				if (i < this.rows - 1) if (g[i + 1][j]) count++;
				if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
				if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;
				if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
				if (!g[i][j] && count === 3) g2[i][j] = true;
			}
		}
		this.setState({
			gridFull: g2,
			generation: this.state.generation + 1
		});

	}

	fast = () =>{
		this.speed = 100;
		this.playButton()
	}

	slow = () =>{
		this.speed = 1000;
		this.playButton()
	}

	clear = () =>{
		let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false));
		this.setState({gridFull: grid, generation:0})
	}

	gridSize = (size) =>{
		switch(size){
			case "1":
				this.cols = 20;
				this.rows = 10;
				break;
			case "2":
				this.cols = 50;
				this.rows = 30;
				break;
			default:
				this.cols = 70;
				this.rows = 50;

		}
		this.clear();
	}

	componentDidMount(){
		this.seed();
		this.playButton()
	}


render(){
	return(
		<div>
			<h1>The Game Of Life</h1>
			<Buttons 
				playButton = {this.playButton}
				pauseButton = {this.pauseButton}
				clearButton = {this.clear}
				seedButton = {this.seed}
				slowButton = {this.slow}
				fastButton = {this.fast}
				gridSize = {this.gridSize}
				/>

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
