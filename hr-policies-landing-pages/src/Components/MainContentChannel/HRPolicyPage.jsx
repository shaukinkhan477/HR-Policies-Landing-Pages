// HRPolicyPage.js (or similar component)
import React from 'react';
import Banner from '../CommonComponents/Banner'
const HRPolicyPage = ({ banner_information, side_bar_activesection }) => {
    console.log(banner_information);
  return (
    <div className="hr-policy-page">
         <Banner banner_information={banner_information}/>
      {/* Render the banner title and image from the banner_information prop */}
     
    </div>
  );
};

export default HRPolicyPage;
