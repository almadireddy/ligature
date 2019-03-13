import React from 'react';
import Head from './head';
import Nav from './nav'
import '../scss/main.scss'
const Layout = (props) => (
  <div>
    <Head title={props.title} />
    <Nav />
    {props.children}
  </div>  
)

export default Layout;