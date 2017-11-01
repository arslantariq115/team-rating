import React from 'react';
import propTypes from 'prop-types';
import LaddaButton, { L, SLIDE_UP } from 'react-ladda';
import { FaSmileO, FaMehO, FaFrownO, FaCheck } from 'react-icons/lib/fa';

class RatingForm extends React.Component {
	constructor() {
		super();

		this.state = {
			name: '',
			email: '',
			project: '',
			choice: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOptionClick = this.handleOptionClick.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleOptionClick(e, type) {
		e.preventDefault();

		this.setState({
			choice: type
		});
	}

	onSubmit(e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		const { name, email, project, choice } = this.state;

		return(
			<form onSubmit={this.onSubmit} className="ratingForm">
				<div className="fieldContainer">
					<label className="fieldLabel">Name: </label>
					<input
						placeholder='Name'
						name="name"
						className="fieldInput"
						value={this.state.name}
						onChange={this.handleInputChange}
						required
					/>
				</div>
				<div className="fieldContainer">
					<label className="fieldLabel">Email: </label>
					<input
						placeholder='Email'
						name="email"
						className="fieldInput"
						type="email"
						value={this.state.email}
						onChange={this.handleInputChange}
						required
					/>
				</div>
				<div className="fieldContainer">
					<label className="fieldLabel">Project: </label>
					<input
						placeholder='Project Name'
						name="project"
						className="fieldInput"
						value={this.state.project}
						onChange={this.handleInputChange}
						required
					/>
				</div>
				<div className="choiceContainer">
					<div>
						How much are you satisfied with the team's work?
					</div>
					<div className="optionContainer">
						<div title="Quite a lot." style={{ marginRight: 20 }}>
							<div>
								<button
									onClick={(e) => this.handleOptionClick(e, 'good')}
								>
									<FaSmileO
										className="option"
										style={{ color: 'green' }}
									/>
								</button>
							</div>
							<div>
								{
									this.state.choice === 'good' && <FaCheck/>
								}
							</div>
						</div>
						<div title="5 on the scale of 10." style={{ marginRight: 20 }}>
							<div>
								<button
									onClick={(e) => this.handleOptionClick(e, 'average')}
								>
									<FaMehO
										className="option"
										style={{ color: 'orange' }}
									/>
								</button>
								<div>
									{
										this.state.choice === 'average' && <FaCheck/>
									}
								</div>
							</div>
						</div>
						<div title="Not at all.">
							<div>
								<button onClick={(e) => this.handleOptionClick(e, 'bad')}>
									<FaFrownO
										className="option"
										style={{ color: 'red' }}
									/>
								</button>
							</div>
							<div>
								{
									this.state.choice === 'bad' && <FaCheck/>
								}
							</div>
						</div>
					</div>
					<div style={{ marginTop: 30 }}>
						<LaddaButton
							loading={this.props.isLoading}
							disabled={name === '' || email === '' || project === '' || choice === ''}
							onClick={this.onSubmit}
							data-color="#6495ED"
							data-size={L}
							data-style={SLIDE_UP}
							data-spinner-size={30}
							data-spinner-color="#ddd"
							data-spinner-lines={12}
						>
							Send Feedback
						</LaddaButton>
					</div>
				</div>
			</form>
		)
	}
}

RatingForm.propTypes = {
	onSubmit: propTypes.func.isRequired,
	isLoading: propTypes.bool
};

export default RatingForm;
