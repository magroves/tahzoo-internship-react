import React, {Fragment} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class Suggestions extends React.Component{

  constructor(props) {
    super(props);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  deleteMessage(id) {
      axios.delete('/api/message/' + id)
          .then((res) => {
              console.log('Message successfully deleted!')
          }).catch((error) => {
              console.log(error)
          })  
        
      window.location.reload(true);
      console.log(this.props)
  }
    
    render() {
        return(
            <section className="relative">
        
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
                {/* Hero content */}
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        
                    {/* Section header */}
                    <div className="text-center pb-12 md:pb-16">
                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-400"
                          >Website Suggestions / Messages
                          </span>
                        </h1>
                        <div className="max-w-3xl mx-auto">
                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300"></div>
                        </div>
                    </div>
                    <table className="min-w-max w-full table-auto">
                        <thead>
                          <tr className="bg-gray-200 text-gray-600 uppercase text-md leading-normal">
                            <th className="py-3 px-6 text-left">Message</th>
                            <th className="py-3 px-6 text-center"></th>
                          </tr>
                        </thead>

                        <tbody className="text-gray-600 text-md font-light">
                        {this.props.table.map((messages, index) => {
                            return (
                                <Fragment key={messages.message + index}>
                                  <tr className="border-b bg-gray-50 border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">{messages.message}</td>
                                    <td className="py-1 px-2 text-center"><Button className="btn-sm text-white bg-red-700 hover:bg-orange-600 ml-3 float-right" onClick={() => this.deleteMessage(messages._id)} size="sm" variant="danger">Delete</Button></td>
                                  </tr>
                                </Fragment>
                            );
                          })}
                        </tbody>
                     </table>
                     </div>
                  </div> 
            </section> 
        );
      }
}

export default Suggestions;