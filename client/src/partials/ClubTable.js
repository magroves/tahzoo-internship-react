import React from 'react';
import { Fragment } from 'react';

function ClubTable(props) {
    return(
        <div>
          <div className="clubs">
            <h1>Premier League Clubs</h1>
  
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
    );
}

export default ClubTable;