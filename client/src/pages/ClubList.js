import React from 'react';
import axios from 'axios';

//edit to fix client folder

class ClubList extends React.Component{

  state = {
    club: '',
    city: '',
    league_titles: '',
    founded: '',
    clubs: []
  };

  // sorted(club1, club2) {
  //   club1 = club1.toLowerCase();
  //   club2 = club2.toLowerCase();

  //   return (club1 < club2) ? -1 : (club1 > club2) ? 1 : 0;
  // }

  // async sortClubs() {
  //   const sortedClubs = this.state.clubs;

  //   console.log(sortedClubs);

  //   sortedClubs.sort(function(club1, club2) {
  //     club1 = club1.toLowerCase();
  //     club2 = club2.toLowerCase();
  
  //     return (club1 < club2) ? -1 : (club1 > club2) ? 1 : 0;
  //   });
  //   this.setState({clubs:sortedClubs});
  //   console.log(this.state.clubs);
  // }

  async componentDidMount() {
    await this.getClubs();
    // await this.sortClubs();
  };

  async getClubs() { 
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      const sortedClubs = data;

      sortedClubs.sort(function(club1, club2) {
        club1 = club1.club.toLowerCase();
        club2 = club2.club.toLowerCase();
  
        return (club1 < club2) ? -1 : (club1 > club2) ? 1 : 0;
      });
      console.log('Data has been received!!');
      this.setState({clubs: data});
    })
    .catch((error) => {
      console.log(error);
      alert('Error');
    });
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name]: value})
  };

  displayClubs = (clubs) => {
    if (!clubs.length) return null;

    return clubs.map((clubs, index) => (
      <div key={index}>
        <h3>{clubs.club}</h3>
        <p>{clubs.city}</p>
        <p>{clubs.league_titles}</p>
        <p>{clubs.founded}</p>
      </div>
    ))
  };

  render() {
    return(
      <div>
        <div className="clubs">
          {this.displayClubs(this.state.clubs)}
        </div>
      </div>     
    );
  }
}

export default ClubList;