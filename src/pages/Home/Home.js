import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import Stats from './Stats/Stats';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <div className="flex justify-center mb-20">
          <Link to="/services">
            <button className="btn btn-outline text-green-500 hover:bg-green-400 hover:border-none ml-3">
              see more
            </button>
          </Link>
            </div>
            <Stats></Stats>
            <AboutUs></AboutUs>
      </div>
    );
};

export default Home;