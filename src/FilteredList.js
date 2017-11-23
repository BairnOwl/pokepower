import React, { Component } from 'react';

import List from './List';

import './style.css';

export default class FilteredList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			items: this.props.items,
			typeList: [],
			genList: [],
			sortByNum: true
		};

		this.selectType = this.selectType.bind(this);
		this.selectGen = this.selectGen.bind(this);
		this.changeSortToNum = this.changeSortToNum.bind(this);
		this.changeSortToBST = this.changeSortToBST.bind(this);
	}

	selectType(e) {
		let options = e.target.options;
		let currList = [];

		for (let i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
		      currList.push(options[i].value);
			}
		}
		 
		this.setState({
			typeList: currList
		});

	}

	selectGen(e) {
		let options = e.target.options;
		let currList = [];

		for (let i = 0, l = options.length; i < l; i++) {
			if (options[i].selected) {
		      currList.push(parseInt(options[i].value));
			}
		}
		 
		this.setState({
			genList: currList
		});
	}

	changeSortToNum() {
		if (!this.state.sortByNum) {
			this.setState({
				sortByNum: true
			});
		}
	}

	changeSortToBST() {
		if (this.state.sortByNum) {
			this.setState({
				sortByNum: false
			});
		}
	}

	filterItem(item) {
		let typeCheck = false;
		let genCheck = false;

		if (this.state.typeList.length === 0 || (this.state.typeList.length === 1 && this.state.typeList[0] === "")) {
			typeCheck = true;
		}

		if (this.state.genList.length === 0 || (this.state.genList.length === 1 && this.state.genList[0] === 0)) {
			genCheck = true;
		}

		for (let type of this.state.typeList) {
			if (item.Type1 === type) {
				typeCheck = true;
			} else if (item.Type2 && item.Type2 === type) {
				typeCheck = true;
			}
		}

		for (let gen of this.state.genList) {
			if (item.Generation === gen) {
				genCheck = true;
			}
		}

		if (typeCheck && genCheck) {
			return true;
		}
		return false;
	} 

	render() {

		return (
			<div>

				<label>Filter by: </label>
		
				<select className="selectpicker" multiple title="Type" onChange={ this.selectType } >
					<option value="" selected disabled hidden style={{ display: 'none' }}></option>
				  <option value="Normal">Normal</option>
				  <option value="Fighting">Fighting</option>
				  <option value="Flying">Flying</option>
				  <option value="Poison">Poison</option>
				  <option value="Ground">Ground</option>
				  <option value="Rock">Rock</option>
				  <option value="Bug">Bug</option>
				  <option value="Ghost">Ghost</option>
				  <option value="Steel">Steel</option>
				  <option value="Fire">Fire</option>
				  <option value="Water">Water</option>
				  <option value="Grass">Grass</option>
				  <option value="Electric">Electric</option>
				  <option value="Psychic">Psychic</option>
				  <option value="Ice">Ice</option>
				  <option value="Dragon">Dragon</option>
				  <option value="Dark">Dark</option>
				  <option value="Fairy">Fairy</option>
				</select>


				<select className="selectpicker" multiple title="Generation" onChange={ this.selectGen } >
					<option value="0" selected disabled hidden style={{ display: 'none' }}></option>
				  <option value="1">1</option>
				  <option value="2">2</option>
				  <option value="3">3</option>
				  <option value="4">4</option>
				  <option value="5">5</option>
				  <option value="6">6</option>
				</select>

				<div id="sortBox">
					<label>Sort by: </label>

					<button type="button" className={ "pokeButton" + (this.state.sortByNum ? " selectedBtn" : "")} onClick={ this.changeSortToNum } >By number</button>

					<button type="button" className={ "pokeButton" + (!this.state.sortByNum ? " selectedBtn" : "")} onClick={ this.changeSortToBST } >By base stat total</button>
				</div>
	
				<List items={ this.state.items.filter(this.filterItem.bind(this)) } sortByNum={ this.state.sortByNum } />
			</div>

		);
	}
}