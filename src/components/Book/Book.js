import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Book.css'

const Book = () => {
    const {bedType} = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {bedType} Room.</h1>
            <div className="gridCard">
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://st.hzcdn.com/simgs/pictures/family-rooms/english-pub-card-room-vujovich-design-build-inc-img~54813fa90f7f3205_4-0749-1-e150511.jpg" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://images.unsplash.com/photo-1603512500383-f1f87c13ffc4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlZHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://st.hzcdn.com/simgs/pictures/basements/basement-poker-room-miller-miller-architectural-photography-img~af21121903da97c7_4-1737-1-a4b7c3f.jpg" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://i.pinimg.com/originals/f7/94/92/f79492535bd62fdf0193de5081d02531.jpg" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
                <div className="singleCard">
                    <img style={{width:'100%',height:'100%'}} src="https://assets.mediamodifier.com/mockups/5c9c6b0762e71b4db34f0158/portrait-poster-frame-on-bedroom-wall-mockup.jpg" alt="" />
                    <div className="hoverDiv"><h1 style={{textAlign:'center',color:'white',paddingTop:'35%'}}>Book now</h1></div>
                </div>
            </div>
            <p>Want a <Link to="/home">different room?</Link> </p>
        </div>
    );
};

export default Book;