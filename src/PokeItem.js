import React, { Component } from 'react';

import './style.css';

export default class FilteredList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			number: this.props.number,
			name: this.props.name,
			type1: this.props.type1,
			type2: this.props.type2,
			gen: this.props.gen,
			bst: this.props.bst,
			image: this.props.image
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
    		number: nextProps.number,
			name: nextProps.name,
			type1: nextProps.type1,
			type2: nextProps.type2,
			gen: nextProps.gen,
			bst: nextProps.bst,
			image: nextProps.image
  		});
	}

	render() {
		return (
			<div className="pokeBox">
				<img src={ this.state.image } className="pokeImg" />
				<div id="textbox">
					<div className="row">
						<h3 className="pokeText">#{this.state.number}</h3>
						<h3 className="pokeText">{ this.state.name }</h3>
						<h4 className="pokeText">{ this.state.type1 + (this.state.type2 ? '/' + this.state.type2 : '') }</h4>
					</div>
					<div className="row">
						<h4 className="pokeText">Base Stat Total: {this.state.bst}</h4>
						<h4 className="pokeText">Gen: { this.state.gen }</h4>
					</div>
				</div>


			</div>
		);
		
	}

}