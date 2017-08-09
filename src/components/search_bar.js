import React, { Component } from 'react';



class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term: 'Game of Throne'}
	}

	// render() {
	// 	return ( 
	// 		<div>
	// 			<input onChange = {this.onInputChange} />
	// 			<br />
	// 			Value: {this.state.term}
	// 		</div>
	// 	);	
	// }

	
	// onInputChange = (event) => {
	// 		this.setState({term: event.target.value})
	// }


	//Arrow function way perfered in React!!
	render (){
		return (
			<div className="search-bar">
			<h1>Search Youtube</h1>
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
				<br />
			</div>	
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}
}


export default SearchBar;