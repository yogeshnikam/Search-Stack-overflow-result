import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';
import DateRangePicker from 'react-dates';

class AdvancedSearchFilter extends Component {

    state = {
        open: false,
        filter: {
            sort: null,
            order: null,
            focusedInput: null,
            startDate: null,
            endDate: null
        }
    };

  	onInputChange = (e)	=> {
		this.setState({
			term: e.target.value
		});
	}

	onDatesChange = ({ startDate, endDate }) => {
    	this.setState({ startDate, endDate });
  	}

  	onFocusChange = (focusedInput) => {
    	this.setState({ focusedInput });
  	}

  	render() {

  		const { focusedInput, startDate, endDate } = this.state;

	    return (
	      	<div>
	        	<a onClick={ ()=> this.setState({ open: !this.state.open })}>
	          		Advance Search Settings &rsaquo; 
	        	</a>
	        	<Panel collapsible expanded={this.state.open} className="row">
					<input 
						type = "text" 
						name = "sort"
						placeholder = "Sorting: activity, votes, creation, relevance"
						className = "form-control col-md-3"
						value = { this.state.filter.sort }
						onChange = { this.onInputChange }
					/>

					<input 
						type = "text" 
						name = "order"
						placeholder = "Ordering: desc, asc"
						className = "form-control col-md-3"
						value = { this.state.filter.order }
						onChange = { this.onInputChange }
					/>

					<DateRangePicker
			          	{...this.props}
			          	onDatesChange = {this.onDatesChange}
			          	onFocusChange = {this.onFocusChange}
			          	focusedInput = {focusedInput}
			          	startDate = {startDate}
			          	endDate = {endDate}
			        />

	        	</Panel>
	      	</div>
	    );
  	}
}

export default AdvancedSearchFilter