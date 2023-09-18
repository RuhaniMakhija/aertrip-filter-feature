import React,{useEffect, useState} from 'react';
import "./Header.css";
import logo from "../../images/logo.jpeg";
import profile from "../../images/profile.jpeg"
import { BsSun } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import Aertrip from "../../api-data.json"
import Card from '../Card/Card';
import airindia from "../../images/airindia.png"
import vistara from "../../images/vistara.png"
import indigo from "../../images/indigo.png"



const Header = () => {
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');
    const [selectedDate, setSelectedDate] = useState('');


    const [filteredFlights, setFilteredFlights] = useState([]);

    let arr=[];
    let flight=Aertrip.data.flights;
    

    const airlineMapping = {
        '6E': {
            name: 'IndiGo Airlines',
            logo: indigo,
        },
        'AI': {
            name: 'Air India',
            logo: airindia, 
        },
        'UK': {
            name: 'Vistara',
            logo: vistara,
        },
    };

    // const airlineMapping = {
    //     '6E': 'IndiGo Airlines',
    //     'AI': 'Air India',
    //     'UK': 'Vistara',
    // };

    

    const getFlight=(from,to)=>{
        flight.map((e)=>{
            let j=e.results.j;
            j.map((e)=>{
                let price=e.farepr;
                let leg=e.leg;
                leg.map((e)=>{
                    let flights=e.flights;
                    flights.map((e)=>{
                        if(from==e.fr && to==e.to){
                            const flightWithPrice = {
                                ...e,
                                price: price,
                                airlineName: airlineMapping[e.al].name,
                                airlineLogo: airlineMapping[e.al].logo,
                            };
                            arr.push(flightWithPrice);
                        }
                    })
                })
               
            })
        })
        setFilteredFlights(arr);
    }



   
   


    useEffect(()=>{
        console.log(filteredFlights);
    },[filteredFlights])


    const selectDate = (date) => {
        console.log(date);
        setSelectedDate(date);
    };

    let apdet=flight[0].results.apdet;
    const handleSearch=()=>{
        let from ="";
        let to="";
        for(let item in apdet){
            if(apdet[item].c==fromCity){
                console.log(item);
                from=item;
            }
            if(apdet[item].c==toCity){
                console.log(item);
                to=item;
            }
        }
        getFlight(from,to);

       
    }

   

  return (
    <div className='main-container'>
        {/* Navbar */}
        <div className='header-container sticky'>
        <div>
            <img src={logo} className='logo' alt="logo"/>
        </div>
        <div>
            <button className='nav-center-flight margin'>FLIGHT</button>
            <button className='nav-center-btn margin'>HOTEL</button>
            <button className='nav-center-btn margin'>VISA</button>
            <button className='nav-center-btn margin'>HOLIDAYS</button>
        </div>
        <div className='nav-right-section'>
            <p className='nav-right'><BsSun/></p>
            <p className='nav-right'>TRIPS</p>
            <img src={profile} className='nav-right-img nav-right' alt="nav-right-img"/>
        </div>
        </div>


        {/* Oneway,Passenger,Economy Details Section */}
        <div className='info-section'>
            <div className='info-section-left'>
                <div className='info'>
                    <p>Oneway</p>
                    <p className='down-arrow-icon'><AiFillCaretDown/></p>
                </div>
                <div className='info'>
                    <p>1 Passenger</p>
                    <p className='down-arrow-icon'><AiFillCaretDown/></p>
                </div>
                <div className='info'>
                    <p>Economy</p>
                    <p className='down-arrow-icon'><AiFillCaretDown/></p>
                </div>
            </div>
            <div className='info-section-right'>
                <p className='recent'>Recent Searches</p>
                <p className='down-arrow-icon'><AiFillCaretDown/></p>
            </div>
        </div>



        {/* Flight Details Section */}
        <div className='flight-details-container'>
            <div className='input-info'>
                <small>From</small>
                <input 
                    type='text' 
                    placeholder="Enter a city..." 
                    className='city-input'
                    onChange={(e) => {
                        setFromCity(e.target.value)
                        }
                    }
                />
                
            </div>
            <div className='input-info'>
                <small>To</small>
                <input 
                    type='text'
                    placeholder="Enter a city..." 
                    className='city-input'
                    onChange={(e) => setToCity(e.target.value)}
                />
                
            </div>
            <div className='input-info'>
                <small>Depart</small>
                <input
                    type="date"
                    value={selectedDate}
                    className='city-input'
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>
            <div>
                <button 
                    className='search-btn'
                    onClick={handleSearch}
                >Search</button>
            </div>
        </div>

        {filteredFlights?.map((card, index) => {
            const totalSeconds = card.ft;
            const hours = Math.floor(totalSeconds / 3600); 
            const minutes = Math.floor((totalSeconds % 3600) / 60); 
            
            
            return (
                <Card 
                    img={card.airlineLogo}
                    al={card.airlineName}
                    dt={card.dt}
                    ft={`${hours} hr ${minutes} min`}
                    at={card.at}
                    fr={card.fr}
                    to={card.to}
                    price={card.price}
                />
            )
        
        })}

        


    </div>
  )
}

export default Header
