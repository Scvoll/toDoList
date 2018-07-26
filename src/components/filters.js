import React from 'react'
import {setFilter} from "../actions"
import {connect} from 'react-redux'
import {filters} from '../constants'
import PropTypes from "prop-types"

export const Filters = (props) => {
    return (
        <div className='filters'>
            <button disabled={props.stateFilter === filters.SHOW_ALL}
                    onClick={() => props.changeFilter(filters.SHOW_ALL)}>Show All</button>
            <button disabled={props.stateFilter === filters.ACTIVE}
                    onClick={() => props.changeFilter(filters.ACTIVE)}>Active</button>
            <button disabled={props.stateFilter === filters.COMPLETED}
                    onClick={() => props.changeFilter(filters.COMPLETED)}>Completed</button>
        </div>
    )
};


const mapStateToProps =  (state) => ({
    stateFilter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    changeFilter: (filter) => dispatch(setFilter(filter))
});

Filters.propTypes = {
    stateFilter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
};


export default connect(mapStateToProps,mapDispatchToProps)(Filters);