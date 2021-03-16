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
      url:'/api/clubs',
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
        </section>
    );
  }
}

export default InputClub;