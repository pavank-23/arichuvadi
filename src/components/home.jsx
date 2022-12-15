import React from 'react';
import Landing from './landing';
import LTable from './ltable';
import Navbarx from './navbar';

function Home(){
    return(
        <div className='home'>
            <Navbarx />
            <Landing />
        </div>
    )
}

export default Home;