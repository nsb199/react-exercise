import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <h2 className="header-title">
          Where Fitness Meets Fun and Results Are Achieved
        </h2>
        <p className="header-description">
          Include an inspiring image or video that showcases your gym's
          energetic atmosphere, trainers, or members working out.
        </p>
      </div>
      <div className="header-images">
        <div className="header-images-left">
          <div className="header-image-container">
            <img
              className="header-image"
              src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg"
              alt=""
            />
          </div>
          <div className="header-image-container">
            <img
              className="header-image"
              src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="header-image-container full-width">
            <img
              className="header-image"
              src="https://wallpaperaccess.com/full/1087621.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="header-images-right">
          <div className="header-image-container full-width">
            <img
              className="header-image"
              src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              alt=""
            />
          </div>
          <div className="header-image-container">
            <img
              className="header-image"
              src="https://wallpapercave.com/wp/wp6331008.jpg"
              alt=""
            />
          </div>
          <div className="header-image-container">
            <img
              className="header-image"
              src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
