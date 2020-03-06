import React from 'react';

export default class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: ''
        }
    }
    onNameChange(e){
        const name = e.target.value;

        this.setState(() => ({name}));
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onNameChange} type="text" name="first_name" placeholder="First Name" value={this.state.name} />
                <button className="submit-btn">Submit</button>
            </form>
        )
    }
}
