import React from 'react';
import axios from 'axios';

class Contact extends React.Component{
  state = {
    message: '',
    messages: []
  };

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name]: value})
  };
  
  submit = (event) => {
    event.preventDefault();

    const payload = {
      message: this.state.message
    };

    axios ({
      url:'/api/message',
      method: 'POST',
      data: payload
    })
    .then(() => {
      console.log('Data has been sent to the server');
      this.resetUserInputs();
      alert('Thank you for your message!');
    })
    .catch(() => {
      console.log('Internal server error');
      alert('Sorry, we seem to have run into an error');
    });;
  };

  resetUserInputs = () => {
    this.setState({
      message: ''
    });
  };

  render() {
    console.log('State: ', this.state);
    return (
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pb-12 md:pb-20">

              {/* CTA box */}
              <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

                {/* Background illustration */}
                <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
                  <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                        <stop stopColor="#DFDFDF" offset="0%" />
                        <stop stopColor="#4C4C4C" offset="44.317%" />
                        <stop stopColor="#333" offset="100%" />
                      </radialGradient>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g fill="#FFF">
                        <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                        <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                        <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                        <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                        <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                        <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                        <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                        <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                      </g>
                      <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                    </g>
                  </svg>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-between items-center">

                  {/* CTA content */}
                  <div className="text-center lg:text-left lg:max-w-xl">
                    <h3 className="h3 text-white mb-2">Reach out to us</h3>
                    <p className="text-gray-300 text-lg mb-6">We'd love to hear from you and what you think we should change/add to our site!</p>

                    {/* CTA form */}
                    <form className="w-full lg:w-auto" onSubmit={this.submit}>
                      <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                        <input 
                          type="text" 
                          className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500"
                          name="message"
                          placeholder="Your message..." 
                          aria-label="Your message..." 
                          value={this.state.message}
                          onChange={this.handleChange}/>
                        <button className="btn text-white bg-red-600 hover:bg-orange-600 shadow" href="#0">Submit</button>
                      </div>
                      {/* Success message */}
                      {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                    </form>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>
    );
  }
}

export default Contact;
