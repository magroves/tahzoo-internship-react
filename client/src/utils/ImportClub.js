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

class ImportClub extends React.Component {  

      state = {
        club: '',
        city: '',
        league_titles: '',
        founded: '',
        image: '',
        clubs: [],
        showModal: false,
        setShowModal: false,
        errors: {
          club: '',
          city: '',
          league_titles: '',
          founded: '',
          image: ''
        }
      };

      setShowModal = (e) => {
        this.setState({ showModal: e})
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

            window.location.reload(true);
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
        return (
                <div className="flex flex-col justify-items-center">
                    <button
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {this.setShowModal(true)}}
                    >
                        <div className="">
                        <h4 className="btn-sm text-gray-200 bg-gray-700 hover:bg-gray-800 ml-3 float-right">Import Club</h4>
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
                            Club Import Form
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
                        <form className="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={this.submit} method="post">
                            <div className="flex flex-col mb-4">
                                <input
                                className="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
                                type="text"
                                name="club"
                                placeholder="Club"
                                value={this.state.club}
                                onChange={this.handleChange}
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
                                value={this.state.city} 
                                onChange={this.handleChange}>
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
                                value={this.state.league_titles} 
                                onChange={this.handleChange}>
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
                                value={this.state.founded} 
                                onChange={this.handleChange}>
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
                                    value={this.state.image} 
                                    onChange={this.handleChange}>
                                    </input>
                                    {errors.image.length > 0 && 
                                    <span className="error">{errors.image}</span>}
                            </div>

                            <button className="block uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
                                Submit
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

export default ImportClub;