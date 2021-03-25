import React from 'react';
import axios from 'axios';

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class InputClub extends React.Component{

  state = {
    club: '',
    city: '',
    league_titles: '',
    founded: '',
    image: '',
    clubs: [],
    errors: {
      club: '',
      city: '',
      league_titles: '',
      founded: '',
      image: ''
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors; 
    const number = new RegExp("^[0-9]+$");
    const url = new RegExp("^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"+ // domain name
    "((\\d{1,3}\\.){3}\\d{1,3}))"+ // OR ip (v4) address
    "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"+ // port and path
    "(\\?[;&a-z\\d%_.~+=-]*)?"+ // query string
    "(\\#[-a-z\\d_]*)?$","i"); // fragment locator);

    switch(name){
      case 'club':
        errors.club = 
        value.length < 5
          ? 'Club must be 5 or more characters'
          :'';
        break;
      case 'city':
        errors.city = 
        value.length < 5 
          ? 'City must be 5 or more characters'
          :'';
      break;
      case 'league_titles':
        errors.league_titles = 
        value > 25 || !number.test(value)
          ? 'League titles must be a number and less than 25'
          :'';
      break;
      case 'founded':
        errors.founded = 
        value.length !== 4 || !number.test(value) || value > 2021 || value < 1880
          ? 'Year founded must be a valid year after 1880'
          :'';
      break;
      case 'image':
        errors.image = 
        !url.test(value)
          ? 'Image must be a valid url with image'
          :'';
      break;
      default:
      break;
    }
    this.setState({errors, [name]: value}, ()=> {
      console.log(errors)
    })
  };

  submit = (event) => {
    event.preventDefault();

    const payload = {
      club: this.state.club,
      city: this.state.city,
      league_titles: this.state.league_titles,
      founded: this.state.founded,
      image: this.state.image
    };

    if(validateForm(this.state.errors)){
      console.info('Valid Form')
      axios ({
        url:'/api/clubs',
        method: 'POST',
        data: payload
      })
      .then(() => {
        console.log('Data has been sent to the server');
        this.resetUserInputs();
        alert("You are submitting " + this.state.club + "'s information")
      })
      .catch(() => {
        console.log('Internal server error');
      });;
    }else{
      console.error('Invalid Form')
      alert("Invalid Form")
    }
  };

  resetUserInputs = () => {
    this.setState({
      club: '',
      city: '',
      league_titles: '',
      founded: '',
      image: ''
    });
  };

  render() {
    const {errors} = this.state;
    // console.log('State: ', this.state);
    //JSX
    return(

        <section className="relative">

                {/* Illustration behind hero content */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                    <circle cx="1232" cy="128" r="128" />
                    <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
            </div>

                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-10 md:pb-20"></div>
                <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">Club Import Form</span></h1>
                        <div className="max-w-3xl mx-auto">
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
                        </div>
                </div>
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <br></br>
                    <br></br>
                    <h2>Club Input Form</h2>
                    <form onSubmit={this.submit}>
                    <div className="form-input">
                      <div>
                        <input
                        type="text"
                        name="club"
                        placeholder="Club"
                        value={this.state.club}
                        onChange={this.handleChange}
                        />
                        {errors.club.length > 0 && 
                        <span className='error'>{errors.club}</span>}
                      </div>
                    </div>
                    <div className="form-input">
                      <div>
                        <input 
                        type="text"
                        placeholder="City" 
                        name="city" 
                        value={this.state.city} 
                        onChange={this.handleChange}>
                        </input>
                        {errors.city.length > 0 && 
                        <span className='error'>{errors.city}</span>}
                      </div>
                    </div>
                    <div className="form-input">
                      <div>
                        <input 
                        type="text"
                        placeholder="League Titles" 
                        name="league_titles" 
                        value={this.state.league_titles} 
                        onChange={this.handleChange}>
                        </input>
                        {errors.league_titles.length > 0 && 
                        <span className='error'>{errors.league_titles}</span>}
                      </div>
                    </div>
                    <div className="form-input">
                      <div>
                          <input 
                          type="text"
                          placeholder="Founded" 
                          name="founded" 
                          value={this.state.founded} 
                          onChange={this.handleChange}>
                          </input>
                          {errors.founded.length > 0 && 
                          <span className="error">{errors.founded}</span>}
                      </div>
                    </div>
                    <div className="form-input">
                      <div>
                          <input 
                          type="text"
                          placeholder="Image" 
                          name="image" 
                          value={this.state.image} 
                          onChange={this.handleChange}>
                          </input>
                          {errors.image.length > 0 && 
                          <span className="error">{errors.image}</span>}
                      </div>
                    </div>

                    <button>Submit</button>
                    </form> 
                </div>  
        </section>
    );
  }
}

export default InputClub;