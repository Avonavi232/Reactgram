import React, {Component} from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import './App.css';

class App extends Component {
    state = {
        image: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
        }
    };

    handleChange = event => {
        const setting = event.target.id;
        const value = event.target.value;
        const settings = {
            ...this.state.settings,
            [setting]: value
        };
        this.setState({
            selectedFilter: '',
            settings
        });
    };

    render() {
        const { image, selectedFilter, settings } = this.state;
        return (
            <div className="app">
                <Header>Reactgram</Header>
                <section className="content">
                    <Settings settings={settings} handleChange={this.handleChange}/>
                </section>
            </div>
        );
    }
}

export default App;
