import React, {Component} from 'react';
import './App.css';

function DataListItem({id, name}) {
	return(
			<div style={{marginBottom: 20}}>
				<h2>{name}</h2>
				<p>{id}</p>
			</div>
	)
}

class DataList extends Component{
	render(){
		console.log(this.props);
		const data = this.props.data;
		if (data) {
			return (
					<div>
						{
							data.map(function (el) {
								return <DataListItem key={el.id} id={el.id} name={el.name}/>
							})
						}
					</div>
			);
		} else {
			return <h1>Пусто</h1>
		}
	}
}

function withData(Component, endpoint, propName) {
	return class extends React.Component {
		state = {};

		componentWillMount(){
			fetch(endpoint)
					.then( responce => responce.json() )
					.then( data => this.setState({
						[propName]: data
					}));
		}

		render(){
			return <Component {...this.props} {...this.state} />
		}
	}
}

const ListWithData = withData(DataList, './data/all.json', 'data');



class App extends Component {
	render() {
		return (
				<div className="app">
					<ListWithData/>
				</div>
		);
	}
}

export default App;
