import React from 'react';
import { Fragment } from 'react';

function ClubTable(props) {
    return(
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6">

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

            <div className="clubs ">
              <h1 className = "text-center pb-12 md:pb-16 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Premier League Clubs</h1>

              <table id="table-clubs">
                <thead>
                  <tr>
                    <th>Club</th>
                    <th>City</th>
                    <th>League Titles</th>
                    <th>Founded</th>
                  </tr>
                </thead>
  
                <tbody>
                  {props.table.map((clubs, index) => {
                    return (
                      <Fragment>
                        <tr>
                          <td>{clubs.club}</td>
                          <td>{clubs.city}</td>
                          <td>{clubs.league_titles}</td>
                          <td>{clubs.founded}</td>
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

export default ClubTable;