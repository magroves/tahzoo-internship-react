import React from 'react';

function FormInput(props) {
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
    
          <br></br>
          <br></br>
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

export default FormInput;