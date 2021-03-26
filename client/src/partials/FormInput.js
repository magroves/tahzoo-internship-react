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

class FormInput extends React.Component{

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
        alert("Form Submitted!")
      })
      .catch(() => {
        console.log('Internal server error');
      });;
    }else{
      console.error('Invalid Form')
      alert("Invalid Form.")
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
        <div class="flex items-center h-screen w-full bg-teal-lighter">
          <div class="w-full bg-gray-100 rounded shadow-lg p-8 m-4 md:max-w-xs md:mx-auto">
            <h1 class="text-gray-700 font-semibold text-2xl tracking-wide mb-2 text-center">
              Club Input Form
            </h1>
            <form class="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={this.submit} method="post">
              <div class="flex flex-col mb-4">
                <input
                  class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                  type="text"
                  name="club"
                  placeholder="Club"
                  value={this.state.club}
                  onChange={this.handleChange}
                  />
                  {errors.club.length > 0 && 
                  <span className='error'>{errors.club}</span>}
              </div>
              <div class="flex flex-col mb-4">
                <input
                  class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                  type="text"
                  placeholder="City"
                  name="city"
                  value={this.state.city} 
                  onChange={this.handleChange}>
                  </input>
                  {errors.city.length > 0 && 
                  <span className='error'>{errors.city}</span>}
              </div>
              <div class="flex flex-col mb-4">
                <input
                  class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                  type="text"
                  placeholder="League Titles"
                  name="league_titles"
                  value={this.state.league_titles} 
                  onChange={this.handleChange}>
                  </input>
                  {errors.league_titles.length > 0 && 
                  <span className='error'>{errors.league_titles}</span>}
              </div>
              <div class="flex flex-col mb-4">
                <input
                  class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                  type="text"
                  placeholder="Founded"
                  name="founded"
                  value={this.state.founded} 
                  onChange={this.handleChange}>
                  </input>
                  {errors.founded.length > 0 && 
                  <span className="error">{errors.founded}</span>}
              </div>
              <div className="flex flex-col mb-4">
                  <input 
                  class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                    type="text"
                    placeholder="Image" 
                    name="image" 
                    value={this.state.image} 
                    onChange={this.handleChange}>
                    </input>
                    {errors.image.length > 0 && 
                    <span className="error">{errors.image}</span>}
               </div>

              <button class="block uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
  }
}

export default FormInput;