import React from 'react';
import axios from 'axios';

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
            <section className="relative">

                {/* Illustration behind hero content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
                <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                    </linearGradient>
                    </defs>
                    <g fill="url(#illustration-01)" fillRule="evenodd">
                    <circle cx="1232" cy="128" r="128" />
                    <circle cx="155" cy="443" r="64" />
                    </g>
                </svg>
                </div>
        
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400">Website Suggestions</span></h1>
                        <div className="max-w-3xl mx-auto">
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
                        </div>
                    </div>
                    </div>
                        <div className="flex flex-col min-h-screen overflow-hidden">
                            <div className="text-center pb-12 md:pb-16">
                                <div className="text-2xl md:text-6=3xl font-extrabold leading-tighter tracking-tighter mb-4">
                                    <ul className="text-m">
                                        <li className="mb-2">{this.displayMessages(this.state.messages)}</li>
                                    </ul>                          
                                </div>
                            </div>
                        </div> 
                </div> 
            </section> 
        );
      }
}

export default Suggestions;