import React from 'react';
import axios from 'axios';


//edit to fix client folder

class InputClub extends React.Component{

  state = {
    club: '',
    city: '',
    league_titles: '',
    founded: '',
    clubs: []
  };

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name]: value})
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      club: this.state.club,
      city: this.state.city,
      league_titles: this.state.league_titles,
      founded: this.state.founded
    };

    axios ({
      url:'/api/save',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
    })
    .catch(() => {
      console.log('Internal server error');
    });;
  };

  resetUserInputs = () => {
    this.setState({
      club: '',
      city: '',
      league_titles: '',
      founded: ''
    });
  };

  render() {
    
    console.log('State: ', this.state);
    //JSX
    return(
      <div>
        <h2>Club Input Form</h2>
        <form onSubmit={this.submit}>
          <div className="form-input">
            <input
            type="text"
            name="club"
            placeholder="Club"
            value={this.state.club}
            onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <input 
              type="text"
              placeholder="City" 
              name="city" 
              value={this.state.city} 
              onChange={this.handleChange}>
            </input>
          </div>
          <div className="form-input">
            <input 
              type="text"
              placeholder="League Titles" 
              name="league_titles" 
              value={this.state.league_titles} 
              onChange={this.handleChange}>
            </input>
          </div>
          <div className="form-input">
            <input 
              type="text"
              placeholder="Founded" 
              name="founded" 
              value={this.state.founded} 
              onChange={this.handleChange}>
            </input>
          </div>

          <button>Submit</button>
        </form> 
    </div>
    );
  }
}

export default InputClub;