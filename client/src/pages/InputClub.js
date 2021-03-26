import React from 'react';
import axios from 'axios';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import FormInput from '../partials/FormInput';
//edit to fix client folder


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

  render() {  

    console.log('State: ', this.state);
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/*  Site header */}
        <Header />

        {/*  Page content */}
        <main className="flex-grow">

          {/*  Page sections */}
          <FormInput form = {this.state} />

        </main>

        {/*  Site footer */}
        <Footer />
      </div>
    );}
 }


export default InputClub;