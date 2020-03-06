import React from 'react';
import { connect } from 'react-redux';
import { add } from '../actions/actions';
import ContactForm from './ContactForm';

class AddContactsPage extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(state){
        console.log('submitted');
        this.props.dispatch(add({name: state.name}));
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <h1>Add A Contact</h1>
                <ContactForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}



export default connect()(AddContactsPage);