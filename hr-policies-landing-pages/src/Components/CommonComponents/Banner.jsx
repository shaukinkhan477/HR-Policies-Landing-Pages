import React from 'react';
import './Banner.css'
function Banner( {banner_information} ) {
  console.log(banner_information);
  return (
    <div className="banner">
      {/* Fix the src for the image */}
      <img src={banner_information.banner_image} alt="Construction Image" />
      <div className="banner-text">
        {/* Correct access to banner_title */}
        <h2>{banner_information.banner_title}</h2>
      </div>
    </div>
  );
}

export default Banner;
