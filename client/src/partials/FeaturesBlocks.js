import React from 'react';
import axios from 'axios';
import ClubBlock from '../utils/ClubBlock';

class FeaturesBlocks extends React.Component{

  state = {
    club: '',
    city: '',
    league_titles: '',
    founded: '',
    image: '',
    clubs: []
  }

  async componentDidMount() {
    await this.getClubs();
  };

  async getClubs() { 
    axios.get('/api/clubs')
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

render(){
    return ( 
      <section className="relative">

        {/* Section background (needs .relative class on parent and next sibling elements) */}
        <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Explore the League</h2>
              <p className="text-xl text-gray-600">Check out all the teams, cities, trophies, and more!</p>
            </div>
              
              {/* Items */}
            <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

              {this.state.clubs.map((club, index) => 
                <ClubBlock club={club} key={club + index}/>
              )}
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default FeaturesBlocks;
