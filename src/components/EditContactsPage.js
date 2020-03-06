import React from 'react';
import ContactForm from './ContactForm';
import { edit } from '../actions/actions';
import { connect } from 'react-redux';

class EditContactsPage extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(data){
        this.props.dispatch(edit(this.props.contact.id, {...data}));
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h1>Edit Contact</h1>
                <ContactForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
};

const mapStateToProps = (state, props) => ({
    contact: state.actions.find(contact => contact.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditContactsPage);