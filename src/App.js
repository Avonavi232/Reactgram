import React, {Component} from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Modal from './components/Modal';
import LoaderModal from './components/LoaderModal';

const wrt = d => console.log(d);

class App extends Component {
	state = {
		picOpened: false,
		loaderOpened: false
	};

	componentDidMount(){
		fetch('./feed.json')
				.then( res => res.json() )
				.then( data => this.setState({feedItems: data}));
	}

	openLoaderHandler = (val) => {
		this.setState({loaderOpened: val});
	};


	render() {
		return (
				<div className="app">
					<Header openLoaderHandler={this.openLoaderHandler}/>
					<Feed
							feedItems={this.state.feedItems}
					/>
					{
						this.state.loaderOpened
						?
							<LoaderModal
								openLoaderHandler={this.openLoaderHandler}
							/>
						:
							null
					}
				</div>
		);
	}
}

export default App;
