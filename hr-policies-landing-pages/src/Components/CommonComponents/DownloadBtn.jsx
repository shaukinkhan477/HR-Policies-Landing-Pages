import React ,{useState } from 'react';
import './DownloadBtn.css'; // Import custom CSS file for styling

const DownloadBtn = () => {
    const [color, setColor] = useState('#007bff'); // Initial color is blue

    // Toggle button color when clicked
    const handleClick = () => {
      // If the color is not red, change it to red, otherwise revert it to blue
      setColor(prevColor => (prevColor === '#007bff' ? '#dc3545' : '#007bff'));
    };
//   const [color, setColor] = useState('#28a745'); // Initial color is white

//   // Change color to green when the button is clicked
//   const handleClick = () => {
//     setColor('red'); // Green color
//   };

  return (
    <div className="button-container" style={{ position: 'fixed', right: '20px', bottom: '50px' }}>
      <div 
        className="button123" 
      
      
        onClick={handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download" style={{ cursor: 'pointer' }}>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" x2="12" y1="15" y2="3"></line>
        </svg>
      </div>
    </div>
  );
};

export default DownloadBtn;
