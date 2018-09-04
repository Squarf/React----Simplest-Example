import React from 'react';

class NameForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isValid: true,
            hasSubmitted: false
    };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        this.setState({hasSubmitted : true});
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                    className= 
                        {
                            this.state.hasSubmitted && !this.isValid() 
                                ? 
                            ('invalidName') : ('')
                        }
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
                
                </label><br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    isValid(val = this.state.value){
        if(val.length > 3){
            return true;
        }  
        return false;
    }   
}
export default NameForm;