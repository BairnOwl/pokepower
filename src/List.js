import React, { Component } from 'react';

import PokeItem from './PokeItem';

export default class List extends Component {

	constructor(props) {

		super(props);

		const images = this.importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

		this.state = {
			items: this.props.items,
			sortByNum: this.props.sortByNum,
			images: images
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
    		items: nextProps.items,
    		sortByNum: nextProps.sortByNum
  		});
	}

	importAll(r) {
	    let images = {};
	    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	    return images;
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
			return <PokeItem key={i} image={this.state.images[item.Number + '.png']} number={item.Number} name={item.Name} type1={ item.Type1 } type2={ item.Type2 } gen={item.Generation} bst={item.Total}/>
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