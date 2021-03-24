 import React from 'react';
import axios from 'axios';
import Header from '../partials/Header';


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
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page sections */}
          <FormInput form = {this.state.clubs} />

        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    );}
 }

export default InputClub;