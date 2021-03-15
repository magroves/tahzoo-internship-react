import React from 'react';

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the League</h2>
            <p className="text-xl text-gray-600">Check out all the teams, cities, trophies, and more!</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/Arsenal-Logo.png')} width="125" height="125" alt="arsenal" />
              {/* <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <rect className="fill-current text-red-600" width="64" height="64" rx="32" />           
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    // <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg> */}
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Arsenal</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/AstonVillaLogo.png')} width="50" height="50" alt="aston villa" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Aston Villa</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/Brighton-logo.png')} width="70" height="70" alt="brighton" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Brighton</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/Burnley-logo.png')} width="125" height="125" alt="burnley" />             
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Burnley</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/chelsea-logo.png')} width="70" height="70" alt="chelsea" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Chelsea</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/crystalpalace-logo.png')} width="55" height="55" alt="crystal palace" />
              <p className="text-gray-600 text-center"></p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Crystal Palace</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 7th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/everton-logo.png')} width="70" height="70" alt="everton" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Everton</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 8th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/fulham-logo.png')} width="55" height="55" alt="fulham" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Fulham</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 9th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/leeds-logo.png')} width="63" height="63" alt="leeds united" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Leeds United</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 10th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/leicester-logo.png')} width="70" height="70" alt="leicester city" />            
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Leicester City</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 11th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/liverpool-logo.png')} width="55" height="55" alt="liverpool" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Liverpool</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 12th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/mancity-logo.png')} width="70" height="70" alt="manchester city" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Manchester City</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 13th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/manutd-logo.png')} width="70" height="70" alt="manchester united" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Manchester United</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 14th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/newcastleutdlogo.png')} width="70" height="70" alt="newcastle united" />           
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Newcastle United</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 15th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/sheffiled-logo.png')} width="70" height="70" alt="shefiled united" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Sheffield United</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 16th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/southampton-logo.png')} width="63" height="63" alt="southampton" />
              <p className="text-gray-600 text-center"></p>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Southampton</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 17th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/tottenham-logo.png')} width="35" height="35" alt="tottenham hotspur" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Tottenham Hotspur</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 18th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/westbrom-logo.png')} width="60" height="60" alt="west bromwich albion" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">West Bromwich Albion</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 19th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/westham-logo.png')} width="63" height="63" alt="west ham united" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">West Ham United</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

            {/* 20th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <img className="md:max-w-none mx-auto rounded" src={require('../images/wolves-logo.png')} width="70" height="70" alt="wolverhampton wanderers" />           
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Wolverhampton Wanderers</h4>
              <p className="text-gray-600 text-center"></p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
