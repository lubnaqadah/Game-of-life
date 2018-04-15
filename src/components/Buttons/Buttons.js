import React from "react";
import "./Buttons.css";
import { ButtonToolbar, MenuItem, DropdownButton } from 'react-bootstrap';

class Buttons extends React.Component{

	handleSelect = evt => this.props.gridSize(evt);

render(){
	return(
		<div className="center">
			<ButtonToolbar>
				<button className="btn btn-default" onClick={this.props.playButton}>Play</button>
				<button className="btn btn-default" onClick={this.props.pauseButton}>Pause</button>
				<button className="btn btn-default" onClick={this.props.slowButton}>Slow</button>
				<button className="btn btn-default" onClick={this.props.fastButton}>Fast</button>
				<button className="btn btn-default" onClick={this.props.clearButton}>Clear</button>
				<button className="btn btn-default" onClick={this.props.seedButton}>Seed</button>

				<DropdownButton
					title="Grid Size"
					id="size-menu"
					onSelect={this.handleSelect}
					>
					<MenuItem eventKey="1">20x10</MenuItem>
					<MenuItem eventKey="2">50x30</MenuItem>
					<MenuItem eventKey="3">70x50</MenuItem>
				</DropdownButton>
			</ButtonToolbar>

		</div>		
	)
}
}

export default Buttons;