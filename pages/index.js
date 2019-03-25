import React from 'react'
import Layout from '../components/layout';
import '../scss/main.scss';
import CallToAction from '../components/CallToAction';

const Home = () => (
  <Layout title='Ligature Design'>
    <div className="hero">
      <div className='hero-logo'>
        <img src='../static/logo_full.png'></img>
      </div>
      <p className="description">
        Ligature Design makes websites that get the job done.
      </p>
      <p className='description'>Such as this one.</p>
    </div>
    <div className='row'>
      <div className='col text-center'>
        <CallToAction href='/connect'>Find out how we can make yours -></CallToAction>
      </div>
    </div>
    <div className='row'>
      <div className='col text-center'>
        <a href='/projects'>See projects we've done for other clients</a>
      </div>
    </div>
  </Layout>
)

export default Home
