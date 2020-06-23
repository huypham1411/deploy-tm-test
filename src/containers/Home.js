import React from 'react';
import '../styles/containers/Home.css';
import BgHeader from '../components/Home/BgHeader';
// import CardList from '../components/Home/cardList/Cardlist';
import CircleWrapper from '../components/Home/CircleWrapper';
import HotBar from '../components/Home/HotBar';
import HotList from '../components/Home/cardList/HotList';
const Home =()=>{
        return (
           <div className="home">
            <BgHeader/>
            <CircleWrapper />
            <HotBar/>
            <HotList/>
            {/* <CardList/> */}
        </div>
        );
        }
export default Home;
