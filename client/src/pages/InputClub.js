import React from 'react';

import Header from '../partials/Header';
import ClubImport from '../partials/ClubImport';
import Footer from '../partials/Footer';

class InputClub extends React.Component{
  render(){
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page sections */}
          <ClubImport />

        </main>

        {/*  Site footer */}
        <Footer />

    </div>
  );
  }
}

export default InputClub;