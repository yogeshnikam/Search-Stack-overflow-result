import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { getQuestions } from '../actions/get_questions';

const mapDispatchToProps = dispatch => bindActionCreators({
	getQuestions
},dispatch)


class SearchBar extends Component {
	
	state = {
		term: ''
	}

	onInputChange = (e) =>	{
		this.setState({
			term: e.target.value
		});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.getQuestions(this.state.term);
	}

	render(){
		return(	
			<div>
				<form 
					onSubmit={ this.onFormSubmit } 
					className="input-group mg-30">
						<input 
							type="text" 
							placeholder="type a question"
							className="form-control search-bar"
							value={ this.state.term }
							onChange={ this.onInputChange }
						/>
						<span className="input-group-btn">
							<button 
								type="submit" 
								className="btn btn-primary">
								Ask
							</button>
						</span>
				</form>
			</div>
		);
	}
}

export default connect(
	null, 
	mapDispatchToProps
)(SearchBar);