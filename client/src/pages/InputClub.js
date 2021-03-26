import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import FormInput from '../partials/FormInput';
//edit to fix client folder


class InputClub extends React.Component{

  render() {  

    console.log('State: ', this.state);
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page sections */}
          <FormInput />

        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    );}
 }


export default InputClub;