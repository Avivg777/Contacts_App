import React from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';

const ContactsPage = (props) => (
    <div>
        <h1>Contacts Page</h1>
        {
            props.actions && 
            props.actions.map(contact => <ContactItem {...contact} key={contact.id}/>)
        }
    </div>
);

const mapStateToProps = (state, props) => ({
    actions: state.actions
});

export default connect(mapStateToProps)(ContactsPage);