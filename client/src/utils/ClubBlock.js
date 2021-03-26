import React from 'react';

class ClubBlock extends React.Component {  

    state = {
        showModal: false,
        setShowModal: false
      };
  
      setShowModal = (e) => {
          this.setState({ showModal: e})
      };

    render(){
        return (
                <div className="relative flex flex-col justify-items-center">
                    <button
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => {this.setShowModal(true)}}
                    >
                        <div className="p-6 bg-white rounded shadow-xl">
                        <img className="object-scale-down md:max-w-none h-20 w-20 mx-auto rounded" src={this.props.club.image}  alt="club logo" />
                        <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">{this.props.club.club}</h4>
                        </div>
                    </button>
                    <div>
                      <div>
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
                                {this.props.club.club}
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
                            <img className="md:max-w-none mx-auto h-30 w-40 rounded" src={this.props.club.image} alt="club logo" />
                            <br/>
                                <p className="md:text-center mx-auto text-gray-600 text-lg leading-relaxed">
                                  <ul>
                                  <li><b>City: </b> {this.props.club.city} </li>
                                  <li><b>Year Founded: </b> {this.props.club.founded} </li>
                                  <li><b>League Titles: </b> {this.props.club.league_titles} </li>
                                  </ul>
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
                </div>
            </div>
        );
    }
}

export default ClubBlock;