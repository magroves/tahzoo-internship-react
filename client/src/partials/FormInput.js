import React from 'react';

function FormInput(props) {
    return(
        <div className="flex flex-col min-h-screen overflow-hidden">
    
          <br></br>
          <br></br>
          <h2>Club Input Form</h2>
          <form onSubmit={props.submit}>
            <div className="form-input">
              <input
              type="text"
              name="club"
              placeholder="Club"
              value={props.club}
              onChange={props.handleChange}
              />
            </div>
            <div className="form-input">
              <input 
                type="text"
                placeholder="City" 
                name="city" 
                value={props.city} 
                onChange={props.handleChange}>
              </input>
            </div>
            <div className="form-input">
              <input 
                type="text"
                placeholder="League Titles" 
                name="league_titles" 
                value={props.league_titles} 
                onChange={props.handleChange}>
              </input>
            </div>
            <div className="form-input">
              <input 
                type="text"
                placeholder="Founded" 
                name="founded" 
                value={props.founded} 
                onChange={props.handleChange}>
              </input>
            </div>
  
            <button>Submit</button>
          </form> 
      </div>
      );
}

export default FormInput;