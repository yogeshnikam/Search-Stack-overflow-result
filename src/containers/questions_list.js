import React, { Component } from 'react';
import { connect } from 'react-redux';

// child components
import QuestionDetailsRow from '../components/question_details_row';

const mapStateToProps = ({ questions }) => ({
	questions
})


class QuestionsList extends Component {

	render() {

		const { questions } = this.props

		let ques = questions.length > 0 
						? questions[0] 
						: questions
		return (
			<div>
		     	{ 
		     		ques.map( (question) => 
		     			<QuestionDetailsRow 
		     				question={question} 
		     				key={question.question_id} 
		     			/>
		     		)
		     	}
			</div>
		);
	}
}


export default connect(
	mapStateToProps
)(QuestionsList);