import React from 'react';
import axios from 'axios';
import ClubTable from '../partials/ClubTable';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
//edit to fix client folder

class ClubList extends React.Component{

  state = {
    club: '',
    city: '',
    league_titles: '',
    founded: '',
    clubs: []
  };

  async componentDidMount() {
    await this.getClubs();
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

  render() {
    return (
     <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

        {/*  Page content */}
        <main className="flex-grow">
          {/*  Page sections */}
          <ClubTable table = {this.state.clubs} />

        </main>

        {/*  Site footer */}
        <Footer />
    </div>
  );}
}

export default ClubList;