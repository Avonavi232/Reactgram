import {connect} from 'react-redux';

import {set_filter} from "../actions";

import Filter from '../components/Filter';

function mapStateToProps(state){
	return {
		activeFilter: state.filter
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSetFilter: filter => dispatch(set_filter(filter))
	};
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;