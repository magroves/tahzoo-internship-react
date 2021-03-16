import React from 'react';
import axios from 'axios';

import Header from '../partials/Header';
import Messages from '../partials/Messages';
import Footer from '../partials/Footer';

class Suggestions extends React.Component{
    state = {
        message: '',
        messages: []
      };
    
      componentDidMount() {
        this.getMessages();
      };
    
      getMessages() { 
        axios.get('/api/message')
        .then((response) => {
          const data = response.data;
          console.log('Data has been received!!');
          this.setState({messages: data});
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
    
      displayMessages = (messages) => {
        if (!messages.length) return null;
    
        return messages.map((messages, index) => (
          <div key={index}>
            <h1>{messages.message}</h1>
          </div>
        ))
      };
    
    render() {
        return(
            <div className="flex flex-col min-h-screen overflow-hidden">

                {/*  Site header */}
                <Header />
        
                {/*  Page content */}
                <main className="flex-grow">
        
                    {/*  Page sections */}
                    <Messages />
                </main>

                {/*  Site footer */}
                <Footer />

            </div>
        );
      }
}

export default Suggestions;