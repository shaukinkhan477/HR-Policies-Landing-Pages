import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import HRPolicyPage from '../MainContentChannel/HRPolicyPage';
import ConfidentialPolicyPage from '../MainContentChannel/ConfidentialPolicyPage';
import PerformanceExpectations from '../MainContentChannel/PerformanceExpectations';
import CommunicationStandards from '../MainContentChannel/CommunicationStandards';
import PayrollPolicy from '../MainContentChannel/PayrollPolicy';
import LeavePolicy from '../MainContentChannel/LeavePolicy';
import ExitPolicy from '../MainContentChannel/ExitPolicy';

const MainContent = () => {
  const [currentPolicy, setCurrentPolicy] = useState('HRPolicyPage');
  const [sidebarData] = useState({
    confidential_policy: ['hello', 'introduction', 'details', 'overview', 'last lines'],
    performance_expectations: ['hello', 'introduction', 'details', 'overview', 'last lines'],
    communication_standards: ['hello', 'introduction', 'details', 'overview', 'last lines'],
    payroll_policy: ['hello', 'introduction', 'details', 'overview', 'last lines'],
    leave_policy: ['hello', 'introduction', 'details', 'overview', 'last lines'],
    exit_policy: ['hello', 'introduction', 'details', 'overview', 'last lines'],
  });



  // Function to handle navigation to different components
  const handleNavigate = (policyName) => {
    setCurrentPolicy(policyName); // Set the current policy
   
  };

  const bannerInfo = {
    hr_policy: {
      banner_title: "HR Policy",
      banner_image: "/images/construct1.png"
    },
    confidential_policy: {
      banner_title: "Confidential Policy",
      banner_image: "/images/construct2.png"
    },
    performance_expectations: {
      banner_title: "Performance Expectations",
      banner_image: "/images/construct3.png"
    },
    communication_standards: {
      banner_title: "Communication Standards",
      banner_image: "/images/construct4.png"
    },
    payroll_policy: {
      banner_title: "Payroll Policy",
      banner_image: "/images/construct5.png"
    },
    leave_policy: {
      banner_title: "Leave Policy",
      banner_image: "/images/construct6.png"
    },
    exit_policy: {
      banner_title: "Exit Policy",
      banner_image: "/images/construct7.png"
    }
  };

  return (
    <Router>
      <div className="main-container">
        {/* Sidebar */}
        <div className='sidebar-container' style={{position: "absolute",
    top: "400px"}}>
        <Sidebar 
          currentPolicy={currentPolicy} 
          sidebarData={sidebarData} 
          onNavigate={handleNavigate} // Pass handleNavigate to Sidebar
        />
        </div>
        <div className="content-area">
          <Routes>
            <Route 
              path="/hr-policy" 
              element={<HRPolicyPage banner_information={bannerInfo['hr_policy']} />} 
            />
            <Route 
              path="/confidential-policy" 
              element={<ConfidentialPolicyPage banner_information={bannerInfo['confidential_policy']} Active_section={"Confidential_Policy"} />} 
            />
            <Route 
              path="/performance-expectations" 
              element={<PerformanceExpectations banner_information={bannerInfo['performance_expectations']}  Active_section={"Performance_Expectations"}/>} 
            />
            <Route 
              path="/communication-standards" 
              element={<CommunicationStandards banner_information={bannerInfo['communication_standards']}  Active_section={"Communication_Standards"}/>} 
            />
            <Route 
              path="/payroll-policy" 
              element={<PayrollPolicy banner_information={bannerInfo['payroll_policy']} Active_section={"Payroll_Policy"} />} 
            />
            <Route 
              path="/leave-policy" 
              element={<LeavePolicy banner_information={bannerInfo['leave_policy']} Active_section={"Leave_Policy"}  />} 
            />
            <Route 
              path="/exit-policy" 
              element={<ExitPolicy banner_information={bannerInfo['exit_policy']} Active_section={"Exit_Policy"} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainContent;
