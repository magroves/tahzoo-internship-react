import React from 'react';
import axios from 'axios';
import ClubBlock from '../utils/ClubBlock';


class Test extends React.Component{

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
                <ClubBlock club={club}/>
              )}
            
              {/* 
                <ClubBlock name ="Arsenal" image="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/800px-Arsenal_FC.svg.png" height="125" width ="125" club="Arsenal F.C." city="London" league_titles="13" founded="1886"/>

                <ClubBlock name ="Aston Villa" image={require('../images/AstonVillaLogo.png')} height="50" width ="50"/>

                <ClubBlock name ="Brighton" image={require('../images/Brighton-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Burnley" image={require('../images/Burnleylogo.png')} height="125" width ="125"/>

                <ClubBlock name ="Chelsea" image={require('../images/chelsea-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Crystal Palace" image={require('../images/crystalpalace-logo.png')} height="55" width ="55"/>

                <ClubBlock name ="Everton" image={require('../images/everton-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Fulham" image={require('../images/fulham-logo.png')} height="55" width ="55"/>

                <ClubBlock name ="Leeds United" image={require('../images/leeds-logo.png')} height="63" width ="63"/>

                <ClubBlock name ="Leicester City" image={require('../images/leicester-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Liverpool" image={require('../images/liverpool-logo.png')} height="55" width ="55"/>

                <ClubBlock name ="Manchester City" image={require('../images/mancity-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Manchester United" image={require('../images/manutd-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Newcastle" image={require('../images/newcastleutdlogo.png')} height="70" width ="70"/>

                <ClubBlock name ="Sheffield United" image={require('../images/sheffiled-logo.png')} height="70" width ="70"/>

                <ClubBlock name ="Southampton" image={require('../images/southampton-logo.png')} height="63" width ="63"/>

                <ClubBlock name ="Tottenham Hotspur" image={require('../images/tottenham-logo.png')} height="35" width ="35"/>

                <ClubBlock name ="West Bromwich Albion" image={require('../images/westbrom-logo.png')} height="60" width ="60"/>

                <ClubBlock name ="West Ham United" image={require('../images/westham-logo.png')} height="63" width ="63"/>

                <ClubBlock name ="Wolverhampton Wanderers" image={require('../images/wolves-logo.png')} height="70" width ="70"/>
              */}
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Test;
