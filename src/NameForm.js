import React from 'react';

class NameForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = { //here we store all values needed to be stored/kept track of in this component
            value: '',
            isValid: true,
            hasSubmitted: false
        };

        this.handleChange = this.handleChange.bind(this); //here we bind our handlers, to allow this.handleChange to be called within the component
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value}); //this.setStatedid is the only recommended way to set state, this will set 
                                                    //the value and cause render to be called
    }

    handleSubmit(event){
        this.setState({hasSubmitted : true});
        event.preventDefault();
    }

    render(){ //render will be called when state (or props) changes. 
        return(
            <form onSubmit={this.handleSubmit} /*Here we connect our form with our submit handler*/>
                <label>
                    Name:
                    <input 
                    className= 
                        {
                            this.state.hasSubmitted && !this.isValid() /* Here we compare state of submission with the 
                                                                        output of our validity statement to specify CSS class which simply changes 
                                                                        the background color*/
                                ? 
                             ('invalidName') : ('')  /*this will either set the css className as '' or 'invalidName' which gives it the red background*/
                        }
                    type="text" 
                    value={this.state.value} /* Here we set the html value to this particular value of state, state.value*/
                    onChange={this.handleChange} /* Here we connect the html onChange to our handleChange function above, 
                                                where we set the state of the value for this component*/ 
                    />
                </label><br />
                <input type="submit" value="Submit"/>
            </form>
        );
    }

    isValid(val = this.state.value){ //this is our validity function, returning true when length is above 3
        if(val.length > 3){
            return true;
        }  
        return false;
    }   
}
export default NameForm;