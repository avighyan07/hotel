import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import Footer from './Footer';


const Home = () => {
    return (
    
    <div>
  <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ fontSize: '2em', color: '#333' }}>Welcome to Royal Suite</h1>
</div>
          <MyCarousel />;
          {/* <Footer /> */}

    </div>
    
    )
};

const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop={false}
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1500px', height: '800px' }}>
            <img src='https://wallpaperswide.com/download/hotel_room_2-wallpaper-3840x2160.jpg' alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', color: 'white', fontSize: '50px' }}>
                HOTELS
            </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
            <img src='https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D' alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', color: 'white', fontSize: '50px' }}>
                RESTUARANT
            </h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '1500px', height: '667px', paddingLeft: '180px' }}>
            <img src='https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?cs=srgb&dl=pexels-donald-tong-189296.jpg&fm=jpg' alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <h1 style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'black', color: 'white', fontSize: '50px' }}>
                SWIMMING POOL
            </h1>
        </div>
    </Carousel>
);

export default Home;
