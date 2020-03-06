import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../actions/actions';
import { NavLink } from 'react-router-dom';

const ContactItem = ({name, id, dispatch}) => (
    <div>
        <h3>{name}</h3>
        <button onClick={() => dispatch(remove(id))}>Remove</button>
        <NavLink to={`/Edit_Contact/${id}`}>Edit</NavLink>
    </div>
);

export default connect()(ContactItem);