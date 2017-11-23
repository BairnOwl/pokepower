import React, { Component } from 'react';

import PokeItem from './PokeItem';

export default class List extends Component {

	constructor(props) {

		super(props);

		this.state = {
			items: this.props.items,
			sortByNum: this.props.sortByNum
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
    		items: nextProps.items,
    		sortByNum: nextProps.sortByNum
  		});
	}

	renderList() {

		let items = this.state.items;

		if (this.state.sortByNum) {
			items = this.state.items.sort((a, b) => {
				return parseInt(a.Number) - parseInt(b.Number);
			});
		} else {
			items = this.state.items.sort((a, b) => {
				return parseInt(b.Total) - parseInt(a.Total);
			});
		}

		let itemList = items.map((item, i) => {
			return <PokeItem key={i} number={item.Number} name={item.Name} type1={ item.Type1 } type2={ item.Type2 } gen={item.Generation} bst={item.Total}/>
		});

		return itemList;
	}

	render() {
		return (
			<ul>
				{this.renderList()}
			</ul>
		);
	}

}