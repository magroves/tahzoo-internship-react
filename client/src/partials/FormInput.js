import React from 'react';

function FormInput(props) {
  return (
    <div class="flex items-center h-screen w-full bg-teal-lighter">
      <div class="w-full bg-gray-100 rounded shadow-lg p-8 m-4 md:max-w-xs md:mx-auto">
        <h1 class="text-gray-700 font-semibold text-2xl tracking-wide mb-2 text-center">
          Club Input Form
        </h1>
        <form class="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={props.submit} method="post">
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
              type="text"
              name="club"
              placeholder="Club"
              value={props.club}
              onChange={props.handleChange}
            />
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
              type="text"
              placeholder="City"
              name="city"
              value={props.city}
              onChange={props.handleChange}
            ></input>
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
              type="text"
              placeholder="League Titles"
              name="league_titles"
              value={props.league_titles}
              onChange={props.handleChange}
            ></input>
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2 text-xm"
              type="text"
              placeholder="Founded"
              name="founded"
              value={props.founded}
              onChange={props.handleChange}
            ></input>
          </div>

          <button class="block uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormInput;