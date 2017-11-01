import React from 'react';
import NotificationSystem from 'react-notification-system';
import RatingForm from './RatingForm';

class FormView extends React.Component {
	constructor() {
		super();

		this.state = {
			message: '',
			isLoading: false,
			notificationSystem: null
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({
			notificationSystem: this.notif
		});
	}

	addNotification() {
		this.state.notificationSystem.addNotification({
			title: 'Thank you for your feedback.',
			message: 'Your feedback has been submitted.',
			level: 'success'
		});
	}

	onSubmit(data) {
		this.setState({ isLoading: true });

		fetch('https://private-e642e7-teamrating.apiary-mock.com/feedback', {
			method: 'POST',
			headers: new Headers({ "Content-Type": "application/json" }),
			body: JSON.stringify(data),
			mode: 'cors'
		})
			.then((resp) => {
				if(resp.status === 200 || resp.status === 201){
					this.setState({
						message: 'Thank you for your feedback.',
						isLoading: false
					});
					this.addNotification();
				}
			})
	}

	render() {
		return(
			<div style={{ marginTop: 50 }}>
				<NotificationSystem ref={a => this.notif = a} />
				<RatingForm
					isLoading={this.state.isLoading}
					onSubmit={this.onSubmit}
				/>
			</div>
		)
	}
}

export default FormView;
