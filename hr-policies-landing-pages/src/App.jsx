import './App.css'
import React, { useState } from 'react';
import MainContent from './Components/CommonComponents/MainContent'
import MainHeader from './Components/CommonComponents/MainHeader'
import TrainPanel from './Components/CommonComponents/TrainPanel'
// import MainContent from './Components/CommonComponents/MainContent'
import FAQSection from './Components/CommonComponents/FAQSection'
import ContactUs from './Components/CommonComponents/ContactUs'
import DownloadBtn from './Components/CommonComponents/DownloadBtn'
import Sidebar from './Components/CommonComponents/Sidebar'
function App() {
  const [currentPolicy, setCurrentPolicy] = useState(''); // Track current active policy
  

 


  return (
    <>
    <MainHeader/>
    
    <MainContent/>
 

    <ContactUs/> 
    <DownloadBtn/>
    
   
    </>
  )
}

export default App
