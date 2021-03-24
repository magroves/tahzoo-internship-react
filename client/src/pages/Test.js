import React from 'react';
import ClubBlock from '../utils/ClubBlock';


class Test extends React.Component{

render(){
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
              <ClubBlock name ="Arsenal" image={require('../images/Arsenal-Logo.png')} height="125" width ="125" club="Arsenal F.C." city="London" league_titles="13" founded="1886"/>

              {/* 2nd item */}
              <ClubBlock name ="Aston Villa" image={require('../images/AstonVillaLogo.png')} height="50" width ="50"/>

              {/* 3rd item */}
              <ClubBlock name ="Brighton" image={require('../images/Brighton-logo.png')} height="70" width ="70"/>

              {/* 4th item */}
              <ClubBlock name ="Burnley" image={require('../images/Burnleylogo.png')} height="125" width ="125"/>

              {/* 5th item */}
              <ClubBlock name ="Chelsea" image={require('../images/chelsea-logo.png')} height="70" width ="70"/>

              {/* 6th item */}
              <ClubBlock name ="Crystal Palace" image={require('../images/crystalpalace-logo.png')} height="55" width ="55"/>

              {/* 7th item */}
              <ClubBlock name ="Everton" image={require('../images/everton-logo.png')} height="70" width ="70"/>

              {/* 8th item */}
              <ClubBlock name ="Fulham" image={require('../images/fulham-logo.png')} height="55" width ="55"/>

              {/* 9th item */}
              <ClubBlock name ="Leeds United" image={require('../images/leeds-logo.png')} height="63" width ="63"/>

              {/* 10th item */}
              <ClubBlock name ="Leicester City" image={require('../images/leicester-logo.png')} height="70" width ="70"/>

              {/* 11th item */}
              <ClubBlock name ="Liverpool" image={require('../images/liverpool-logo.png')} height="55" width ="55"/>

              {/* 12th item */}
              <ClubBlock name ="Manchester City" image={require('../images/mancity-logo.png')} height="70" width ="70"/>

              {/* 13th item */}
              <ClubBlock name ="Manchester United" image={require('../images/manutd-logo.png')} height="70" width ="70"/>

              {/* 14th item */}
              <ClubBlock name ="Newcastle" image={require('../images/newcastleutdlogo.png')} height="70" width ="70"/>

              {/* 15th item */}
              <ClubBlock name ="Sheffield United" image={require('../images/sheffiled-logo.png')} height="70" width ="70"/>

              {/* 16th item */}
              <ClubBlock name ="Southampton" image={require('../images/southampton-logo.png')} height="63" width ="63"/>

              {/* 17th item */}
              <ClubBlock name ="Tottenham Hotspur" image={require('../images/tottenham-logo.png')} height="35" width ="35"/>

              {/* 18th item */}
              <ClubBlock name ="West Bromwich Albion" image={require('../images/westbrom-logo.png')} height="60" width ="60"/>

              {/* 19th item */}
              <ClubBlock name ="West Ham United" image={require('../images/westham-logo.png')} height="63" width ="63"/>

              {/* 20th item */}
              <ClubBlock name ="Wolverhampton Wanderers" image={require('../images/wolves-logo.png')} height="70" width ="70"/>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Test;
