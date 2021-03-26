import React from "react";
import { Fragment } from "react";

function ClubTable(props) {
  return (
    <section class="relative max-w-6xl overflow-mx-auto px-4 sm:px-6">
      {/* Illustration behind hero content */}
      <div
        class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
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

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        {/* Hero content */}
        <div class="w-full lg:w-5/6">
          <div className="clubs ">
            <h1
              class="text-center pb-12 md:pb-16 text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Premier League Clubs
            </h1>

            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-md leading-normal">
                  <th class="py-3 px-6 text-left">Club</th>
                  <th class="py-3 px-6 text-left">City</th>
                  <th class="py-3 px-6 text-center">League Titles</th>
                  <th class="py-3 px-6 text-center">Founded</th>
                </tr>
              </thead>

              <tbody class="text-gray-600 text-md font-light">
                {props.table.map((clubs, index) => {
                  return (
                    <Fragment>
                      <tr class="border-b bg-gray-50 border-gray-200 hover:bg-gray-100">
                        <td class="py-3 px-6 text-left whitespace-nowrap">{clubs.club}</td>
                        <td class="py-3 px-6 text-left">{clubs.city}</td>
                        <td class="py-3 px-6 text-center">{clubs.league_titles}</td>
                        <td class="py-3 px-6 text-center">{clubs.founded}</td>
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
