import React from 'react';
import axios from 'axios';

class FeaturesBlocks extends React.Component{

    state = {
      club: '',
      city: '',
      league_titles: '',
      founded: '',
      clubs: [],
      showModal: false,
      setShowModal: false
    };

    setShowModal = (e) => {
        this.setState({ showModal: e})
    };

    setClub = () => {
      this.setState({club: ""})
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
  
    handleChange = ({target}) => {
      const { name, value } = target;
      this.setState({[name]: value})
    };
  
    displayClubs = (clubs) => {
      if (!clubs.length) return null;
  
      return clubs.map((clubs, index) => (
        <div key={index}>
          <h1>{clubs.club}</h1>
          <p>{clubs.city}</p>
          <p>{clubs.league_titles}</p>
          <p>{clubs.founded}</p>
        </div>
      ))
    };

    /*map (
      <h1> clubs.club>
      <ClubModal clubFounded={club.Founded} clubLeague = {club.league}>
    )
    
    ClubModal extends Component (

      //modal logic

      render() {
        {this.props.clubFounded}
      }
    )
    */

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

              {/* 1st item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => {this.setShowModal(true); this.setClub("Arsenal");}}
              >
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <img className="md:max-w-none mx-auto rounded" src={require('../images/Arsenal-Logo.png')} width="125" height="125" alt="arsenal" />
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Arsenal</h4>
                  <p className="text-gray-600 text-center"></p>
                </div>
              </button>

              {/* 2nd item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
                <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                <img className="md:max-w-none mx-auto rounded" src={require('../images/AstonVillaLogo.png')} width="50" height="50" alt="aston villa" />
                  <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aston Villa</h4>
                  <p className="text-gray-600 text-center"></p>
                </div>
              </button>

              {/* 3rd item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/Brighton-logo.png')} width="70" height="70" alt="brighton" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Brighton</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 4th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/Burnleylogo.png')} width="125" height="125" alt="burnley" />             
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Burnley</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 5th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/chelsea-logo.png')} width="70" height="70" alt="chelsea" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Chelsea</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 6th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/crystalpalace-logo.png')} width="55" height="55" alt="crystal palace" />
                <p className="text-gray-600 text-center"></p>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Crystal Palace</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 7th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/everton-logo.png')} width="70" height="70" alt="everton" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Everton</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 8th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/fulham-logo.png')} width="55" height="55" alt="fulham" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fulham</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 9th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/leeds-logo.png')} width="63" height="63" alt="leeds united" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Leeds United</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 10th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/leicester-logo.png')} width="70" height="70" alt="leicester city" />            
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Leicester City</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 11th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/liverpool-logo.png')} width="55" height="55" alt="liverpool" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Liverpool</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 12th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/mancity-logo.png')} width="70" height="70" alt="manchester city" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Manchester City</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 13th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/manutd-logo.png')} width="70" height="70" alt="manchester united" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Manchester United</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 14th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/newcastleutdlogo.png')} width="70" height="70" alt="newcastle united" />           
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Newcastle United</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 15th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/sheffiled-logo.png')} width="70" height="70" alt="shefiled united" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sheffield United</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 16th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/southampton-logo.png')} width="63" height="63" alt="southampton" />
                <p className="text-gray-600 text-center"></p>
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Southampton</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 17th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/tottenham-logo.png')} width="35" height="35" alt="tottenham hotspur" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Tottenham Hotspur</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 18th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/westbrom-logo.png')} width="60" height="60" alt="west bromwich albion" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">West Bromwich Albion</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 19th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/westham-logo.png')} width="63" height="63" alt="west ham united" />
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">West Ham United</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

              {/* 20th item */}
              <button
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={() => this.setShowModal(true)}
              >
              <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/wolves-logo.png')} width="70" height="70" alt="wolverhampton wanderers" />           
                <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Wolverhampton Wanderers</h4>
                <p className="text-gray-600 text-center"></p>
              </div>
              </button>

            </div>

          </div>

          {this.state.showModal ? (
            <>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                onClick={() => this.setShowModal(false)}
                >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 className="text-3xl font-semibold">
                        {/* {this.displayClubs(this.state.clubs)} */}
                        Display Club Name Here...
                        </h3>
                        <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => this.setShowModal(false)}
                        >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                        </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <p className="my-4 text-gray-600 text-lg leading-relaxed">
                            Display individual club information here...
                            {this.displayClubs(this.state.clubs)}
                        </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => this.setShowModal(false)}
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
            ) : null}
        </div>
      </section>
    );
  }
}

export default FeaturesBlocks;
