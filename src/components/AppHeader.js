import React from 'react';
import propTypes from 'prop-types';

class AppHeader extends React.Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div>
				<div className="appHeader">
					<h1>{this.props.title}</h1>
				</div>
				<div className="appSubHeader">
					<h5>
						{this.props.subtitle}
					</h5>
				</div>
			</div>

		)
	}
}

AppHeader.propTypes = {
	title: propTypes.string.isRequired,
	subtitle: propTypes.string
};

export default AppHeader;
