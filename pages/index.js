import React from 'react'
import Layout from '../components/layout';
import '../scss/main.scss';
import CallToAction from '../components/CallToAction';

const Home = () => (
  <Layout title='Ligature Design'>
    <div className="hero">
      <h1 className="title">Ligature Design</h1>
      <p className="description">
        We make websites that get the job done.
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
