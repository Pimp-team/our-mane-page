import React from 'react';
import styles from './app.module.scss';
import Form from './components/form/Form';
import PhotoBlock from './components/photo_block/PhotoBlock';
import Promo from './components/promo/Promo';
import Feedback from './components/feedback/Feedback'
import WhatWeDo from './components/what_we_do/WhatWeDo';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className={styles.App}>
        <NavBar/>

      <div className='wrapper'>
        <Promo />
        <PhotoBlock />
        <WhatWeDo /> 
      </div>
      <Form />      
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
