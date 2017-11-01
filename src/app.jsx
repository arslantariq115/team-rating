import React from 'react';
import Header from './components/AppHeader';
import FormView from './components/FormView';
import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header
					title="Team Rating"
					subtitle="Please fill this out and let us know how you feel about our work."
				/>
        <FormView/>
      </div>
    )
  }
}
