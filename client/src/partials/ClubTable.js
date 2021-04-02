import React, {Fragment} from "react";
import axios from "axios";
import ImportClub from '../utils/ImportClub';
import EditClub from '../utils/EditClub';
import Button from 'react-bootstrap/Button';

class ClubTable extends React.Component{
  
  constructor(props) {
    super(props);
    this.deleteClub = this.deleteClub.bind(this);
  }

  deleteClub(id) {
      axios.delete('/api/clubs/' + id)
          .then((res) => {
              console.log('Club successfully deleted!')
          }).catch((error) => {
              console.log(error)
          })  
        
      window.location.reload(true);
      console.log(this.props)
  }


render(){
    return (
      <section className="relative">
        {/* Illustration behind hero content */}
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
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
      </div> */}

        <br></br>
        <br></br>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div class="flex flex-wrap justify-center">
              <div class="w-6/12 sm:w-4/12 px-4">
                <img
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2020/08/epl-premierleague-logo-768x768.png"
                  alt="..."
                  class="rounded max-w-full h-auto align-middle border-none"
                />
              </div>
            </div>

            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-center pb-12 md:pb-16 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Premier League
              </h1>

              <ImportClub />
              <br />
              <br />
              <br />

              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="text-gray-200 bg-purple-900 uppercase text-md leading-normal">
                    <th className="py-3 px-6 text-center">Logo</th>
                    <th className="py-3 px-6 text-left">Club</th>
                    <th className="py-3 px-6 text-left">City</th>
                    <th className="py-3 px-6 text-center">League Titles</th>
                    <th className="py-3 px-6 text-center">Founded</th>
                    <th className="py-3 px-6 text-center"></th>
                    <th className="py-3 px-6 text-center"></th>
                  </tr>
                </thead>

                <tbody className="text-gray-600 text-md font-light">
                  {this.props.table.map((clubs, index) => {
                    return (
                      <Fragment key={clubs.club + index}>
                        <tr className="border-b bg-gray-50 border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            <img
                              className="md:max-w-none mx-auto h-10 w-25 rounded"
                              src={clubs.image}
                              alt="club logo"
                            />
                          </td>
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            {clubs.club}
                          </td>
                          <td className="py-3 px-6 text-left">{clubs.city}</td>
                          <td className="py-3 px-6 text-center">
                            {clubs.league_titles}
                          </td>
                          <td className="py-3 px-6 text-center">
                            {clubs.founded}
                          </td>
                          <td className="py-1 px-2 text-center">
                            <EditClub
                              clubs={clubs}
                              size="sm"
                              variant="danger"
                            />
                          </td>
                          <td className="py-1 px-2 text-center">
                            <Button
                              className="btn-sm text-white bg-red-700 hover:bg-orange-600 ml-3 float-right"
                              onClick={() => this.deleteClub(clubs._id)}
                              size="sm"
                              variant="danger"
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
}
}

export default ClubTable;
