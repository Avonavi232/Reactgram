import React, {Component} from 'react';
import Form from './components/Form';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './App.css';

class App extends Component {
    state = {
        mounted: true
    };

    handleSubmit = event => {
      event.preventDefault();
      this.setState({mounted: false}, () => {console.log(this.state)});
    };

    render() {
        return (
            <div className="app">
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave
                    transitionLeaveTimeout={300}
                >
                    {this.state.mounted && <Form onSubmit={this.handleSubmit}/>}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
