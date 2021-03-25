import React from 'react';

function FormInput(props) {
  return (
    <div class="flex items-center h-screen w-full bg-teal-lighter">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <h1 class="block w-full text-center text-grey-darkest mb-6">
          Club Input Form
        </h1>
        <form class="mb-4 md:flex md:flex-wrap md:justify-between" onSubmit={props.submit} method="post">
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              name="club"
              placeholder="Club"
              value={props.club}
              onChange={props.handleChange}
            />
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              placeholder="City"
              name="city"
              value={props.city}
              onChange={props.handleChange}
            ></input>
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              placeholder="League Titles"
              name="league_titles"
              value={props.league_titles}
              onChange={props.handleChange}
            ></input>
          </div>
          <div class="flex flex-col mb-4">
            <input
              class="border py-2 px-3 text-grey-darkest md:mr-2"
              type="text"
              placeholder="Founded"
              name="founded"
              value={props.founded}
              onChange={props.handleChange}
            ></input>
          </div>

          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormInput;