import React from 'react';
import axios from 'axios';

class ClubBlock extends React.Component {

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
        return(
          <div>
          </div>
        );
    }
} 

export default ClubBlock;