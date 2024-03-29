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

class EditClub extends React.Component {  

  constructor(props){
    super(props)

    this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        club: this.props.clubs.club,
        city: this.props.clubs.city,
        league_titles: this.props.clubs.league_titles,
        founded: this.props.clubs.founded,
        image: this.props.clubs.image,
        clubs: this.props.clubs,
        showModal: false,
        setShowModal: false,
        errors: {
          club: '',
          city: '',
          league_titles: '',
          founded: '',
          image: ''
        }
    }

    console.log(this.state);
  }

  handleChange = (e, stateName) => this.setState({clubs: {[stateName]: e.target.value}});

  onSubmit(e) {
    e.preventDefault()
    console.log(this.props.clubs._id);

    const clubObject = {
      club: this.state.clubs.club,
      city: this.state.clubs.city,
      founded: this.state.clubs.founded,
      league_titles: this.state.clubs.league_titles,
      image: this.state.clubs.image
    };

    console.log(clubObject);

    if(validateForm(this.state.errors)){
      console.info('Valid Form')
      axios.put('/api/clubs/' + this.props.clubs._id, clubObject)
      .then((res) => {
        console.log(res.data);
      alert("Updated Form Submitted!")
      })
      .catch(() => {
        console.log('Internal server error');
      });;
      }else{
      console.error('Invalid Form')
      alert("Invalid Form.")
      }

      this.setState({
        club: '',
        city: '',
        league_titles: '',
        founded: '',
        image: ''
      });

      window.location.reload(true);
    }

      setShowModal = (e) => {
        this.setState({ showModal: e})

    };
    
      render() {
        const {errors} = this.state;
        return (
                <div className="flex flex-col justify-items-center">
                    <button
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {this.setShowModal(true)}}
                    >
                        <div className="">
                        <h4 className="btn-sm text-black hover:bg-orange-500 hover:text-white ml-3 float-right">Edit</h4>
                        </div>
                    </button>
                    <div>
                      <div>
                    {this.state.showModal ? (
                    <>
                    <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"                  
                    >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 className="text-3xl font-semibold">
                            Club Edit Form
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
                        <div className="relative p-6 flex-auto inline-block">
                        <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={this.onSubmit}>
                            <div className="flex flex-col mb-4">
                                <input
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                type="club"
                                name="club"
                                placeholder="Club"
                                value={this.state.clubs.club}
                                onChange={(e) => this.handleChange(e, "club")}
                                />
                                {errors.club.length > 0 && 
                                <span className='error'>{errors.club}</span>}
                            </div>
                            <br/>
                            <div className="flex flex-col mb-4">
                                <input
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                type="text"
                                placeholder="City"
                                name="city"
                                value={this.state.clubs.city} 
                                onChange={(e) => this.handleChange(e, "city")}>
                                </input>
                                {errors.city.length > 0 && 
                                <span className='error'>{errors.city}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                type="text"
                                placeholder="League Titles"
                                name="league_titles"
                                value={this.state.clubs.league_titles} 
                                onChange={(e) => this.handleChange(e, "league_titles")}>
                                </input>
                                {errors.league_titles.length > 0 && 
                                <span className='error'>{errors.league_titles}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                type="text"
                                placeholder="Founded"
                                name="founded"
                                value={this.state.clubs.founded} 
                                onChange={(e) => this.handleChange(e, "founded")}>
                                </input>
                                {errors.founded.length > 0 && 
                                <span className="error">{errors.founded}</span>}
                            </div>
                            <div className="flex flex-col mb-4">
                                <input 
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                    type="text"
                                    placeholder="Image" 
                                    name="image" 
                                    value={this.state.clubs.image} 
                                    onChange={(e) => this.handleChange(e, "image")}>
                                    </input>
                                    {errors.image.length > 0 && 
                                    <span className="error">{errors.image}</span>}
                            </div>

                            <button className="block uppercase text-center shadow bg-blue-500 hover:bg-green-500 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded" 
                                    type="submit">
                                Update
                            </button>
                            </form>
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
            </div>
        </div>
            );
        }
}

export default EditClub;