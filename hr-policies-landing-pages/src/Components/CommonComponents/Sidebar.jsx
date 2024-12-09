import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Sidebar.css';

const Sidebar = ({ currentPolicy, sidebar_data, onNavigate }) => {
  console.log(currentPolicy);
  console.log(sidebar_data);
  console.log(onNavigate);

  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle the dropdown visibility when a policy name is clicked
  const handleToggle = (policyName) => {
    if (openDropdown === policyName) {
      setOpenDropdown(null); // If it's already open, close it
    } else {
      setOpenDropdown(policyName); // Otherwise, open the clicked dropdown
    }
  };

  // Effect to open the dropdown if the currentPolicy matches
  useEffect(() => {
    if (currentPolicy) {
      setOpenDropdown(currentPolicy);
    }
  }, [currentPolicy]);

  return (
    <div className="sidebar">
      {/* Using Link for navigation */}
      <Link to="/confidential-policy" onClick={() => onNavigate('ConfidentialityPolicyPage')}>
        Confidentiality Policy
      </Link>

      <Link to="/exit-policy" onClick={() => onNavigate('ExitPolicy')}>
        Exit Policy
      </Link>
     

      <Link to="/payroll-policy" onClick={() => onNavigate('PayrollPolicy')}>
        Payroll Policy
      </Link>
     
      <Link to="/performance-expectations" onClick={() => onNavigate('PerformanceExpectations')}>
        Performance Expectations
      </Link>
      {/* {openDropdown === 'Performance Expectations' && sidebar_data['performance_expectations'] && (
        <div className="dropdown">
          {sidebar_data['performance_expectations'].map((item, index) => (
            <Link key={index} to={`#`} onClick={() => onNavigate(item)}>
              {item}
            </Link>
          ))}
        </div>
      )} */}

      <Link to="/communication-standards" onClick={() =>onNavigate('CommunicationStandards')}>
        Communication Standards
      </Link>
     

      <Link to="/leave-policy" onClick={() => onNavigate('Leave Policy')}>
        Leave Policy
      </Link>
     

      <Link to="/anti-harassment-policy" onClick={() => onNavigate('Anti-Harassment Policy')}>
        Anti-Harassment Policy
      </Link>
      
    </div>
  );
};

export default Sidebar;
